// import { atom, selector } from "recoil";
// export const authUserState = atom({
//   key: "authUserState",
//   default: null,
//   effects: [
//     ({ onSet }) => {
//       onSet((newValue) => {
//         console.debug("현재 인증 사용자:", newValue);
//       });
//     },
//   ],
// });
// export const isAuthState = selector({
//   key: "isAuthState",
//   get: ({ get }) => {
//     const authUser = get(authUserState);
//     return !!authUser;
//   },
// });
