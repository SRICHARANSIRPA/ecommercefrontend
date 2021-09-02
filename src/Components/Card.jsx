import React, { useContext } from "react";
import StateContext from "../context/context";
const Card = ({ product, Key }) => {
  const {
    totalProductsAdded,
    handletotalProductsAdded,
    Products,
    handleProducts,
    totalSum,
    handleTotalSum,
  } = useContext(StateContext);

  //Handling Clicks
  var handleDecrement = () => {
    const updatedProducts = [...Products].map((p) => {
      if (p.Id === product.Id) {
        p.count--;
        return p;
      } else return p;
    });
    handleTotalSum(totalSum - product.price);
    handleProducts(updatedProducts);
    handletotalProductsAdded(totalProductsAdded - 1);
  };

  var handleIncrement = () => {
    const updatedProducts = [...Products].map((p) => {
      if (p.Id === product.Id) {
        p.count++;
        return p;
      } else return p;
    });
    handleTotalSum(totalSum + product.price);
    handleProducts(updatedProducts);
    handletotalProductsAdded(totalProductsAdded + 1);
  };

  return (
    <div
      key={Key}
      className="card"
      style={{
        width: "fit-content",
        margin: "2px",
        height: "100%",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        borderRadius: "14px",
      }}
    >
      <img
        alt="Card cap"
        className="card-img-top"
        style={{ height: "200px", width: "200px", marginTop: "7px" }}
        src={product.image}
      />
      <div className="card-body">
        <div style={{ display: "flex" }}>
          <span style={{ top: "-5rem", fontSize: "12px" }}>$</span>
          <h6 className="card-title">{product.price}</h6>
          <h6 style={{ marginLeft: "5px" }}>{product.title}</h6>
        </div>
        <p
          className="card-text"
          style={{ width: "200px", wordWrap: "break-word", fontSize: "12px" }}
        >
          {product.Description}
        </p>
        {product.count !== 0 ? (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button className="btn btn-danger" onClick={handleDecrement}>
              -
            </button>
            <span
              className="badge m-2 badge-secondary"
              style={{ backgroundColor: "darkgray" }}
            >
              {product.count}
            </span>
            <button className="btn btn-primary" onClick={handleIncrement}>
              +
            </button>
          </div>
        ) : (
          <button className="btn btn-primary" onClick={handleIncrement}>
            Add
          </button>
        )}
      </div>
    </div>
  );
};
export default Card;
