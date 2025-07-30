"use client";
import { useRouter } from "next/navigation";
import { signUp } from "../lib/auth-client";
import { use, useState } from "react";
import { Card, Typography, Input, Button } from "@material-tailwind/react";
import { createUser } from "../api/actions";
import Form from "next/form";
import { useFormState } from "react-hook-form";
import { FormValues } from "../types/Form";

import { create } from "domain";
import { useFormStatus } from "react-dom";
import Link from "next/link";


export default function SignUpPage() {
    const router = useRouter();
    const [completeAction, setCompleteAction] = useState<boolean | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const { pending } = useFormStatus();


    const onSubmit = async (data: FormData) => {
        const result = await createUser(data);
        if (result?.error) {
            setCompleteAction(false);
            setMessage(result.error);
        } else if (result?.success) {
            setCompleteAction(true);
            setMessage(result.description);
            router.push("/dashboard"); // role dependent redirect
        }
    };




    return (
        <Card color="transparent" shadow={true} className="p-6 sm:p-8  max-w-md mx-auto my-8">
            <Form action={onSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6"> <h2 className="text-2xl mb-4">Sign Up</h2>
                    <Typography variant="small" className="mt-2 mb-4 text-gray-600">
                        Name
                    </Typography>
                    <Input
                        required
                        type="text"
                        size="lg"
                        placeholder="name"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="small" className="mt-2 mb-4 text-gray-600">
                        Email
                    </Typography>
                    <Input
                        type="email"
                        required
                        size="lg"
                        placeholder="name@email.com"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />

                    <Typography variant="small" className="mt-2 mb-4 text-gray-600">
                        Password
                    </Typography>
                    <Input
                        required
                        type="password"
                        size="lg"
                        placeholder="password"
                        minLength={6}
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="small" className="mt-2 mb-4 text-gray-600">
                        {completeAction === false && message ? message : ""}
                        {completeAction === true && message ? message : ""}
                    </Typography>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                        Sign Up
                    </button>
                    <p>Already have an account? <Link href="/sign-in" className="text-blue-500">Sign In</Link></p>
                </div>
            </Form>
        </Card>
    );
}