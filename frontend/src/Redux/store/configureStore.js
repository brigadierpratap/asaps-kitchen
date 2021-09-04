import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/RootReducer";

export const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk, logger));
  return { store };
};
