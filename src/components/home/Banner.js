import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/images/main-1.jpg";
import image2 from "../../assets/images/main-2.jpg";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default function Banner() {
  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        showArrows={true}
        autoPlay
        // infiniteLoop
        style={{ height: "300px" }}
      >
        <div style={{ height: "300px", position: "relative" }}>
          <img
            alt=""
            src={image1}
            style={{ height: "300px", objectFit: "cover" }}
          />
          <div
            style={{
              maxWidth: "250px",
              position: "absolute",
              bottom: "20px",
              left: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography style={{ textAlign: "left" }}>#Fashion Day</Typography>
            <Typography
              style={{
                textAlign: "left",
                fontSize: 30,
                letterSpacing: -2,
                wordSpacing: -2,
                fontWeight: "bold",
              }}
            >
              80% OFF
            </Typography>
            <Typography style={{ textAlign: "left" }}>
              Disover fashion that suits to your style
            </Typography>
            <div
              style={{
                marginTop: "15px",
                width: "100%",
                display: "flex",
                justifyContent: "left",
              }}
            >
              <Button
                style={{ backgroundColor: "#2B2D41" }}
                variant="contained"
              >
                Check this out
              </Button>
            </div>
          </div>
        </div>
        <div style={{ height: "300px", position: "relative" }}>
          <img
            alt=""
            src={image2}
            style={{ height: "300px", objectFit: "cover" }}
          />
          <div
            style={{
              width: "250px",
              position: "absolute",
              bottom: "20px",
              left: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography style={{ textAlign: "left" }}>#Beauty Sale</Typography>
            <Typography
              style={{
                textAlign: "left",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Discover you beauty collection
            </Typography>
            <div
              style={{
                marginTop: "15px",
                width: "100%",
                display: "flex",
                justifyContent: "left",
              }}
            >
              <Button
                style={{ backgroundColor: "#2B2D41" }}
                variant="contained"
              >
                Check this out
              </Button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
