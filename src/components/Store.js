import React, { useState } from "react";
import Home from "./home/Home";
import ProductDetails from "./product-details/ProductDetails";
import { motion } from "framer-motion";

function Store(props) {
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [showProductDetailAnimation, setShowProductDetailAnimation] =
    useState(false);

  const handleAnimationEnd = () => {
    setShowProductDetailAnimation(false);
    setShowProductDetails(true);
  };

  return (
    <div>
      {!showProductDetails && (
        <Home
          showProductDetailAnimation={showProductDetailAnimation}
          setShowProductDetailAnimation={setShowProductDetailAnimation}
        />
      )}
      {showProductDetailAnimation && (
        <motion.div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            top: "0px",
          }}
          initial={{ opacity: 0, top: 800 }}
          animate={{ opacity: 1, top: 0 }}
          onAnimationComplete={handleAnimationEnd}
        ></motion.div>
      )}
      {showProductDetails && (
        <ProductDetails setShowProductDetails={setShowProductDetails} />
      )}
    </div>
  );
}

export default Store;
