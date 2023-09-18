"use client";

// Form imports
import { useForm } from "react-hook-form";

// Zod imports
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Form schemas
import { InvoiceSchema } from "@/lib/schemas";

// Shadcn components
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Custom components
import { InputFormField } from ".";
import { Label } from "@/components/ui/label";

const InvoiceCard = () => {
    const form = useForm<z.infer<typeof InvoiceSchema>>({
        resolver: zodResolver(InvoiceSchema),
        defaultValues: {
            sender: {
                name: "",
                address: "",
				zipCode: "",
				city: "",
				country: "",
				email: "",
				phone: "",
				vatNumber: "",
            },
			receiver: {
				name: "",
				address: "",
				zipCode: "",
				city: "",
				country: "",
				email: "",
				phone: "",
				vatNumber: "",
			}
        },
    });

    const onSubmit = (values: z.infer<typeof InvoiceSchema>) => {
        console.log("VALUE");
        console.log(values);
    };

    return (
        <div className="max-w-5xl pt-10">
            <Card>
                <CardHeader>
                    <CardTitle>INVOICE</CardTitle>
                    <CardDescription>Generate invoice</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8"
                        >
                            <div className="flex flex-wrap justify-center gap-40">
                                <div className="flex flex-col gap-2">
                                    <Label
                                        htmlFor="billFrom"
                                        className="text-xl font-semibold"
                                    >
                                        Bill From:
                                    </Label>

                                    <InputFormField
                                        control={form.control}
                                        name="sender.name"
                                        label="Company"
                                        placeholder="Your company"
                                    />
                                    <InputFormField
                                        control={form.control}
                                        name="sender.address"
                                        label="Address"
                                        placeholder="Your address"
                                    />
                                    <InputFormField
                                        control={form.control}
                                        name="sender.zipCode"
                                        label="Zip"
                                        placeholder="Your zip code"
                                    />
                                    <InputFormField
                                        control={form.control}
                                        name="sender.city"
                                        label="City"
                                        placeholder="Your city"
                                    />
                                    <InputFormField
                                        control={form.control}
                                        name="sender.country"
                                        label="Country"
                                        placeholder="Your country"
                                    />
                                    <InputFormField
                                        control={form.control}
                                        name="sender.email"
                                        label="Email"
                                        placeholder="Your email"
                                    />
                                    <InputFormField
                                        control={form.control}
                                        name="sender.phone"
                                        label="Phone"
                                        placeholder="Your phone number"
                                    />
                                    <InputFormField
                                        control={form.control}
                                        name="sender.vatNumber"
                                        label="VAT Number"
                                        placeholder="Your VAT Number"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Label
                                        htmlFor="billTo"
                                        className="text-xl font-semibold"
                                    >
                                        Bill To:
                                    </Label>

                                    <InputFormField
                                        control={form.control}
                                        name="receiver.name"
                                        label="Company"
                                        placeholder="Receiver company"
                                    />
                                    <InputFormField
                                        control={form.control}
                                        name="receiver.address"
                                        label="Address"
                                        placeholder="Receiver address"
                                    />
                                    <InputFormField
                                        control={form.control}
                                        name="receiver.zipCode"
                                        label="Zip"
                                        placeholder="Receiver zip code"
                                    />
                                    <InputFormField
                                        control={form.control}
                                        name="receiver.city"
                                        label="City"
                                        placeholder="Receiver city"
                                    />
                                    <InputFormField
                                        control={form.control}
                                        name="receiver.country"
                                        label="Country"
                                        placeholder="Receiver country"
                                    />
                                    <InputFormField
                                        control={form.control}
                                        name="receiver.email"
                                        label="Email"
                                        placeholder="Receiver email"
                                    />
                                    <InputFormField
                                        control={form.control}
                                        name="receiver.phone"
                                        label="Phone"
                                        placeholder="Receiver phone number"
                                    />
                                    <InputFormField
                                        control={form.control}
                                        name="receiver.vatNumber"
                                        label="VAT Number"
                                        placeholder="Receiver VAT Number"
                                    />
                                </div>
                            </div>
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default InvoiceCard;