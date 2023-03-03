import React from "react";
import IconButton from "@mui/material/IconButton";
import CategoryIcon from "@mui/icons-material/Category";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LanguageIcon from "@mui/icons-material/Language";
import PaidIcon from "@mui/icons-material/Paid";
import { Typography } from "@mui/material";

import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "space-evenly",
      marginTop: "20px",
      paddingBottom: "20px",
      backgroundColor: "white",
    },
    iconContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      padding: 5,
      backgroundColor: "#F6F6F6",
      borderRadius: 5,
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

export default function IconBar() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.iconContainer}>
        <div className={classes.icon}>
          <IconButton size="small">
            <CategoryIcon />
          </IconButton>
        </div>
        <Typography style={{ fontSize: 12, marginTop: 10, color: "#6C6C6C" }}>
          Category
        </Typography>
      </div>
      <div className={classes.iconContainer}>
        <div className={classes.icon}>
          <IconButton size="small">
            <AirplanemodeActiveIcon />
          </IconButton>
        </div>
        <Typography style={{ fontSize: 12, marginTop: 10, color: "#6C6C6C" }}>
          Flight
        </Typography>
      </div>
      <div className={classes.iconContainer}>
        <div className={classes.icon}>
          <IconButton size="small">
            <ReceiptIcon />
          </IconButton>
        </div>
        <Typography style={{ fontSize: 12, marginTop: 10, color: "#6C6C6C" }}>
          Bill
        </Typography>
      </div>
      <div className={classes.iconContainer}>
        <div className={classes.icon}>
          <IconButton size="small">
            <LanguageIcon />
          </IconButton>
        </div>
        <Typography style={{ fontSize: 12, marginTop: 10, color: "#6C6C6C" }}>
          Data Plan
        </Typography>
      </div>
      <div className={classes.iconContainer}>
        <div className={classes.icon}>
          <IconButton size="small">
            <PaidIcon />
          </IconButton>
        </div>
        <Typography style={{ fontSize: 12, marginTop: 10, color: "#6C6C6C" }}>
          Top Up
        </Typography>
      </div>
    </div>
  );
}
