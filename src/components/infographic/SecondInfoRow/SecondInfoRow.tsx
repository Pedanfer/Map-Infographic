import { Box, Stack, SvgIcon, Typography } from "@mui/material";
import React from "react";
import TemperatureInfoCircle from "./TemperatureInfoCircle";
import Lagoon from "../../../../public/lagoon.svg";
import City from "../../../../public/city.svg";
import NoiseInfoBubble from "./NoiseInfoBubble";

const SecondInfoRow = () => {
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
          fontFamily={"crushed"}
          color="secondary"
          sx={{ fontSize: "1.65vw" }}
        >
          2
        </Typography>
        <Typography
          color="secondary"
          sx={{
            fontSize: "1.1vw",
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
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TemperatureInfoCircle
            title={"LAGUNA"}
            icon={Lagoon}
            value={"25 °C"}
          />
          <TemperatureInfoCircle title={"CIUDAD"} icon={City} value={"35 °C"} />
        </Stack>

        <NoiseInfoBubble isLagoon={false} value={"70"} noiseLevel={70} />
      </Stack>
    </Stack>
  );
};

export default SecondInfoRow;
