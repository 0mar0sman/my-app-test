import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { demoReducer } from "./demo/reducers";
import { demoState } from "./demo/interfaces";
import { History } from "history";
import { RouterState } from "connected-react-router";
export interface RootState {
  demo: demoState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    demo: demoReducer,
    router: connectRouter(history),
  });
