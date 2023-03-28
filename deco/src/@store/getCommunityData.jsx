import { dbService } from "@/firebase/app";
import { collection, getDocs } from "firebase/firestore";
import { atom, selector } from "recoil";

export const communityInitialData = atom({
  key: "communityInitialData",
  default: [],
});

export const getCommunity = selector({
  key: "getCommunity",
  get: async ({ get }) => {
    // getCommunityData를 구독하고 있습니다.
    let data = await get(communityInitialData);
    const querySnapShot = await getDocs(collection(dbService, "community"));
    const newData = await querySnapShot.docs.map((doc) => ({
      ...doc.data(),
    }));
    data = await newData;

    return data;
  },
});
