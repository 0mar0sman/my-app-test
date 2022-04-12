import { Store, createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { RootState, createRootReducer } from "./rootReducer";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
export const history = createBrowserHistory();
const initialState: any = {};

export const configureStore = (
  history: History,
  initState: RootState
): Store<RootState> => {
  const middleware = [thunk, routerMiddleware(history)];
  const composeEnhancers = composeWithDevTools || compose;
  const enhancers = composeEnhancers(applyMiddleware(...middleware));
  const store = createStore(createRootReducer(history), initState, enhancers);
  return store;
};
