import React from "react";

export default function ProductList(props) {
  const { setShowProductDetailAnimation } = props;

  const handleProductClick = () => {
    setShowProductDetailAnimation(true);
  };
  return (
    <div style={{ width: "100%", height: "2000px", backgroundColor: "red" }}>
      <div
        style={{
          width: "100%",
          height: "30px",
          backgroundColor: "green",
          position: "sticky",
          top: "70px",
        }}
        onClick={handleProductClick}
      ></div>
    </div>
  );
}
