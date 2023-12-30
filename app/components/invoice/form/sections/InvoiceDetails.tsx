"use client";

// Components
import {
    CurrencySelector,
    DatePickerFormField,
    FormInput,
    FormFile,
    Subheading,
    // TemplateSelector,
} from "@/app/components";

// Contexts
import { useTranslationContext } from "@/contexts/TranslationContext";

const InvoiceDetails = () => {
    const { _t } = useTranslationContext();

    return (
        <section className="flex flex-col flex-wrap gap-5">
            <Subheading>{_t("form.steps.invoiceDetails.heading")}:</Subheading>

            <div className="flex flex-row flex-wrap gap-5">
                <div className="flex flex-col gap-2">
                    <FormFile
                        name="details.invoiceLogo"
                        label={_t(
                            "form.steps.invoiceDetails.invoiceLogo.label"
                        )}
                        placeholder={_t(
                            "form.steps.invoiceDetails.invoiceLogo.placeholder"
                        )}
                    />

                    <FormInput
                        name="details.invoiceNumber"
                        label={_t("form.steps.invoiceDetails.invoiceNumber")}
                        placeholder="Invoice number"
                    />

                    <DatePickerFormField
                        name="details.invoiceDate"
                        label={_t("form.steps.invoiceDetails.issuedDate")}
                    />

                    <DatePickerFormField
                        name="details.dueDate"
                        label={_t("form.steps.invoiceDetails.dueDate")}
                    />

                    <CurrencySelector
                        name="details.currency"
                        label={_t("form.steps.invoiceDetails.currency")}
                        placeholder="Select Currency"
                    />
                    <FormInput
                        name="details.shipper"
                        label={_t("form.steps.invoiceDetails.shipper")}
                        placeholder="Shipper"
                    />
                    <FormInput
                        name="details.consignee"
                        label={_t("form.steps.invoiceDetails.consignee")}
                        placeholder="Consignee"
                    />
                    <FormInput
                        name="details.mawb"
                        label={_t("form.steps.invoiceDetails.mawb")}
                        placeholder="MAWB"
                    />
                    <FormInput
                        name="details.hawb"
                        label={_t("form.steps.invoiceDetails.hawb")}
                        placeholder="HAWB"
                    />
                    <FormInput
                        name="details.noofpcs"
                        label={_t("form.steps.invoiceDetails.noofpcs")}
                        placeholder="Number of Pieces"
                    />
                    <FormInput
                        name="details.grossweight"
                        label={_t("form.steps.invoiceDetails.grossweight")}
                        placeholder="Gross Weight"
                    />
                    <FormInput
                        name="details.chargableweight"
                        label={_t("form.steps.invoiceDetails.chargableweight")}
                        placeholder="Chargable Weight"
                    />
                    <FormInput
                        name="details.destination"
                        label={_t("form.steps.invoiceDetails.destination")}
                        placeholder="Destination"
                    />

                </div>

                {/* <div className="flex flex-col gap-2">
                    <TemplateSelector />
                </div> */}
            </div>
        </section>
    );
};

export default InvoiceDetails;
