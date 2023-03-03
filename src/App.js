import "./App.css";
import React from "react";

import Store from "./components/Store";
import { ThemeProvider, createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#E55986",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          // fontFamily: "Roboto",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Store />
    </ThemeProvider>
  );
}

export default App;
