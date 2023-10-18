import LagoonNoise from "../../../../public/lagoon_noise.svg";
import CityNoise from "../../../../public/city_noise.svg";
import { Box, Stack, SvgIcon, Typography } from "@mui/material";
import React from "react";

const NoiseInfoBubble = ({ isLagoon, value }) => {
  const component = isLagoon ? LagoonNoise : CityNoise;
  const text = isLagoon ? "LAGUNA" : "CIUDAD";
  return (
    <Stack sx={{ display: "flex", alignItems: "center" }}>
      <SvgIcon
        component={component}
        inheritViewBox
        sx={{
          width: "115%",
          height: "115%",
        }}
      />
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "0.42vw",
          textAlign: "center",
          position: "absolute",
          top: "30%",
          width: "15%",
        }}
      >
        EL{" "}
        <Box component="span" fontWeight="700">
          NIVEL DE RUIDO
        </Box>{" "}
        DE LA {text} ES DE{" "}
        <Box component="span" fontWeight="700">
          {value} DECIBELIOS
        </Box>
      </Typography>
    </Stack>
  );
};

export default NoiseInfoBubble;
