import { INCREMENT, DECREMENT } from "./actionType";
export const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

export const decreemnt = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};
