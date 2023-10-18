"use client";
import "./globals.css";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: { color: "white" },
    fontFamily: "Inter, Crushed",
    fontSize: 16,
    fontWeightRegular: 700,
  },
});

export default theme;
