

import { auth } from "../lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { SignupSchema } from '../lib/signup-schema'

import { NextResponse } from 'next/server';

// Export async handler functions to comply with "use server" requirements
export const { POST, GET } = toNextJsHandler(auth.handler);
