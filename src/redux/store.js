import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;
