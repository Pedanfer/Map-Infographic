"use client";

import SvgIcon from "@mui/material/SvgIcon";
import Svg from "../../../public/steps.svg";
import React from "react";

const Steps = () => {
  return (
    <SvgIcon
      component={Svg}
      inheritViewBox
      sx={{
        position: "absolute",
        zIndex: 1,
        width: "38vw",
        height: "35vw",
        right: "2.2vw",
        top: "-3vw",
      }}
    />
  );
};

export default Steps;
