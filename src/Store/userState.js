import { atom } from "recoil";

export const userState = atom({
  key: "userState", //何でもいい
  default : { isAdmin:false } // 初期値を設定する
})
