import React from "react";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import LocalMallIcon from "@mui/icons-material/LocalMall";

export default function ProductBottomBar() {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "100px",
        position: "fixed",
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0px -1px 2px rgba(136, 136, 136, 0.3)",
      }}
    >
      <div
        style={{ marginLeft: "30px", display: "flex", flexDirection: "column" }}
      >
        <Typography
          style={{ color: "#A0A1A7", fontSize: 14, paddingTop: "5px" }}
        >
          Total Price
        </Typography>
        <Typography
          style={{
            color: "#4BB299",
            fontWeight: "bold",
            fontSize: "2.5rem",
            letterSpacing: "-3px",
          }}
        >
          $18.00
        </Typography>
      </div>
      <div style={{ marginRight: "30px" }}>
        <ButtonGroup variant="contained" aria-label="split button">
          <Button style={{ padding: 20, backgroundColor: "#4BB299" }}>
            <LocalMallIcon style={{ marginRight: 5 }} />
            <Typography style={{ paddingTop: 2 }}>1</Typography>
          </Button>
          <Button
            style={{
              backgroundColor: "#2B2D41",
              fontWeight: "bold",
              paddingLeft: 30,
              paddingRight: 30,
            }}
          >
            Buy Now
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
