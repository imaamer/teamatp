import { Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import user1 from "../../assets/images/users/1.png";
import user2 from "../../assets/images/users/2.png";

export default function Reviews() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography style={{ marginTop: 10, fontWeight: "bold", fontSize: 30 }}>
        4.0
      </Typography>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <StarIcon style={{ color: "#EB9A3A" }} />
        <StarIcon style={{ color: "#EB9A3A" }} />
        <StarIcon style={{ color: "#EB9A3A" }} />
        <StarIcon style={{ color: "#EB9A3A" }} />
        <StarIcon style={{ color: "grey" }} />
      </div>
      <div
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: "grey",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      />
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            alt=""
            src={user1}
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
          <div style={{ marginLeft: 10 }}>
            <Typography style={{ fontWeight: "bold", fontSize: 14 }}>
              Joan Perkins
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <StarIcon style={{ color: "#EB9A3A", fontSize: 18 }} />
              <StarIcon style={{ color: "#EB9A3A", fontSize: 18 }} />
              <StarIcon style={{ color: "#EB9A3A", fontSize: 18 }} />
              <StarIcon style={{ color: "#EB9A3A", fontSize: 18 }} />
              <StarIcon style={{ color: "grey", fontSize: 18 }} />
            </div>
          </div>
        </div>
        <Typography style={{ color: "#6C6C6C", marginTop: 10 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit
          risus ac nibh vulputate vestibulum. Phasellus iaculis maximus
          sagittis. Donec at posuere nisi. Duis congue et risus sit amet
          fringilla. Sed sit amet ex sem. Vestibulum pretium mi vitae consequat
          fringilla. Nunc ac vulputate est, non porttitor urna. Ut mi nunc,
          ullamcorper vitae fermentum ut, consequat sed enim. Donec vitae ipsum
          sit amet sapien mattis iaculis nec eu ipsum. Phasellus eget vulputate
          arcu.
        </Typography>
        <div style={{ display: "flex", alignItems: "center", marginTop: 40 }}>
          <img
            alt=""
            src={user2}
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
          <div style={{ marginLeft: 10 }}>
            <Typography style={{ fontWeight: "bold", fontSize: 14 }}>
              Frank Garrett
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <StarIcon style={{ color: "#EB9A3A", fontSize: 18 }} />
              <StarIcon style={{ color: "#EB9A3A", fontSize: 18 }} />
              <StarIcon style={{ color: "#EB9A3A", fontSize: 18 }} />
              <StarIcon style={{ color: "grey", fontSize: 18 }} />
              <StarIcon style={{ color: "grey", fontSize: 18 }} />
            </div>
          </div>
        </div>
        <Typography style={{ color: "#6C6C6C", marginTop: 10 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit
          risus ac nibh vulputate vestibulum. Phasellus iaculis maximus
          sagittis. Donec at posuere nisi. Duis congue et risus sit amet
          fringilla. Sed sit amet ex sem. Vestibulum pretium mi vitae consequat
          fringilla. Nunc ac vulputate est, non porttitor urna. Ut mi nunc,
          ullamcorper vitae fermentum ut, consequat sed enim. Donec vitae ipsum
          sit amet sapien mattis iaculis nec eu ipsum. Phasellus eget vulputate
          arcu.
        </Typography>
      </div>
      <div style={{ height: 30 }} />
    </div>
  );
}
