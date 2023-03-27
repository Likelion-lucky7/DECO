import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'; 

const { persistAtom } = recoilPersist(); 

export const authUser = atom({
  key: 'authUser',
  default: '',
  effects_UNSTABLE: [persistAtom], 
});
