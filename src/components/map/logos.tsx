"use client";

import React from "react";
import Svg from "../../../public/logos.svg";
import { SvgIcon } from "@mui/material";

const Logos = () => {
  return (
    <SvgIcon
      component={Svg}
      inheritViewBox
      sx={{
        position: "absolute",
        zIndex: 1,
        width: "72vw",
        height: "20vh",
        left: "27vw",
        top: "86vh",
        "@media (max-width: 900px)": {
          width: "64vw",
          left: "30vw",
        },
      }}
    />
  );
};

export default Logos;
