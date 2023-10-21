import { Stack, SvgIcon, Typography } from "@mui/material";
import Circle from "../../../../public/bird_info_circle.svg";
import Up from "../../../../public/comparison_up.svg";
import React from "react";
import dynamic from "next/dynamic";

const getBirdIcon = (name) =>
  dynamic(() => import(`../../../../public/${name}.svg`));

const getLocationPin = (name) => {
  const ending = name === "rare" ? "_rare" : "";
  return dynamic(() => import(`../../../../public/location_pin${ending}.svg`));
};

const getComparisonIcon = (name) =>
  // TODO: Compare with last state value
  dynamic(() => import(`../../../../public/${name}.svg`));

const BirdSightInfo = ({ name }) => {
  const getSubtitle = () => {
    switch (name) {
      case "flamingo":
        return "ZANCUDAS";
      case "swallow":
        return "VENCEJOS Y GOLONDRINAS";
      default:
        return "OTRAS";
    }
  };

  return (
    <Stack
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <Stack
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ml: "17%",
        }}
      >
        <SvgIcon
          component={Circle}
          inheritViewBox
          sx={{ position: "absolute", width: "40%", height: "40%" }}
        />
        <SvgIcon
          component={getBirdIcon(name)}
          inheritViewBox
          sx={{
            height: "18%",
            width: "18%",
            position: "absolute",
          }}
        />
      </Stack>
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <SvgIcon
            component={Up}
            inheritViewBox
            sx={{ width: "11%", height: "11%", ml: "4%", mr: "2%" }}
          />
          <Typography fontSize={"1.3vw"}>10</Typography>
          <SvgIcon
            component={getLocationPin(name)}
            inheritViewBox
            sx={{ width: "22%", height: "25%", mt: "5%", ml: "-4%" }}
          />
        </Stack>
        <Typography
          sx={{
            width: "70%",
            fontSize: "0.50vw",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          {getSubtitle()}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default BirdSightInfo;
