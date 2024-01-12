import React from "react";

// Components
import { InvoiceLayout } from "@/app/components";

// Helpers
import { formatNumberWithCommas, isDataUrl } from "@/lib/helpers";

// Variables
import { DATE_OPTIONS } from "@/lib/variables";

// Types
import { InvoiceType } from "@/types";

const InvoiceTemplate2 = (data: InvoiceType) => {
  const { sender, receiver, details } = data;
  return (
    <InvoiceLayout data={data}>
      <div className="text-xl md:text-2xl font-bold text-red-800 mb-4 justify-center">
        INVOICE-IMPORT
      </div>
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Invoice #
          </h2>
          <span className="mt-1 block text-gray-500">
            {details.invoiceNumber}
          </span>
          {details.invoiceLogo && (
            <img
              src={details.invoiceLogo}
              width={140}
              height={100}
              alt={`Logo of ${sender.name}`}
            />
          )}

          <h1 className="mt-2 text-lg md:text-xl font-semibold text-blue-600">
            {sender.name}
          </h1>
        </div>
        <div className="text-right">
          <address className="mt-4 not-italic text-gray-800">
            {sender.address}
            <br />
            {sender.zipCode}, {sender.city}
            <br />
            {sender.country}
            <br />
          </address>
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-3 border-1">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Bill to:</h3>
          <h3 className="text-lg font-semibold text-gray-800">
            {receiver.name}
          </h3>
          <address className="mt-2 not-italic text-gray-500">
            {receiver.address}, {receiver.zipCode}
            <br />
            {receiver.city}, {receiver.country}
            <br />
          </address>
          {receiver.email && (
            <div className="mt-2">
              <span className="font-semibold text-gray-800">Email:</span>{" "}
              <a href={`mailto:${receiver.email}`} className="text-blue-600">
                {receiver.email}
              </a>
            </div>
          )}

          {receiver.phone && (
            <div className="mt-2">
              <span className="font-semibold text-gray-800">Phone:</span>{" "}
              <a href={`tel:${receiver.phone}`} className="text-blue-600">
                {receiver.phone}
              </a>
              <br />
            </div>
          )}

          <hr className="my-2" />

          {receiver.po_number && (
            <div className="mt-2">
              <span className="font-semibold text-gray-800">PO No:</span>{" "}
              <span className="text-black font-medium">
                {receiver.po_number}
              </span>{" "}
              <br />
            </div>
          )}
          {receiver.commodity && (
            <div className="mt-2">
              <span className="font-semibold text-gray-800">Commodity:</span>{" "}
              <span className="text-black font-medium">
                {receiver.commodity}
              </span>{" "}
              <br />
            </div>
          )}
          {receiver.incoterm && (
            <div className="mt-2">
              <span className="font-semibold text-gray-800">Incoterm:</span>{" "}
              <span className="text-black font-medium">
                {receiver.incoterm}
              </span>{" "}
              <br />
            </div>
          )}
        </div>
        
        <div className="sm:text-right space-y-2 ">
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
            <dl className="grid sm:grid-cols-6 gap-x-3">
              <dt className="col-span-3 font-semibold text-gray-800">
                Invoice date:
              </dt>
              <dd className="col-span-3 text-gray-500">
                {new Date(details.invoiceDate).toLocaleDateString(
                  "en-US",
                  DATE_OPTIONS
                )}
              </dd>
            </dl>
            <dl className="grid sm:grid-cols-6 gap-x-3">
              <dt className="col-span-3 font-semibold text-gray-800">
                Due date:
              </dt>
              <dd className="col-span-3 text-gray-500">
                {new Date(details.dueDate).toLocaleDateString(
                  "en-US",
                  DATE_OPTIONS
                )}
              </dd>
            </dl>

            <dl className="grid sm:grid-cols-6 gap-x-3">
              <dt className="col-span-3 font-semibold text-gray-800">
                Shipper:
              </dt>
              <dd className="col-span-3 text-gray-500">{details.shipper}</dd>
            </dl>
            <dl className="grid sm:grid-cols-6 gap-x-3">
              <dt className="col-span-3 font-semibold text-gray-800">
                Consignee
              </dt>
              <dd className="col-span-3 text-gray-500">{details.consignee}</dd>
            </dl>
            {details.seaWayBillNo && (
              <dl className="grid sm:grid-cols-5 gap-x-3">
                <dt className="col-span-3 font-semibold text-gray-800">
                  SEA WAY BILL NO.
                </dt>
                <dd className="col-span-2 text-gray-500">
                    {details.seaWayBillNo}
                </dd>
              </dl>
            )}
            {details.unicefRefNo && (
              <dl className="grid sm:grid-cols-5 gap-x-3">
                <dt className="col-span-3 font-semibold text-gray-800">
                  UNICEF REFERENCE:
                </dt>
                <dd className="col-span-2 text-gray-500">
                    {details.unicefRefNo}
                </dd>
              </dl>
            )}
            {details.noOfContainer && (
              <dl className="grid sm:grid-cols-5 gap-x-3">
                <dt className="col-span-3 font-semibold text-gray-800">
                  Number of Container:
                </dt>
                <dd className="col-span-2 text-gray-500">
                    {details.noOfContainer}
                </dd>
              </dl>
            )}
            <dl className="grid sm:grid-cols-6 gap-x-3">
              <dt className="col-span-3 font-semibold text-blue-600 ">
                Payment terms:
              </dt>
              <dd className="col-span-3 font-bold text-red-800">
                {details.paymentTerms}
              </dd>
            </dl>
            <dl className="grid sm:grid-cols-6 gap-x-3">
              <dt className="col-span-3 font-semibold text-gray-800">
                Gross Weight:
              </dt>
              <dd className="col-span-3 text-gray-500">
                {details.grossweight} KG
              </dd>
            </dl>
            <dl className="grid sm:grid-cols-6 gap-x-3">
              <dt className="col-span-3 font-semibold text-gray-800">
                Chargable Weight:
              </dt>
              <dd className="col-span-3 text-gray-500">
                {details.chargableweight} KG
              </dd>
            </dl>
            <dl className="grid sm:grid-cols-6 gap-x-3">
              <dt className="col-span-3 font-semibold text-gray-800">
                Destination:
              </dt>
              <dd className="col-span-3 text-gray-500">
                {details.destination}
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="border border-gray-200 p-1 rounded-lg space-y-1">
          <div className="hidden sm:grid sm:grid-cols-5">
            <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">
              Item
            </div>
            <div className="text-left text-xs font-medium text-gray-500 uppercase">
              Qty
            </div>
            <div className="text-left text-xs font-medium text-gray-500 uppercase">
              Rate
            </div>
            <div className="text-right text-xs font-medium text-gray-500 uppercase">
              Amount
            </div>
          </div>
          <div className="hidden sm:block border-b border-gray-200"></div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-y-1">
            {details.items.map((item, index) => (
              <React.Fragment key={index}>
                <div className="col-span-full sm:col-span-2 border-b border-gray-300">
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
                <div className="border-b border-gray-300">
                  <p className="text-gray-800">{item.quantity}</p>
                </div>
                <div className="border-b border-gray-300">
                  <p className="text-gray-800">
                    {item.unitPrice} {details.currency}
                  </p>
                </div>
                <div className="border-b border-gray-300">
                  <p className="sm:text-right text-gray-800">
                    {item.total} {details.currency}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="sm:hidden border-b border-gray-200"></div>
        </div>
      </div>

      <div className="mt-2 flex sm:justify-end">
        <div className="w-full max-w-2xl sm:text-right space-y-2">
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
            <dl className="grid sm:grid-cols-5 gap-x-3">
              <dt className="col-span-3 font-semibold text-gray-800">
                Subtotal:
              </dt>
              <dd className="col-span-2 text-gray-500">
                {formatNumberWithCommas(Number(details.subTotal))}{" "}
                {details.currency}
              </dd>
            </dl>
            {details.discountDetails?.amount != undefined &&
              details.discountDetails?.amount > 0 && (
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800">
                    Discount:
                  </dt>
                  <dd className="col-span-2 text-gray-500">
                    {details.discountDetails.amountType === "amount"
                      ? `- ${details.discountDetails.amount} ${details.currency}`
                      : `- ${details.discountDetails.amount}%`}
                  </dd>
                </dl>
              )}
            {details.taxDetails?.amount != undefined &&
              details.taxDetails?.amount > 0 && (
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800">
                    Tax:
                  </dt>
                  <dd className="col-span-2 text-gray-500">
                    {details.taxDetails.amountType === "amount"
                      ? `+ ${details.taxDetails.amount} ${details.currency}`
                      : `+ ${details.taxDetails.amount}%`}
                  </dd>
                </dl>
              )}
            {details.shippingDetails?.cost != undefined &&
              details.shippingDetails?.cost > 0 && (
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800">
                    Shipping:
                  </dt>
                  <dd className="col-span-2 text-gray-500">
                    {details.shippingDetails.costType === "amount"
                      ? `+ ${details.shippingDetails.cost} ${details.currency}`
                      : `+ ${details.shippingDetails.cost}%`}
                  </dd>
                </dl>
              )}
            <dl className="grid sm:grid-cols-5 gap-x-3">
              <dt className="col-span-3 font-semibold text-gray-800">Total:</dt>
              <dd className="col-span-2 text-gray-500">
                {formatNumberWithCommas(Number(details.totalAmount))}{" "}
                {details.currency}
              </dd>
            </dl>
            {details.totalAmountInWords && (
              <dl className="grid sm:grid-cols-5 gap-x-3">
                <dt className="col-span-3 font-semibold text-gray-800">
                  Total in words:
                </dt>
                <dd className="col-span-2 text-gray-500">
                  <em>
                    {details.totalAmountInWords} {details.currency}
                  </em>
                </dd>
              </dl>
            )}
          </div>
        </div>
      </div>

      <div>
        <div className="my-4">
          <div className="my-2">
            <p className="font-semibold text-blue-600">Additional notes:</p>
            <p className="font-regular text-gray-800">
              {details.additionalNotes}
            </p>
          </div>
          {/* <div className="my-2">
            <p className="font-semibold text-blue-600">Payment terms:</p>
            <p className="font-bold text-red-800">{details.paymentTerms}</p>
          </div> */}
          <div className="my-6" style={{"pageBreakBefore":"always"}}>
          {/* <div className="my-6"> */}
            <h1 className="font-bold text-xl text-black">SHREYASH SHARMA</h1>
            <br />
            <h2 className="font-semibold text-l text-black">
              Instruction to send telex transfer:
            </h2>
            <br />
            <h2 className="font-semibold text-l text-black">
              PAYMENT METHOD FOR INTERNATIONAL PARTICIPANTS DOLLAR ACCOUNT/
              SWIFT TRANSFER
            </h2>
            <br />
            <span className="font-bold text-md text-gray-800">
              <p className="text-sm">
                Bank Name: {details.paymentInformation?.bankName}
              </p>
              <p className="text-sm">
                Bank Address: {details.paymentInformation?.bankAddress}
              </p>
              <p className="text-sm">
                Branch Address: {details.paymentInformation?.branchAddress}
              </p>
              <p className="text-sm">
                Swift Code: {details.paymentInformation?.swiftCode}
              </p>
              <p className="text-sm">
                Account name: {details.paymentInformation?.accountName}
              </p>
              <p className="text-sm">
                Account no: {details.paymentInformation?.accountNumber}
              </p>
              <hr className="my-2" />
              <p className="text-sm">
                Beneficiary: {details.paymentInformation?.beneficiary}
              </p>
              <p className="text-sm">
                Beneficiary Address:{" "}
                {details.paymentInformation?.beneficiaryAddress}
              </p>
            </span>
          </div>
        </div>
        <p className="text-black font-bold text-md">
          After transferring the payment through DOLLAR ACCOUNT or SWIFT, please
          send an email attaching the scanned copy of the payment recipt/ SWIFT
          message to{" "}
        </p>
        <p className="text-gray-500 text-sm">
          <a href={`mailto:${sender.email}`} className="text-blue-600">
            {sender.email}
          </a>
        </p>
        <p className="text-gray-500 text-sm mt-2">
          If you have any questions concerning this invoice, use the following
          contact information:
        </p>
        <div>
          <p className="block text-sm font-medium text-gray-800">
            {sender.email}
          </p>
          <p className="block text-sm font-medium text-gray-800">
            {sender.phone}
          </p>
        </div>
      </div>

      {/* Signature */}
      {details?.signature?.data && isDataUrl(details?.signature?.data) ? (
        <div className="mt-6">
          <p className="font-semibold text-gray-800">Signature:</p>
          <img
            src={details.signature.data}
            width={120}
            height={60}
            alt={`Signature of ${sender.name}`}
          />
        </div>
      ) : details.signature?.data ? (
        <div className="mt-6">
          <p className="text-gray-800">Signature:</p>
          <p
            style={{
              fontSize: 30,
              fontWeight: 400,
              fontFamily: `${details.signature.fontFamily}, cursive`,
              color: "black",
            }}
          >
            {details.signature.data}
          </p>
        </div>
      ) : null}
    </InvoiceLayout>
  );
};

export default InvoiceTemplate2;
