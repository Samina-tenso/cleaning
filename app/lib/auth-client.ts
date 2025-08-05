import { createAuthClient } from "better-auth/client";
import { auth } from "./auth";

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
})
export const { signIn, signUp, signOut, useSession } = authClient;
