import { BUY_COOKIE } from "./cookieActionTypes";

export const buyCookie = (number = 1) => {
  return {
    type: BUY_COOKIE,
    payload: number
  };
};
