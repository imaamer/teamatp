import React from "react";
import image1 from "../../assets/images/product-2.jpg";
import detailImage1 from "../../assets/images/product-detail/detail-1.jpg";
import detailImage2 from "../../assets/images/product-detail/detail-2.jpg";
import detailImage3 from "../../assets/images/product-detail/detail-3.jpg";
import detailImage4 from "../../assets/images/product-detail/detail-4.jpg";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AboutProduct from "./AboutProduct";

export default function DetailPageHeader() {
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        position: "relative",
      }}
    >
      <img
        alt=""
        src={image1}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          width: "50px",
          height: "300px",
          top: 20,
          left: 20,
        }}
      >
        <img
          alt=""
          src={detailImage1}
          style={{
            width: "100%",
            height: "50px",
            objectFit: "cover",
            borderRadius: 5,
            boxShadow: "0px 0px 5px rgba(136, 136, 136, 1)",
            cursor: "pointer",
          }}
        />
        <img
          alt=""
          src={detailImage2}
          style={{
            width: "100%",
            height: "50px",
            objectFit: "cover",
            borderRadius: 5,
            marginTop: 5,
            boxShadow: "0px 0px 5px rgba(136, 136, 136, 1)",
            cursor: "pointer",
          }}
        />
        <img
          alt=""
          src={detailImage3}
          style={{
            width: "100%",
            height: "50px",
            objectFit: "cover",
            borderRadius: 5,
            marginTop: 5,
            boxShadow: "0px 0px 5px rgba(136, 136, 136, 1)",
            cursor: "pointer",
          }}
        />
        <img
          alt=""
          src={detailImage4}
          style={{
            width: "100%",
            height: "50px",
            objectFit: "cover",
            borderRadius: 5,
            marginTop: 5,
            boxShadow: "0px 0px 5px rgba(136, 136, 136, 1)",
            cursor: "pointer",
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", marginLeft: 10 }}>
        <CardGiftcardIcon style={{ color: "#6C6C6C" }} />
        <Typography style={{ marginLeft: 10, marginTop: 5, color: "#6C6C6C" }}>
          tokobaju.id
        </Typography>
      </div>
      <Typography style={{ marginLeft: 10, fontSize: 24, fontWeight: "bold" }}>
        Essential's Women's long sleeves Coat.
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <StarIcon
            style={{ color: "#EB9A3A", fontSize: 20, marginRight: 5 }}
          />
          <Typography style={{ color: "#6C6C6C" }}>4.9 Ratings</Typography>
        </div>
        <Typography style={{ color: "#6C6C6C", fontSize: 30 }}>-</Typography>
        <Typography style={{ color: "#6C6C6C" }}>2.3k+ Reviews</Typography>
        <Typography style={{ color: "#6C6C6C", fontSize: 30 }}>-</Typography>
        <Typography style={{ color: "#6C6C6C", marginRight: 10 }}>
          2.9k+ Sold
        </Typography>
      </div>
      <AboutProduct />
    </div>
  );
}
