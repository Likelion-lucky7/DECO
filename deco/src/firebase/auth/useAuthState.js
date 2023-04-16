import { useState, useEffect, useMemo } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./index";

/* -------------------------------------------------------------------------- */

/**
 * Firebase 인증: 인증 상태 감지 훅
 * @returns {{
 *  isLoading: boolean;
 *  error: null | Error;
 *  user: null | UserCredential;
 * }}
 */
export function useAuthState() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    return onAuthStateChanged(
      auth,
      (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
          setIsLoading(false);
        } else {
          setUser(null);
          setIsLoading(false);
        }
      },
      (error) => {
        setError(error);
        setIsLoading(false);
      },
    );
  }, []);

  return useMemo(
    () => ({
      isLoading,
      error,
      user,
    }),
    [isLoading, error, user],
  );
}
