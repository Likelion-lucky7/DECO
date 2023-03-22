import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_MEASUREMENT_ID,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET,
  VITE_MESSAGIN_ID,
  VITE_APP_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET,
  messagingSenderId: VITE_MESSAGIN_ID,
  appId: VITE_APP_ID,
  measurementId: VITE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
<<<<<<< HEAD
export const dbService = getFirestore();
=======
>>>>>>> a7597f0fa9ce651988d9ab5062555a7211591cd4
