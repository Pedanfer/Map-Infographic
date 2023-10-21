import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SocialInfoBox from "./SocialInfoBox";

const LowestInfoRow = () => {
  return (
    <Stack
      spacing={"1%"}
      sx={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        mt: "67%",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <Typography
          fontFamily={"crushed"}
          fontSize={"1.65vw"}
          color={"secondary"}
        >
          5
        </Typography>
        <Typography
          fontFamily={"crushed"}
          fontSize={"1.1vw"}
          color={"secondary"}
        >
          ¿QUÉ SENTIMIENTO DESPIERTA EL PARQUE?
        </Typography>
      </Stack>
      <Stack
        gap={"4%"}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyItems: "center",
          alignItems: "center",
          left: "29%",
        }}
      >
        <SocialInfoBox />
        <SocialInfoBox />
        <SocialInfoBox />
      </Stack>
    </Stack>
  );
};

export default LowestInfoRow;
