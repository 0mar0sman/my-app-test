import App from "./App";
import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
//import { store } from './app/store';
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
const container = document.getElementById("root")!;
const root = createRoot(container);
const initialState: any = {};
const store = configureStore(history, initialState);
root.render(
  <React.StrictMode>
    <Provider store={store} history={history}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
