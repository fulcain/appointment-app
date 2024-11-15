import { createTheme } from "@mui/material/styles";
import { faIR } from "@mui/x-date-pickers/locales";
import { faIR as coreFaBG } from "@mui/material/locale";

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
  coreFaBG,
);

export default theme;
