import { Box, Stack, SvgIcon, Typography, alpha } from "@mui/material";
import Positive from "../../../../public/emotion_positive.svg";
import Negative from "../../../../public/emotion_negative.svg";
import Neutral from "../../../../public/emotion_neutral.svg";
import React from "react";
import { useTheme } from "@emotion/react";

const SocialInfoBox = () => {
  // TODO: assign emote based on retrieved value
  const theme = useTheme() as any;
  const white = theme.palette.white.main;

  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "10%",
        border: "0.2vh white dashed",
        width: "11%",
        p: "0.5%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <SvgIcon
        component={Positive}
        inheritViewBox
        color="white"
        sx={{ height: "22%", width: "22%", mb: "10%" }}
      />
      <Typography mb={"5%"} fontSize={"0.35vw"} fontWeight={400}>
        AVES
      </Typography>
      <Typography
        fontSize={"0.35vw"}
        color={alpha(white, 0.8)}
        fontWeight={400}
        mb={"5%"}
      >
        CLIMA
      </Typography>
      <Typography
        fontSize={"0.35vw"}
        color={alpha(white, 0.6)}
        fontWeight={400}
        mb={"5%"}
      >
        DEPORTE
      </Typography>
      <Typography
        fontSize={"0.35vw"}
        color={alpha(white, 0.4)}
        fontWeight={400}
        mb={"5%"}
      >
        FLAMENCO
      </Typography>
    </Box>
  );
};

export default SocialInfoBox;
