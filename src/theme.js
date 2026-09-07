import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D4A017",
    },

    secondary: {
      main: "#252525",
    },

    background: {
      default: "#F4F3EF",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#181818",
      secondary: "#6B6B6B",
    },
  },

  typography: {
    fontFamily: "Inter, Arial, sans-serif",

    h1: {
      fontWeight: 800,
      letterSpacing: "-0.06em",
    },

    h2: {
      fontWeight: 800,
      letterSpacing: "-0.06em",
    },

    h3: {
      fontWeight: 700,
    },
  },

  shape: {
    borderRadius: 0,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "999px",
          textTransform: "uppercase",
          fontWeight: 700,
          letterSpacing: "0.08em",
          padding: "12px 24px",
        },
      },
    },
  },
});

export default theme;