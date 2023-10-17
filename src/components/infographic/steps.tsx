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
        width: "33vw",
        height: "33vw",
        right: "3.5vw",
        top: "-4.5vw",
      }}
    />
  );
};

export default Steps;
