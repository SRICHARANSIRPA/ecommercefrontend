import "./App.css";
import React, { Component } from "react";
import Login from "./Components/Login";
import Home from "./Components/Home";
import stateContext from "./context/context";
import Info from "./Components/Info";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ShoppingCart from "./Components/ShoppingCart";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/Login">
            {this.context.userId ? <Redirect to="/Home" /> : <Login />}
          </Route>
          <Route exact path="/Info">
            <Info />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/ShoppingCart">
            <ShoppingCart />
            {/* <UILoader /> */}
          </Route>
          <Route path="/">
            <Redirect to="/Login" />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.contextType = stateContext;

export default App;
