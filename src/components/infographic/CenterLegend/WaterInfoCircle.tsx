import { Box, Stack, SvgIcon, Typography } from "@mui/material";
import React from "react";

const WaterInfoCircle = ({ sxStack, sxDash = {}, leftText, icon, value }) => {
  return (
    <Stack sx={{ height: "100%", ...sxStack }}>
      <SvgIcon
        component={icon}
        inheritViewBox
        sx={{
          position: "absolute",
          width: "90%",
          height: "75%",
          top: "10%",
        }}
      />
      <Box
        border={"0.15vh white dashed"}
        sx={{
          position: "relative",
          width: "3.6vw",
          height: "65%",
          borderRadius: "50%",
          top: "16%",
          ...sxDash,
        }}
      />
      <Typography
        sx={{
          position: "relative",
          fontSize: "0.75vw",
          bottom: "23%",
          left: leftText,
        }}
      >
        {value}
      </Typography>
    </Stack>
  );
};

export default WaterInfoCircle;
