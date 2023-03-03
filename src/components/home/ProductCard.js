import { Typography } from "@mui/material";
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

export default function ProductCard(props) {
  const productData = props;
  const [favourite, setFavourite] = useState(true);
  const handleFavourite = () => {
    setFavourite(!favourite);
  };

  const handleProductClick = () => {
    productData.setShowProductDetailAnimation(true);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "250px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          margin: 10,
          height: "100%",
          boxShadow: "0px 0px 5px rgba(136, 136, 136, 0.3)",
          position: "relative",
        }}
      >
        <img
          alt=""
          src={productData.image}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
          onClick={handleProductClick}
        />
        <IconButton
          onClick={handleFavourite}
          style={{ position: "absolute", top: 10, right: 10 }}
        >
          {favourite ? (
            <FavoriteIcon style={{ color: "#E55986" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        <div
          style={{
            width: "100%",
            backgroundColor: "white",
            position: "absolute",
            bottom: 0,
          }}
          onClick={handleProductClick}
        >
          <Typography
            style={{
              color: "#6C6C6C",
              fontSize: 14,
              marginTop: 5,
              marginLeft: 5,
            }}
          >
            Shirt
          </Typography>
          <Typography
            style={{
              fontSize: 14,
              fontWeight: "bold",
              marginLeft: 5,
            }}
          >
            Essential's Women's long sleeves Coat.
          </Typography>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10,
              marginTop: 5,
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <StarIcon
                style={{ marginLeft: 5, color: "#DD923A", fontSize: 18 }}
              />
              <Typography
                style={{
                  color: "#6C6C6C",
                  fontSize: 14,
                  marginTop: 5,
                  marginLeft: 5,
                }}
              >
                4.9 | 2356
              </Typography>
            </div>
            <Typography
              style={{
                color: "#4BB299",
                fontWeight: "bold",
                marginRight: 10,
                fontSize: 18,
              }}
            >
              {productData.price}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
