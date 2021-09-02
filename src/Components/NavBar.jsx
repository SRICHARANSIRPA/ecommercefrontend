import React, { useContext, useEffect } from "react";
import "../CSS/NavBar.css";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useHistory, Link } from "react-router-dom";
import stateContext from "../context/context";
const NavBar = () => {
  const {
    totalProductsAdded,
    handletotalProductsAdded,
    SearchFilter,
    Products,
    handleSearchFilter,
  } = useContext(stateContext);
  const history = useHistory();
  //UseEffect
  useEffect(() => {
    //Inserting TotalAddeddProducts
    const TotalProductsAdded = Products
      ? Products.reduce((sum, p) => sum + p.count, 0)
      : 0;
    handletotalProductsAdded(TotalProductsAdded);
  }, [Products]);

  //hanlde Clicks
  var HandleCartClick = () => {
    history.push("/ShoppingCart");
  };
  var handleSearchClick = () => {};
  //render Components
  var SearchBar = () => {
    return (
      <form
        className="form-inline flex-container"
        style={{ display: "flex", marginLeft: "200px" }}
      >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={SearchFilter}
          onChange={(e) => handleSearchFilter(e.target.value)}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          style={{ marginLeft: "5px" }}
          onClick={handleSearchClick}
        >
          <SearchIcon />
        </button>
      </form>
    );
  };

  var GetCart = () => {
    return (
      <div
        onClick={HandleCartClick}
        style={{ position: "absolute", right: "70px", cursor: "pointer" }}
      >
        <i className="fa" style={{ fontSize: "24px" }}>
          &#xf07a;
        </i>
        <span className="badge badge-warning" id="lblCartCount">
          {" "}
          {totalProductsAdded}{" "}
        </span>
      </div>
    );
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link
          className="navbar-brand"
          to="/Home"
          style={{ paddingLeft: "15px", fontWeight: "bold" }}
        >
          Amazon
        </Link>
        <SearchBar />
        <GetCart />
        <AccountCircleIcon style={{ position: "fixed", right: "20px" }} />
      </nav>
    </div>
  );
};

export default NavBar;
