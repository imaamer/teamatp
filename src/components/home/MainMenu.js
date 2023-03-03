import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptIcon from "@mui/icons-material/Receipt";
import WalletIcon from "@mui/icons-material/Wallet";
import SettingsIcon from "@mui/icons-material/Settings";
import { Typography } from "@mui/material";

export default function MainMenu() {
  const [selectedButton, setSelectedButton] = useState("home"); /// home, voucher, wallet, settings

  const handleButtonClick = (type) => {
    setSelectedButton(type);
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "70px",
        position: "fixed",
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        boxShadow: "0px -1px 2px rgba(136, 136, 136, 0.3)",
      }}
    >
      <IconButton
        size="large"
        style={{ display: "flex", flexDirection: "column" }}
        onClick={() => handleButtonClick("home")}
      >
        <HomeIcon
          style={{
            fontSize: 30,
            color: selectedButton === "home" ? "#4DAB96" : "inherit",
          }}
        />
        <Typography
          style={{
            fontSize: 14,
            fontWeight: selectedButton === "home" ? "bold" : "inherit",
          }}
        >
          Home
        </Typography>
      </IconButton>
      <IconButton
        size="large"
        style={{ display: "flex", flexDirection: "column" }}
        onClick={() => handleButtonClick("voucher")}
      >
        <ReceiptIcon
          style={{
            fontSize: 30,
            color: selectedButton === "voucher" ? "#4DAB96" : "inherit",
          }}
        />
        <Typography
          style={{
            fontSize: 14,
            fontWeight: selectedButton === "voucher" ? "bold" : "inherit",
          }}
        >
          Voucher
        </Typography>
      </IconButton>
      <IconButton
        size="large"
        style={{ display: "flex", flexDirection: "column" }}
        onClick={() => handleButtonClick("wallet")}
      >
        <WalletIcon
          style={{
            fontSize: 30,
            color: selectedButton === "wallet" ? "#4DAB96" : "inherit",
          }}
        />
        <Typography
          style={{
            fontSize: 14,
            fontWeight: selectedButton === "wallet" ? "bold" : "inherit",
          }}
        >
          Wallet
        </Typography>
      </IconButton>
      <IconButton
        size="large"
        style={{ display: "flex", flexDirection: "column" }}
        onClick={() => handleButtonClick("settings")}
      >
        <SettingsIcon
          style={{
            fontSize: 30,
            color: selectedButton === "settings" ? "#4DAB96" : "inherit",
          }}
        />
        <Typography
          style={{
            fontSize: 14,
            fontWeight: selectedButton === "settings" ? "bold" : "inherit",
          }}
        >
          Settings
        </Typography>
      </IconButton>
    </div>
  );
}
