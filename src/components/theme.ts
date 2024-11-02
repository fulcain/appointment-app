import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "vazir, Roboto",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#61AFEF",
    },
    secondary: {
      main: "#c678DD",
    },
  },
});

export default theme;
