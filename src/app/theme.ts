"use client";
import "./globals.css";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: { color: "white" },
    fontFamily: "Inter",
    fontSize: 16,
  },
});

export default theme;
