import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Layout from "./components/layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => (
  <Fragment>
    <Router>
      <Navbar />
      <Route exact path="/" component={Layout} />
    </Router>
  </Fragment>
);

export default App;
