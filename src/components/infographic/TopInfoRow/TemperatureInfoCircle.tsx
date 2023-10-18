import React from "react";
import { Stack, SvgIcon, Typography } from "@mui/material";

const TemperatureInfoCircle = ({ icon, title, value }) => {
  return (
    <Stack
      spacing={"3%"}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          position: "relative",
          fontFamily: "Inter",
          fontSize: "0.6vw",
          fontWeight: 400,
        }}
      >
        {title}
      </Typography>
      <SvgIcon
        component={icon}
        inheritViewBox
        sx={{
          position: "relative",
          width: "70%",
          height: "70%",
        }}
      />
      <Typography
        sx={{
          position: "relative",
          fontSize: "0.9vw",
        }}
      >
        {value}
      </Typography>
    </Stack>
  );
};

export default TemperatureInfoCircle;
