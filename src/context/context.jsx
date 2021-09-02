import React, { Component } from "react";
const stateContext = React.createContext();

export class StateProvider extends Component {
  state = {
    userName: null,
    Email: null,
    Password: null,
    Gender: null,
    UIDNumber: null,
    DateofBirth: null,
    Products: [],
    totalProductsAdded: 3,
    totalSum: 0,
    SearchFilter: "",
  };
  handleuserName = (userName) => {
    this.setState({ userName });
  };

  handleuserId = (userId) => {
    this.setState({ userId });
  };

  handleEmail = (Email) => {
    this.setState({ Email });
  };

  handlePassword = (Password) => {
    this.setState({ Password });
  };

  handleProducts = (Products) => {
    this.setState({ Products });
  };

  handletotalProductsAdded = (totalProductsAdded) => {
    this.setState({ totalProductsAdded });
  };

  handleTotalSum = (totalSum) => {
    this.setState({ totalSum });
  };

  handleSearchFilter = (SearchFilter) => {
    this.setState({ SearchFilter });
  };
  convertDate = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };

  render() {
    const {
      userName,
      userId,
      Email,
      Password,
      Products,
      totalProductsAdded,
      totalSum,
      SearchFilter,
    } = this.state;
    const {
      handleuserName,
      handleuserId,
      handleEmail,
      handlePassword,
      handleProducts,
      handletotalProductsAdded,
      handleTotalSum,
      handleSearchFilter,
    } = this;
    return (
      <stateContext.Provider
        value={{
          userName,
          userId,
          Email,
          Password,
          Products,
          totalProductsAdded,
          totalSum,
          SearchFilter,
          handleuserName,
          handleuserId,
          handleEmail,
          handlePassword,
          handleProducts,
          handletotalProductsAdded,
          handleTotalSum,
          handleSearchFilter,
        }}
      >
        {this.props.children}
      </stateContext.Provider>
    );
  }
}

export default stateContext;
