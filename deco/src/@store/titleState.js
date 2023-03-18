import { atom, selector } from "recoil";

export const titleState = atom({
  key: "titleState",
  default: "",
});

export const titleGetState = selector({
  key: "titleGetState",
  get: ({ get }) => {
    const title = get(titleState);
    return title;
  },
});
