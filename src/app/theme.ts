"use client";
import "./globals.css";

import { createTheme, alpha } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: Palette["primary"];
  }

  interface PaletteOptions {
    custom?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    fadedWhite: true;
    white: true;
  }
}

let theme = createTheme({
  palette: {
    primary: {
      main: "#CD5557",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#8DE3DE",
    },
  },
  typography: {
    allVariants: { color: "white" },
    fontFamily: "Inter, Crushed",
    fontSize: 16,
    fontWeightRegular: 700,
  },
});

theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    fadedWhite: theme.palette.augmentColor({
      color: {
        main: alpha("#FFFFFF", 0.4),
      },
      name: "fadedWhite",
    }),
    white: theme.palette.augmentColor({
      color: {
        main: "#FFFFFF",
      },
      name: "white",
    }),
  },
});

export default theme;
