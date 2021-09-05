import React, { useEffect, useContext } from "react";
import Card from "./Card";
import NavigationBar from "./NavBar";
import StateContext from "../context/context";
import { DummyProducts } from "../Data/DummyData";
import { getProducts } from "../Data/ProdcutsData";
export default function Home() {
  const { SearchFilter, Products, handleProducts } = useContext(StateContext);
  useEffect(() => {
    //Api Call
    //inserting Products
    async function fetchData() {
      const data = await getProducts();
      // handleProducts(data);
    }
    // fetchData();
    handleProducts(DummyProducts);
  }, []);
  var filterfunction = (p) => {
    let title = p.title;
    let description = p.Description;
    let searchfilter = SearchFilter;
    return title.includes(searchfilter) || description.includes(searchfilter);
  };
  var GetProdcuts = () => {
    return (
      <div
        style={{
          backgroundColor: "#f0f0f0",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          overflowY: "hidden",
        }}
      >
        {Products ? (
          Products.filter(filterfunction).map((product) => (
            <Card Key={product.Id} product={product} />
          ))
        ) : (
          <h5>No Products</h5>
        )}
      </div>
    );
  };
  return (
    <div>
      <NavigationBar />
      <GetProdcuts />
    </div>
  );
}
