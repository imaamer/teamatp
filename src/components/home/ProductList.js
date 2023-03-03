import React from "react";
import IconBar from "./IconBar";
import ProductCards from "./ProductCards";

export default function ProductList(props) {
  const { setShowProductDetailAnimation, showProductDetailAnimation } = props;

  return (
    <div
      style={{ width: "100%", backgroundColor: "#E2E4E8", paddingBottom: 100 }}
    >
      <IconBar />
      <ProductCards
        setShowProductDetailAnimation={setShowProductDetailAnimation}
        showProductDetailAnimation={showProductDetailAnimation}
      />
    </div>
  );
}
