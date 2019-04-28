import React from "react";
import ReactDOM from "react-dom";
import "./Style/index.css";
import App from "./Components/App";
import * as serviceWorker from "./serviceWorker";
import { StoreProvider } from "./Store/store";
// import "./index.css";
import HomePage from "./Components/HomePage";
import { Router } from "@reach/router";
import FavPage from "./Components/FavPage";

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <HomePage path="/" />
        <FavPage path="/faves" />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
