"use client";

import React from "react";
import dynamic from "next/dynamic";
import { SvgIcon } from "@mui/material";

const getBirdIcon = (name) =>
  dynamic(() => import(`../../../public/${name}.svg`));

const getMarkerIcon = (name) => {
  const ending = name === "rare" ? "_rare" : "";
  return dynamic(() => import(`../../../public/location_marker${ending}.svg`));
};

//Important for rendering SVGs: delete the width and height in the SVG file if you are setting it programmatically

const LocationMarker = (props) => {
  const birdIconOffset = `${props.left.slice(0, -2) - 3}vh`;
  return (
    <>
      <SvgIcon
        component={getMarkerIcon(props.birdName)}
        inheritViewBox
        sx={{
          position: "relative",
          zIndex: 1,
          width: "11vh",
          height: "11vh",
          left: props.left,
          right: props.right,
          top: props.top,
          bottom: props.bottom,
        }}
      />
      <SvgIcon
        component={getBirdIcon(props.birdName)}
        inheritViewBox
        sx={{
          position: "relative",
          zIndex: 1,
          width: "4vh",
          height: "5.5vh",
          left: birdIconOffset,
          right: props.right,
          top: props.top,
          bottom: props.bottom,
        }}
      />
    </>
  );
};

export default LocationMarker;
