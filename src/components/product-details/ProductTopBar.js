import React from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";

export default function ProductTopBar(props) {
  const { setPoppingIn } = props;

  const handleProductClick = () => {
    setPoppingIn(false);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "70px",
        position: "fixed",
        top: 0,
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        zIndex: 2000,
        boxShadow: "0px 1px 2px rgba(136, 136, 136, 0.3)",
      }}
    >
      <div style={{ flex: 1 }}>
        <IconButton onClick={handleProductClick}>
          <NavigateBeforeIcon />
        </IconButton>
      </div>
      <div>
        <IconButton>
          <FavoriteIcon style={{ color: "red" }} />
          <ShareIcon style={{ marginLeft: 20 }} />
          <Badge
            style={{ marginLeft: 20, marginRight: 10 }}
            badgeContent={4}
            color="primary"
          >
            <LocalMallIcon />
          </Badge>
        </IconButton>
      </div>
    </div>
  );
}
