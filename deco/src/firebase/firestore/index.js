import { app } from "../app";
import { getFirestore } from "firebase/firestore";

export const db = getFirestore(app);

export * from "./useCreateData";
export * from "./useDeleteData";
export * from "./useUpdateData";
