import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductTopBar from "./ProductTopBar";
import ProductBottomBar from "./ProductBottomBar";
import ProductDetailsPage from "./ProductDetailsPage";

export default function ProductDetails(props) {
  const { setShowProductDetails } = props;
  const [poppingIn, setPoppingIn] = useState(true);

  const handleAnimationEnd = () => {
    if (!poppingIn) {
      setShowProductDetails(false);
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <motion.div
        style={{ position: "absolute", width: "100%" }}
        initial={{ opacity: poppingIn ? 0 : 1, top: poppingIn ? 300 : 0 }}
        animate={{
          opacity: poppingIn ? 1 : 0,
          top: poppingIn ? 0 : 300,
          transition: { delay: 0.2, ease: "easeOut" },
        }}
        onAnimationComplete={handleAnimationEnd}
      >
        <ProductTopBar setPoppingIn={setPoppingIn} />
        <ProductDetailsPage />
        <ProductBottomBar />
      </motion.div>
    </div>
  );
}
