"use client";
import Box from "@mui/material/Box";
import React from "react";
import Steps from "./steps";
import ThirdInfoRow from "./ThirdInfoRow/ThirdInfoRow.tsx";
import SecondInfoRow from "./SecondInfoRow/SecondInfoRow.tsx";
import FourthInfoRow from "./FourthInfoRow/FourthInfoRow.tsx";
import FifthInfoRow from "./FifthInfoRow/FifthInfoRow.tsx";
import FirstInfoRow from "./FirstInfoRow/FirstInfoRow.tsx";

export const Infographic = (props) => {
  return (
    <Box
      // border={"0.7vh white dotted"}
      sx={{
        position: "absolute",
        zIndex: 1,
        width: "40vw",
        height: "40vw",
        borderRadius: "50%",
        top: "8vh",
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
      <FirstInfoRow />
      <SecondInfoRow />
      <ThirdInfoRow />
      <FourthInfoRow />
      <FifthInfoRow />
      <Steps />
      {props.children}
    </Box>
  );
};
