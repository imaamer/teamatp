import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Banner from "./Banner";
import MainMenu from "./MainMenu";
import ProductList from "./ProductList";

export default function Home(props) {
  const { setShowProductDetailAnimation } = props;
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
        }}
      >
        <div style={{ width: "100%", height: "100vh" }}>
          <Banner />
          <ProductList
            setShowProductDetailAnimation={setShowProductDetailAnimation}
          />
          <MainMenu />
          <SearchBar scrollPosition={scrollPosition} />
        </div>
      </div>
    </>
  );
}
