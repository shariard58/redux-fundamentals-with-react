import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

// creating our first middlewar
const myLogger = (store) => (next) => (acation) => {
  console.log(`Action : ${JSON.stringify(acation)}`);
  console.log(`Before : ${JSON.stringify(store.getState())}`);

  // pass actions
  return next(acation);
  // reducer function er kas theke action ta atkay rakha hoisilo seta k chare dawa hoilo...
};
const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;
