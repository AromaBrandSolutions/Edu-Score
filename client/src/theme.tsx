import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // white
    },
    secondary: {
      main: "#0a1930", //dark blue
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
  },
});

export default theme;
