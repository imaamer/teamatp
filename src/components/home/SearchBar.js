import React from "react";
import { motion } from "framer-motion";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";
import MessageIcon from "@mui/icons-material/Message";

export default function SearchBar(props) {
  const { scrollPosition } = props;
  return (
    <motion.div
      initial={{ opacity: scrollPosition > 200 ? 0.9 : 1 }}
      animate={{
        opacity: scrollPosition > 200 ? 1 : 0.9,
        // transition: { delay: 0.2 },
      }}
    >
      <div
        style={{
          width: "100%",
          height: "70px",
          position: "fixed",
          top: 0,
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <FormControl
          style={{ flex: 1, marginRight: "20px" }}
          variant="outlined"
        >
          <OutlinedInput
            size="small"
            placeholder="Search"
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <div style={{ marginRight: "20px" }}>
          <Badge
            style={{ marginLeft: 20, marginRight: 10 }}
            badgeContent={4}
            color="primary"
          >
            <LocalMallIcon />
          </Badge>
          <Badge style={{ marginLeft: 20 }} badgeContent={9} color="primary">
            <MessageIcon />
          </Badge>
        </div>
      </div>
    </motion.div>
  );
}
