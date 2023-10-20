import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SocialInfoBox from "./SocialInfoBox";

const LowestInfoRow = () => {
  return (
    <Stack
      spacing={"3%"}
      sx={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        mt: "65%",
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
        gap={"7%"}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyItems: "center",
          alignItems: "center",
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
