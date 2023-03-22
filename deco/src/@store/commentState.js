import { async } from "@firebase/util";
import { atom, selector } from "recoil";

export const commentState = atom({
  key: "commentState",
  default: null,
});

export const commentGetState = selector({
  key: "commentGetState",
  get: async ({ get }) => {
    const comment = get(commentState);
    return comment;
  },
});
