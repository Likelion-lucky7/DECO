import { dbService } from "@/firebase/app";
import { collection, getDocs } from "firebase/firestore";
import { atom, selector } from "recoil";

export const questionIntialData = atom({
  key: "questionIntialData",
  default: [],
});

export const getQuestion = selector({
  key: "getQuestion",
  get: async ({ get }) => {

    // getQuestionData를 구독하고 있습니다.
    let data = await get(questionIntialData);
    const querySnapShot = await getDocs(collection(dbService, "question"));
    const newData = await querySnapShot.docs.map((doc) => ({
      ...doc.data()
    }));
    data = await newData

    return data;
  },
});