import React, { Component } from "react";
import stateContext from "../context/context";
export default class Info extends Component {
  render() {
    const { handleEmail, handlePassword, Email, Password } = this.context;
    return (
      <div>
        <h5>{Email}</h5>
        <h5>{Password}</h5>
      </div>
    );
  }
}
Info.contextType = stateContext;
