import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import FindBooksStore from "./mobx/FindBooksStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider value={{ findBooksStore: new FindBooksStore() }}>
    <App />
  </Context.Provider>
);
