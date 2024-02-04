import { NextRequest, NextResponse } from "next/server";

// Chromium
import chromium from "@sparticuz/chromium";

// Helpers
import { getInvoiceTemplate } from "@/lib/helpers";

// Variables
import {
  CHROMIUM_EXECUTABLE_PATH,
  ENV,
  INVOICE_LOGO_PATH,
  TAILWIND_CDN,
} from "@/lib/variables";

// Types
import { InvoiceType } from "@/types";

// Node.js modules
import fs from "fs";
import path from "path";

/**
 * Converts an image to a base64 encoded string.
 * @param {string} imagePath - The path to the image file.
 * @returns {Promise<string>} A promise that resolves with the base64 encoded string of the image.
 */
function convertImageToBase64(imagePath: string) {
  return new Promise((resolve, reject) => {
    const fullPath = path.resolve(imagePath);
    const fileExtension = path.extname(fullPath).toLowerCase();

    const mimeTypeMap: { [key: string]: string } = {
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".svg": "image/svg+xml",
      ".gif": "image/gif",
      // Add more MIME types as needed
    };

    const mimeType = mimeTypeMap[fileExtension] || "application/octet-stream";

    fs.readFile(fullPath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const base64Image = `data:${mimeType};base64,${data.toString(
          "base64"
        )}`;
        resolve(base64Image);
      }
    });
  });
}

/**
 * Generate a PDF document of an invoice based on the provided data.
 *
 * @async
 * @param {NextRequest} req - The Next.js request object.
 * @throws {Error} If there is an error during the PDF generation process.
 * @returns {Promise<NextResponse>} A promise that resolves to a NextResponse object containing the generated PDF.
 */
export async function generatePdfService(req: NextRequest) {
  const body: InvoiceType = await req.json();

  if (body.details.invoiceLogo === "") {
    // now modify the body to include the base64 encoded image
    const logoBase64 = await convertImageToBase64(INVOICE_LOGO_PATH);

    // console.log("logoBase64:::", logoBase64);

    if (typeof logoBase64 === "string") {
      body.details.invoiceLogo = logoBase64;
    }
  }

  // console.log("body:::", body)

  try {
    const ReactDOMServer = (await import("react-dom/server")).default;

    // Get the selected invoice template
    const templateId = body.details.pdfTemplate;
    const InvoiceTemplate = await getInvoiceTemplate(templateId);

    // Read the HTML template from a React component
    const htmlTemplate = ReactDOMServer.renderToStaticMarkup(
      InvoiceTemplate(body)
    );

    // Create a browser instance
    let browser;

    // const puppeteer = await import("puppeteer");
    // browser = await puppeteer.launch({
    //   args: ["--no-sandbox", "--disable-setuid-sandbox"],
    //   headless: "new",
    // });

    // Launch the browser in production or development mode depending on the environment
    if (ENV === "production") {
      const puppeteer = await import("puppeteer-core");
      browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(CHROMIUM_EXECUTABLE_PATH),
        headless: chromium.headless === "new" ? true : chromium.headless,
      });
    } else if (ENV === "development") {
      const puppeteer = await import("puppeteer");
      browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        headless: "new",
      });
    }

    if (!browser) {
      throw new Error("Failed to launch browser");
    }

    const page = await browser.newPage();

    // Set the HTML content of the page
    await page.setContent(await htmlTemplate, {
      // * "waitUntil" prop makes fonts work in templates
      waitUntil: "networkidle0",
    });

    // Add Tailwind CSS
    await page.addStyleTag({
      url: TAILWIND_CDN,
    });

    const pdf: Buffer = await page.pdf({
      format: "a4",
      printBackground: true,
      displayHeaderFooter: true,
      margin: {
        top: "1.5cm",
        bottom: "0.5cm",
      },
      headerTemplate: `
                <div style="font-size: 10px; margin-left: 20px; text-align: center;">
                    <span>Seasky Cargo Service Pvt. Ltd.</span>
                </div>
            `,
    });

    // Close the Puppeteer browser
    await browser.close();

    // Create a Blob from the PDF data
    const pdfBlob = new Blob([pdf], { type: "application/pdf" });

    // console.log("pdfBlob:::", pdfBlob);

    const response = new NextResponse(pdfBlob, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=invoice.pdf",
      },
      status: 200,
    });

    return response;
  } catch (error) {
    console.error(error);

    // Return an error response
    return new NextResponse(`Error generating PDF: \n${error}`, {
      status: 500,
    });
  }
}
