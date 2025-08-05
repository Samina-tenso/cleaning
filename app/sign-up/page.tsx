"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, Typography, Input, Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { authClient } from "../lib/auth-client"; // adjust path as needed
import { SignupSchema } from "../lib/signup-schema";
import { on } from "events";
import { useAuthState } from "../hooks/useAuthState"; // adjust path as needed
import { signUpUser } from "../api/actions";
type SignupFormData = z.infer<typeof SignupSchema>;

export default function SignUpPage() {
    const router = useRouter();
    const [message, setMessage] = useState<string | null>(null);
    const { error, setError, success, setSuccess, loading, setLoading, resetState } = useAuthState();

    // 2. Setup useForm with Zod resolver
    const { register, handleSubmit, formState: { errors } } = useForm<SignupFormData>({

        resolver: zodResolver(SignupSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        },
    });

    // 3. Handle form submission
    async function onSubmit(values: z.infer<typeof SignupSchema>) {

        setLoading(true);
        setMessage("");
        try {
            const { success, error } = await signUpUser(values.name, values.email, values.password);
            if (success) {
                setMessage("User has been created!");
                router.replace("/dashboard");
            } else {
                setMessage(error || "An error occurred during sign up");
            }
        } catch (error: any) {
            setMessage(error?.message || "An error occurred during sign up");
        } finally {
            setLoading(false);
        }
    };


    return (
        <Card color="transparent" shadow={true} className="p-6 sm:p-8 max-w-md mx-auto my-8">
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <h2 className="text-2xl mb-4">Sign Up</h2>
                    <Typography variant="small" className="mt-2 mb-4 text-gray-600">Name</Typography>
                    <Input
                        disabled={loading}
                        type="text"
                        placeholder="Name"
                        {...register("name")}
                        error={!!errors.name}
                    />
                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}

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
                        {loading ? "Signing Up..." : "Sign Up"}
                    </Button>
                    <p>Already have an account? <Link href="/sign-in" className="text-blue-500">Sign In</Link></p>
                </div>
            </form>
        </Card>
    );
}