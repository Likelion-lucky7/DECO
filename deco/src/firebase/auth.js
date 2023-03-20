import { app } from "./app";
import { getAuth } from "firebase/auth";

export const firebaseAuth = getAuth(app);
