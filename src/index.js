/*
 *https://reacttraining.com/react-router/web/guides/quick-start
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.scss";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { store } from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Summary from "./components/Summary";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <div id="bag-creator">
        <h1>Bag Creator</h1>
        <Route path="/" exact component={App} />
        <Route path="/summary" exact component={Summary} />
      </div>
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
