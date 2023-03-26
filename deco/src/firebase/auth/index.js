import { app } from "../app";
import { getAuth } from "firebase/auth";

export const auth = getAuth(app);
auth.useDeviceLanguage();

export * from "./useAuthState";
export * from "./useSignUp";
export * from "./useSignIn";
export * from "./useSignOut";
