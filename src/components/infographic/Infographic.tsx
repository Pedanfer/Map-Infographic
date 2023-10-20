"use client";
import Box from "@mui/material/Box";
import React from "react";
import Steps from "./steps";
import CenterInfoRow from "./CenterInfoRow/CenterInfoRow.tsx";
import { Stack, Typography } from "@mui/material";
import TopInfoRow from "./TopInfoRow/TopInfoRow.tsx";
import LowerInfoRow from "./LowerInfoRow/LowerInfoRow.tsx";

export const Infographic = (props) => {
  return (
    <Box
      border={"0.7vh white dotted"}
      sx={{
        position: "absolute",
        zIndex: 1,
        width: "40vw",
        height: "38vw",
        borderRadius: "50%",
        top: "10.5vh",
        left: "95vh",
        p: "6vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // "@media screen and (max-height: 400px)": {
        //   top: "6vh",
        //   left: "52vw",
        //   width: "40vh",
        //   height: "40vh",
        // },
      }}
    >
      <Stack
        sx={{
          width: "40%",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          gap: "6%",
          top: "-13%",
        }}
      >
        <Typography
          color="secondary"
          sx={{ fontSize: "1.75vw", fontFamily: "Crushed" }}
        >
          1
        </Typography>
        <Typography
          color="secondary"
          sx={{
            fontSize: "1.2vw",
            fontFamily: "Crushed",
            ml: "7%",
            textAlign: "center",
          }}
        >
          ¿CUÁNTAS PERSONAS HAY ACTUALMENTE EN EL PARQUE?
        </Typography>
      </Stack>
      <TopInfoRow />
      <CenterInfoRow />
      <LowerInfoRow />
      <Steps />
      {props.children}
    </Box>
  );
};
