import { DINCREMENT, DDECREMENT } from "./actionTypes";
export const increment = (value) => {
  return {
    type: DINCREMENT,
    payload: value,
  };
};

export const decrement = (value) => {
  return {
    type: DINCREMENT,
    payload: value,
  };
};
