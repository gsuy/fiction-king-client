import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./component/Home";
import Login from "./component/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import reportWebVitals from "./reportWebVitals";
console.log(localStorage.getItem("fiction-king-token"))
console.log(typeof localStorage.getItem("fiction-king-token"))
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
