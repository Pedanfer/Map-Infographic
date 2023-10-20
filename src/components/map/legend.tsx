"use client";

import React from "react";
import { Box } from "@mui/system";
import { SvgIcon, Typography } from "@mui/material";
import PeopleOne from "../../../public/people_one.svg";
import LoactionMarker from "../../../public/location_marker.svg";
import LocationMarkerRare from "../../../public/location_marker_rare.svg";

const Legend = () => {
  return (
    <Box
      border={"0.7vh white dotted"}
      sx={{
        position: "relative",
        zIndex: 1,
        width: "68vh",
        height: "10vh",
        borderRadius: "3vh",
        top: "2vh",
        left: "3vh",
        p: "6vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography fontSize={"3.4vh"} color={"primary"} fontFamily={"Crushed"}>
        LEYENDA MAPA
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "3vh",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <SvgIcon
          component={PeopleOne}
          inheritViewBox
          sx={{
            width: "7.5vh",
            height: "7.5vh",
          }}
        />
        <Typography fontSize={"1.3vh"}>GENTE</Typography>
        <SvgIcon
          component={LoactionMarker}
          inheritViewBox
          sx={{
            width: "7.5vh",
            height: "7.5vh",
          }}
        />
        <Typography fontSize={"1.3vh"}>AVISTAMIENTO AVES</Typography>
        <SvgIcon
          component={LocationMarkerRare}
          inheritViewBox
          sx={{
            width: "7.5vh",
            height: "7.5vh",
          }}
        />
        <Typography fontSize={"1.3vh"}>
          AVISTAMIENTO AVES ESPECIE POCO COMÚN
        </Typography>
      </Box>
    </Box>
  );
};

export default Legend;
