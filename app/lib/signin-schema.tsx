import { z } from "zod";
export const SignInSchema = z
    .object({
        email: z
            .email({ message: "Invalid email address" })
            .min(1, { message: "Email is required" })
        ,
        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters long" })
            .max(20, { message: "Password must be at most 20 characters long" }),
    })