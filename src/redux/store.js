import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import myLogger from "./middlewares/myLogger";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension"; // eta import kore anbo

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(myLogger))
);

export default store;

// composeWithDevTools function dia applyMiddleware function take wrap kre dibo
