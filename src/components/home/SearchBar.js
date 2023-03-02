import React from "react";
import { motion } from "framer-motion";

export default function SearchBar(props) {
  const { scrollPosition } = props;
  return (
    <motion.div
      initial={{ opacity: scrollPosition > 200 ? 0.7 : 1 }}
      animate={{
        opacity: scrollPosition > 200 ? 1 : 0.7,
        // transition: { delay: 0.2 },
      }}
    >
      <div
        style={{
          width: "100%",
          height: "70px",
          position: "fixed",
          top: 0,
          backgroundColor: "beige",
        }}
      >
        SearchBar
      </div>
    </motion.div>
  );
}
