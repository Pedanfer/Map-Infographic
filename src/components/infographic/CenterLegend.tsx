import React from "react";
import Border from "../../../public/legend_center_infographic.svg";
import Depth from "../../../public/depth.svg";
import Salinity from "../../../public/salinity.svg";
import Temperature from "../../../public/temperature.svg";
import SvgIcon from "@mui/material/SvgIcon";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";

const CenterLegend = () => {
  return (
    <Stack
      sx={{
        position: "absolute",
        zIndex: 2,
        width: "65%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          width: "70%",
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          top: "1.5%",
        }}
      >
        <Typography sx={{ fontSize: "1.75vw", color: "#8DE3DE" }}>3</Typography>
        <Typography sx={{ fontSize: "0.75vw", color: "#8DE3DE" }}>
          DESCUBRE LA ECOLOGÍA DE LA LAGUNA
        </Typography>
      </Stack>
      <SvgIcon
        component={Border}
        inheritViewBox
        sx={{
          position: "absolute",
          width: "100%",
          height: "20%",
        }}
      />
      <Stack
        sx={{
          position: "relative",
          width: "25%",
          height: "15%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          right: "1%",
          mb: "3%",
          bottom: "2%",
        }}
      >
        {WaterInfoCircle(
          {
            mr: "25%",
          },
          {},
          "28%",
          Depth,
          "100 M"
        )}
        {WaterInfoCircle(
          {
            mr: "18%",
          },
          { left: "20%" },
          "48%",
          Salinity,
          "11 KG"
        )}
        {WaterInfoCircle(
          {
            ml: "40%",
          },
          { right: "6%" },
          "26%",

          Temperature,
          "25 °C"
        )}
      </Stack>
      <Stack
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          top: "55.7%",
          gap: "17.5%",
        }}
      >
        <Typography sx={{ fontSize: "0.65vw" }}>PROFUNDIDAD</Typography>
        <Typography sx={{ fontSize: "0.65vw" }}>SALINIDAD</Typography>
        <Typography sx={{ fontSize: "0.65vw" }}>TEMPERATURA</Typography>
      </Stack>
    </Stack>
  );

  function WaterInfoCircle(sxStack, sxDash, leftText, icon, value) {
    return (
      <Stack sx={{ height: "100%", ...sxStack }}>
        <SvgIcon
          component={icon}
          inheritViewBox
          sx={{
            position: "absolute",
            width: "90%",
            height: "80%",
            top: "7%",
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
  }
};

export default CenterLegend;
