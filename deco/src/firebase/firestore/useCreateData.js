import { addDoc, collection } from "firebase/firestore";
<<<<<<< HEAD
import { useCallback, useMemo, useState } from "react";
=======
import { useState, useCallback, useMemo } from "react";
>>>>>>> a7597f0fa9ce651988d9ab5062555a7211591cd4
import { db } from "./index";

/**
 * Firestore 데이터 생성 훅
 * @param {string} collectionKey 콜렉션 키 (필수)
 * @returns {{
 *   isLoading: boolean;
 *   error: null | Error;
 *   createData: (data: any) => Promise<any>
 * }}
 */
<<<<<<< HEAD
=======

>>>>>>> a7597f0fa9ce651988d9ab5062555a7211591cd4
export function useCreateData(collectionKey) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [docId, setDocId] = useState("");

  const createData = useCallback(
    async (data) => {
      const collectionRef = collection(db, collectionKey);

      setIsLoading(true);

      try {
        const { id } = await addDoc(collectionRef, data);
        setDocId(id);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [collectionKey],
  );

  return useMemo(
    () => ({
      isLoading,
      error,
      createData,
      docId,
    }),
    [error, isLoading, createData, docId],
  );
}
