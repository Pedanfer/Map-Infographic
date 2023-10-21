import { useTheme } from "@emotion/react";
import { Box, Stack, SvgIcon, Typography } from "@mui/material";
import People from "../../../../public/people_two.svg";
import Placeholder from "../../../../public/statistic_placeholder.svg";
import React from "react";

const FirstInfoRow = () => {
  const theme = useTheme() as any;
  const primary = theme.palette.primary.main;
  return (
    <Stack
      sx={{
        width: "40%",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        top: "-8%",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          gap: "6%",
        }}
      >
        <Typography
          fontFamily={"crushed"}
          color="secondary"
          sx={{ fontSize: "1.75vw" }}
        >
          1
        </Typography>
        <Typography
          color="secondary"
          sx={{
            fontSize: "1.1vw",
            fontFamily: "Crushed",
            ml: "7%",
            textAlign: "center",
          }}
        >
          ¿CUÁNTAS PERSONAS HAY ACTUALMENTE EN EL PARQUE?
        </Typography>
      </Stack>
      <Box
        sx={{
          position: "absolute",
          border: `0.22vh ${primary} solid`,
          borderRadius: "4vh",
          width: "120%",
          height: "100%",
          top: "120%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <SvgIcon
            component={People}
            color="white"
            sx={{ width: "40%", height: "40%" }}
            inheritViewBox
          />
          <Typography
            fontSize={"0.7vw"}
            sx={{ position: "absolute", left: "15%" }}
          >
            18: Poco concurrido
          </Typography>
        </Stack>
        <SvgIcon
          component={Placeholder}
          color="white"
          sx={{ width: "40%", height: "90%", mr: "4%", mb: "3%" }}
          inheritViewBox
        />
      </Box>
    </Stack>
  );
};

export default FirstInfoRow;
