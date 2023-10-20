import LagoonNoise from "../../../../public/lagoon_noise.svg";
import CityNoise from "../../../../public/city_noise.svg";
import Positive from "../../../../public/emotion_positive.svg";
import Neutral from "../../../../public/emotion_neutral.svg";
import Negative from "../../../../public/emotion_negative.svg";
import { Box, Stack, SvgIcon, Typography } from "@mui/material";
import React from "react";

const NoiseInfoBubble = ({ isLagoon, value, noiseLevel }) => {
  const component = isLagoon ? LagoonNoise : CityNoise;
  const text = isLagoon ? "LAGUNA" : "CIUDAD";

  return (
    <Stack sx={{ display: "flex", alignItems: "center" }}>
      <SvgIcon
        component={component}
        inheritViewBox
        sx={{
          width: "130%",
          height: "130%",
        }}
      />
      <Stack
        spacing={"4%"}
        sx={{
          textAlign: "center",
          width: "16%",
          position: "absolute",
          top: "25%",
        }}
      >
        <Typography
          color={"primary"}
          sx={{
            fontWeight: 400,
            fontSize: "0.44vw",
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
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "3%",
          }}
        >
          <SvgIcon
            component={Positive}
            color={assignNoiseEmote(Positive)}
            inheritViewBox
            sx={{
              width: "24%",
              height: "24%",
            }}
          />
          <SvgIcon
            color={assignNoiseEmote(Neutral)}
            component={Neutral}
            inheritViewBox
            sx={{
              width: "24%",
              height: "24%",
            }}
          />
          <SvgIcon
            color={assignNoiseEmote(Negative)}
            component={Negative}
            inheritViewBox
            sx={{
              width: "24%",
              height: "24%",
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );

  function assignNoiseEmote(component) {
    if (component === Negative && noiseLevel > 120) return "white";
    else if (component === Neutral && noiseLevel < 120 && noiseLevel > 60)
      return "white";
    else if (component === Positive && noiseLevel > 30 && noiseLevel < 60)
      return "white";
    return "fadedWhite";
  }
};

export default NoiseInfoBubble;
