import { createTheme } from "@mui/material/styles";
import { faIR } from "@mui/x-date-pickers/locales";

const theme = createTheme(
  {
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
  },
  faIR,
);

export default theme;
