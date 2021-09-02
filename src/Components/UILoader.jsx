import React from "react";
import Loader from "react-loader-spinner";
function UILoader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Loader
        type="Bars"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={5000} //3 secs
      />
    </div>
  );
}

export default UILoader;
