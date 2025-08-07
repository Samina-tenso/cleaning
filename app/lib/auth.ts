import { betterAuth } from "better-auth";
import prisma from "./prisma";
import { nextCookies } from "better-auth/next-js";

import { prismaAdapter } from 'better-auth/adapters/prisma';

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: 'postgresql',

    }),
    trustedOrigins: ['http://localhost:3000', 'https://localhost:3000'],
    emailAndPassword: {
        enabled: true,
        autoSignIn: true,
        minPasswordLength: 6,
        maxPasswordLength: 20

    },
    plugins: [nextCookies()] // make sure this is the last plugin in the array

})