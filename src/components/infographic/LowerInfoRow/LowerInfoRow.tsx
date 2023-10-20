import { Stack, SvgIcon } from "@mui/material";
import React from "react";
import Glass from "../../../../public/magnifying_glass.svg";
import ChevronRight from "../../../../public/chevron_right.svg";
import BirdSightInfo from "./BirdSightInfo.tsx";

const LowerInfoRow = () => {
  return (
    <>
      <Stack
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "30%",
          right: "73%",
          gap: "10%",
          top: "64%",
        }}
      >
        <SvgIcon
          component={Glass}
          inheritViewBox={true}
          sx={{ height: "17%", width: "17%" }}
        />
        <SvgIcon
          component={ChevronRight}
          inheritViewBox={true}
          sx={{ height: "10%", width: "10%" }}
        />
      </Stack>
      <Stack
        sx={{
          width: "80%",
          height: "30%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          top: "20%",
          left: "7%",
        }}
      >
        <BirdSightInfo name={"swallow"} />
        <BirdSightInfo name={"flamingo"} />
        <BirdSightInfo name={"rare"} />
      </Stack>
    </>
  );
};

export default LowerInfoRow;
