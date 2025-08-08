"use client";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { Card, Typography, Input, Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { authClient } from "../../lib/auth-client"; // adjust path as needed
import { SignInSchema } from "../../lib/signin-schema";
import { on } from "events";
import { useAuthState } from "../../hooks/useAuthState"; // adjust path as needed
import { signInUser } from "../../api/server";
type SignInFormData = z.infer<typeof SignInSchema>;

export default function SignInPage() {
    const router = useRouter();
    const [message, setMessage] = useState<string | null>(null);
    const { error, setError, success, setSuccess, loading, setLoading, resetState } = useAuthState();

    // 2. Setup useForm with Zod resolver
    const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            email: "",

        },
    });

    // 3. Handle form submission
    async function onSubmit(values: z.infer<typeof SignInSchema>) {
        setLoading(true);
        setMessage("");
        try {
            const { success, error } = await signInUser(values.email, values.password);
            if (success) {
                setMessage("User has been signed in!");
                redirect("/dashboard");
            } else {
                setMessage(error || "An error occurred during sign in");

            }
        } catch (error: any) {
            setMessage(error?.message || "An error occurred during sign in");
            router.replace("/dashboard");
        } finally {
            setLoading(false);
        }
    };


    return (
        <Card color="transparent" shadow={true} className="p-6 sm:p-8 max-w-md mx-auto my-8">
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <h2 className="text-2xl mb-4">Sign In</h2>
                    <Typography variant="small" className="mt-2 mb-4 text-gray-600">Email</Typography>
                    <Input
                        disabled={loading}
                        type="email"
                        placeholder="name@email.com"
                        {...register("email")}
                        error={!!errors.email}
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    <Typography variant="small" className="mt-2 mb-4 text-gray-600">Password</Typography>
                    <Input
                        disabled={loading}
                        type="password"
                        placeholder="Password"
                        {...register("password")}
                        error={!!errors.password}
                    />
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                    {message && <Typography variant="small" className="mt-2 mb-4 text-gray-600">{message}</Typography>}

                    <Button type="submit" disabled={loading} className="w-full bg-blue-500 text-white p-2 rounded">
                        {loading ? "Signing In..." : "Sign In"}
                    </Button>
                </div>
            </form>
        </Card>
    );
}