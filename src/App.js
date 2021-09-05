import "./App.css";
import React, { useContext } from "react";
import Login from "./Components/Login";
import Home from "./Components/Home";
import stateContext from "./context/context";
import Info from "./Components/Info";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ShoppingCart from "./Components/ShoppingCart";
const App = () => {
  const { userId } = useContext(stateContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Login">
          {userId ? <Redirect to="/Home" /> : <Login />}
          <Login />
        </Route>
        <Route exact path="/Info">
          <Info />
        </Route>
        <Route exact path="/Home">
          {userId ? <Home /> : <Login />}
        </Route>
        <Route exact path="/ShoppingCart">
          {userId ? <ShoppingCart /> : <Login />}
        </Route>
        <Route path="/">
          <Redirect to="/Login" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
