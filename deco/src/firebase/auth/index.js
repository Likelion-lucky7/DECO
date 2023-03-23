import { app } from "../app";
import { getAuth } from "firebase/auth";

export const auth = getAuth(app);

export * from "./useAuthState";
export * from "./useSignUp";
