import { COLORCHANGE, STATUSCHANGE } from "./actionTypes";

export const statusChanged = (status) => {
  return {
    type: STATUSCHANGE,
    payload: status,
  };
};

export const colorChanged = (color, changeType) => {
  return {
    type: COLORCHANGE,
    payload: {
      color,
      changeType,
    },
  };
};
