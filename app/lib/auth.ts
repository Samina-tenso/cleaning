import { betterAuth } from "better-auth";
import prisma from "./prisma";
import { prismaAdapter } from 'better-auth/adapters/prisma';

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: 'postgresql',
    }),
    trustedOrigins: ['http://localhost:3000', 'https://localhost:3000'],
})