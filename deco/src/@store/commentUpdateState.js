import { async } from "@firebase/util";
import { atom, selector } from "recoil";

export const commentUpdateState = atom({
  key: "commentUpdateState",
  default: null,
});

export const commentGetUpdateState = selector({
  key: "commentGetUpdateState",
  get: async ({ get }) => {
    const commentFiled = get(commentUpdateState);
    return commentFiled;
  },
});
