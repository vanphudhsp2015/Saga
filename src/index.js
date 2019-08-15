import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./assets/styles/main.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory as createHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={createHistory()}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
