import { Box, Stack, SvgIcon, Typography } from "@mui/material";
import Positive from "../../../../public/emotion_positive.svg";
import Negative from "../../../../public/emotion_negative.svg";
import Neutral from "../../../../public/emotion_neutral.svg";
import React from "react";

const SocialInfoBox = () => {
  // TODO: assign emote based on retrieved value
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "1vh",
        border: "0.32vh white dotted",
        width: "11vh",
        p: "0.5vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "0.3vh",
      }}
    >
      <SvgIcon
        component={Positive}
        inheritViewBox
        color="white"
        sx={{ height: "25%", width: "25%", mb: "7%" }}
      />
      <Typography fontSize={5} fontWeight={400}>
        AVES
      </Typography>
      <Typography fontSize={5} fontWeight={400}>
        CLIMA
      </Typography>
      <Typography fontSize={5} fontWeight={400}>
        DEPORTE
      </Typography>
      <Typography fontSize={5} fontWeight={400}>
        FLAMENCO
      </Typography>
    </Box>
  );
};

export default SocialInfoBox;
