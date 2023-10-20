import { Box, Stack, SvgIcon, Typography } from "@mui/material";
import React from "react";
import TemperatureInfoCircle from "./TemperatureInfoCircle";
import Lagoon from "../../../../public/lagoon.svg";
import City from "../../../../public/city.svg";
import NoiseInfoBubble from "./NoiseInfoBubble";

const TopInfoRow = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        top: "12%",
      }}
    >
      <Stack
        sx={{
          width: "75%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Typography
          color="secondary"
          sx={{ fontSize: "1.75vw", fontFamily: "Crushed" }}
        >
          2
        </Typography>
        <Typography
          color="secondary"
          sx={{
            fontSize: "1.2vw",
            fontFamily: "Crushed",
            ml: "7%",
          }}
        >
          ¿QUÉ DIFERENCIA CLIMÁTICA HAY?
        </Typography>
      </Stack>
      <Stack
        spacing={"1%"}
        sx={{
          position: "relative",
          height: "100%",
          width: "70%",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          gap: "7%",
        }}
      >
        <NoiseInfoBubble isLagoon={true} value={"150"} noiseLevel={150} />
        <TemperatureInfoCircle title={"LAGUNA"} icon={Lagoon} value={"25 °C"} />
        <TemperatureInfoCircle title={"CIUDAD"} icon={City} value={"35 °C"} />
        <NoiseInfoBubble isLagoon={false} value={"70"} noiseLevel={70} />
      </Stack>
    </Stack>
  );
};

export default TopInfoRow;
