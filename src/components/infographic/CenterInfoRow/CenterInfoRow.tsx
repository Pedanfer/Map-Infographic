import React from "react";
import Border from "../../../../public/legend_center_infographic.svg";
import Depth from "../../../../public/depth.svg";
import Salinity from "../../../../public/salinity.svg";
import Temperature from "../../../../public/temperature.svg";
import SvgIcon from "@mui/material/SvgIcon";
import { Stack, Typography } from "@mui/material";
import WaterInfoCircle from "./WaterInfoCircle";

const CenterInfoRow = () => {
  return (
    <Stack
      sx={{
        position: "absolute",
        zIndex: 2,
        width: "65%",
        height: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          width: "80%",
          position: "relative",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Typography color="secondary" sx={{ fontSize: "1.75vw" }}>
          3
        </Typography>
        <Typography
          color="secondary"
          sx={{ fontSize: "1.2vw", fontFamily: "Crushed" }}
        >
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
          gap: "8%",
          bottom: "2.3%",
        }}
      >
        <WaterInfoCircle
          sxStack={{
            mr: "25%",
          }}
          sxDash={{ left: "5%" }}
          icon={Depth}
          leftText={"30%"}
          value={"100 M"}
        />
        <WaterInfoCircle
          sxStack={{
            mr: "18%",
          }}
          sxDash={{ left: "25%" }}
          icon={Salinity}
          leftText={"55%"}
          value={"11 KG"}
        />
        <WaterInfoCircle
          sxStack={{
            ml: "40%",
          }}
          sxDash={{ right: "3%" }}
          icon={Temperature}
          leftText={"33%"}
          value={"25 °C"}
        />
      </Stack>
      <Stack
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          top: "56.7%",
          gap: "19%",
        }}
      >
        <Typography sx={{ fontSize: "0.65vw" }}>PROFUNDIDAD</Typography>
        <Typography sx={{ fontSize: "0.65vw" }}>SALINIDAD</Typography>
        <Typography sx={{ fontSize: "0.65vw" }}>TEMPERATURA</Typography>
      </Stack>
    </Stack>
  );
};

export default CenterInfoRow;
