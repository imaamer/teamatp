import { Typography } from "@mui/material";
import React from "react";

export default function AboutItem() {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography style={{ color: "#6C6C6C" }}>Brand:</Typography>
          <Typography style={{ fontWeight: "bold", marginLeft: 10 }}>
            CharmkpR
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography style={{ color: "#6C6C6C" }}>Color:</Typography>
          <Typography style={{ fontWeight: "bold", marginLeft: 10 }}>
            Red
          </Typography>
        </div>
      </div>
      <Typography style={{ marginTop: 30, fontWeight: "bold" }}>
        Product Details:
      </Typography>
      <Typography style={{ color: "#6C6C6C", marginTop: 10 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit
        risus ac nibh vulputate vestibulum. Phasellus iaculis maximus sagittis.
        Donec at posuere nisi. Duis congue et risus sit amet fringilla. Sed sit
        amet ex sem. Vestibulum pretium mi vitae consequat fringilla. Nunc ac
        vulputate est, non porttitor urna. Ut mi nunc, ullamcorper vitae
        fermentum ut, consequat sed enim. Donec vitae ipsum sit amet sapien
        mattis iaculis nec eu ipsum. Phasellus eget vulputate arcu.
      </Typography>
    </div>
  );
}
