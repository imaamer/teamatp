import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/images/main-1.jpg";
import image2 from "../../assets/images/main-2.jpg";

export default function Banner() {
  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        showArrows={true}
        autoPlay
        style={{ height: "300px" }}
      >
        <div style={{ height: "300px" }}>
          <img
            alt=""
            src={image1}
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>
        <div style={{ height: "300px" }}>
          <img
            alt=""
            src={image2}
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>
      </Carousel>
    </div>
  );
}
