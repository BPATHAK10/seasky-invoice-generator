// Types
import { SignatureColor, SignatureFont } from "@/types";

/**
 * Environment
 */
export const ENV = process.env.NODE_ENV;

/**
 * Websites
 */
export const BASE_URL = "https://invoify.vercel.app";

/**
 * API endpoints
 */
export const GENERATE_PDF_API = "/api/invoice/generate";
export const SEND_PDF_API = "/api/invoice/send";
export const EXPORT_INVOICE_API = "/api/invoice/export";

/**
 * External API endpoints
 */
export const CURRENCIES_API =
    "https://openexchangerates.org/api/currencies.json";

/**
 * Chromium for Puppeteer
 */
export const CHROMIUM_EXECUTABLE_PATH =
    "https://github.com/Sparticuz/chromium/releases/download/v119.0.0/chromium-v119.0.0-pack.tar";

/**
 * Tailwind
 */
export const TAILWIND_CDN =
    "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";

/**
 * Google
 */
export const GOOGLE_SC_VERIFICATION = process.env.GOOGLE_SC_VERIFICATION;

/**
 * Nodemailer
 */
export const NODEMAILER_EMAIL = process.env.NODEMAILER_EMAIL;
export const NODEMAILER_PW = process.env.NODEMAILER_PW;

/**
 * I18N
 */
export const LOCALES = [
    { code: "en", name: "English" },
    { code: "de", name: "German" },
];
export const DEFAULT_LOCALE = LOCALES[0].code;

/**
 * Signature variables
 */
export const SIGNATURE_COLORS: SignatureColor[] = [
    { name: "black", label: "Black", color: "rgb(0, 0, 0)" },
    { name: "dark blue", label: "Dark Blue", color: "rgb(0, 0, 128)" },
    {
        name: "crimson",
        label: "Crimson",
        color: "#DC143C",
    },
];

export const SIGNATURE_FONTS: SignatureFont[] = [
    {
        name: "Dancing Script",
        variable: "var(--font-dancing-script)",
    },
    { name: "Parisienne", variable: "var(--font-parisienne)" },
    {
        name: "Great Vibes",
        variable: "var(--font-great-vibes)",
    },
    {
        name: "Alex Brush",
        variable: "var(--font-alex-brush)",
    },
];

/**
 * Form date options
 */
export const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
};

export const SHORT_DATE_OPTIONS: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
};

/**
 * Form defaults
 */
export const FORM_DEFAULT_VALUES = {
    sender: {
        name: "SEASKY CARGO SERVICE PVT. LTD",
        address: "Ward No 26, Dholahiti",
        zipCode: "44600",
        city: "Lalitpur",
        country: "Nepal",
        email: "seaskynepal@gmail.com",
        phone: "+977-15570460",
        customInputs: [],
    },
    receiver: {
        name: "",
        address: "",
        city: "",
        country: "",
        email: "",
        phone: "",
        po_number: "",
        commodity: "",
        incoterm: "",
        customInputs: [],
    },
    details: {
        invoiceLogo: "",
        invoiceNumber: "",
        invoiceDate: "",
        dueDate: "",
        shipper: "",
        consignee: "",
        mawb: "",
        hawb: "",
        noofpcs: "",
        grossweight: "",
        chargableweight: "",
        destination: "",
        items: [
            {
                name: "",
                description: "",
                quantity: 0,
                unitPrice: 0,
                total: 0,
            },
        ],
        currency: "USD",
        language: "English",
        taxDetails: {
            amount: 0,
            amountType: "amount",
            taxID: "",
        },
        discountDetails: {
            amount: 0,
            amountType: "amount",
        },
        shippingDetails: {
            cost: 0,
            costType: "amount",
        },
        paymentInformation: {
            bankName: "NEPAL INVESTMENT MEGA BANK LIMITED.",
            accountName: "SEA SKY CARGO SERVICE(P) LTD.",
            accountNumber: "00101010067992",
            bankAddress: "KATHMANDU, NEPAL",
            swiftCode: "NIBL NP KT",
            branchAddress: "DURBAR MARG, KAHTMANDU, NEPAL",
            beneficiaryAddress: "WARD NO 26, DHOLAHITI, SUNAKOTHI, LALITPUR, KATHMANDU, NEPAL",
            beneficiary: "SEA SKY CARGO SERVICE(P) LTD.",
        },
        additionalNotes: "",
        paymentTerms: "",
        totalAmountInWords: "",
        pdfTemplate: 1,
    },
};

/**
 * ? DEV Only
 * Form auto fill values for testing
 */
export const FORM_FILL_VALUES = {
    sender: {
        name: "SEASKY CARGO SERVICE PVT. LTD",
        address: "Ward No 26, Dholahiti",
        zipCode: "44600",
        city: "Lalitpur",
        country: "Nepal",
        email: "seaskynepal@gmail.com",
        phone: "+977-15570460",
    },
    receiver: {
        name: "Jane Smith",
        address: "456 Elm St",
        city: "Other Town",
        country: "Canada",
        email: "janesmith@example.com",
        phone: "987-654-3210",
        po_number: "PO197047, PO197048",
        commodity: "Nepalese paper product",
        incoterm: "EX-Works",
    },
    details: {
        invoiceLogo: "",
        invoiceNumber: "INV0001",
        invoiceDate: new Date(),
        dueDate: new Date(),
        shipper: "KHADI PAPER",
        consignee: "LUSH JAPAN G.K",
        mawb: "285-0581-1934",
        hawb: "SSCS00623",
        noofpcs: "25",
        grossweight: "342",
        chargableweight: "342",
        destination: "Narita, Japan",
        items: [
            {
                name: "Product 1",
                description: "Description of Product 1",
                quantity: 0,
                unitPrice: 50,
                total: 200,
            },
            {
                name: "Product 2",
                description: "Description of Product 2",
                quantity: 5,
                unitPrice: 50,
                total: 250,
            },
            {
                name: "Product 3",
                description: "Description of Product 3",
                quantity: 5,
                unitPrice: 80,
                total: 400,
            },
        ],
        currency: "USD",
        language: "English",
        // taxDetails: {
        //     amount: 15,
        //     amountType: "percentage",
        //     taxID: "987654321",
        // },
        // discountDetails: {
        //     amount: 5,
        //     amountType: "percentage",
        // },
        // shippingDetails: {
        //     cost: 5,
        //     costType: "percentage",
        // },
        paymentInformation: {
            bankName: "NEPAL INVESTMENT MEGA BANK LIMITED.",
            accountName: "SEA SKY CARGO SERVICE(P) LTD.",
            accountNumber: "00101010067992",
            bankAddress: "KATHMANDU, NEPAL",
            swiftCode: "NIBL NP KT",
            branchAddress: "DURBAR MARG, KAHTMANDU, NEPAL",
            beneficiaryAddress: "WARD NO 26, DHOLAHITI, SUNAKOTHI, LALITPUR, KATHMANDU, NEPAL",
            beneficiary: "SEA SKY CARGO SERVICE(P) LTD.",
        },
        additionalNotes: "Thank you for your business",
        paymentTerms: "Net 30",
        signature: {
            data: "",
        },
        subTotal: "850",
        totalAmount: "850",
        totalAmountInWords: "Eight Hundred Fifty",
        pdfTemplate: 1,
    },
};
