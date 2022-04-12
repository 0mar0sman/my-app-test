import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRoutes } from "react-router-dom";
import OwnerPage from "./owner";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  const publicRouting = useRoutes(routes);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <OwnerPage />
      {publicRouting}
    </div>
  );
}

export default App;
