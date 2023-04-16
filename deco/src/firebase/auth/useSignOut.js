import { useState, useCallback, useMemo } from "react";
import { signOut as firebaseSignOut } from "firebase/auth";
import { auth } from "./index";
import { authUser } from "@/@store/user";
import { useRecoilState, useRecoilValue } from "recoil";

/* -------------------------------------------------------------------------- */

/**
 * Firebase 인증: 로그아웃 유틸리티 훅
 * @returns {{
 *  isLoading: boolean;
 *  error: null | Error;
 *  signOut: () => Promise<void>;
 * }}
 */
export function useSignOut() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let [data, setData] = useRecoilState(authUser);

  const signOut = useCallback(async () => {
    setIsLoading(true);
    try {
      await setData("");
      await localStorage.removeItem("recoil-persist");
      return await firebaseSignOut(auth);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      location.reload();
    }
  }, [setData]);

  return useMemo(
    () => ({
      isLoading,
      error,
      signOut,
    }),
    [isLoading, error, signOut],
  );
}
