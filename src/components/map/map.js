import React from "react";
import MapSvg from "../../../public/map.svg";
import { Box } from "@mui/system";

const Map = (props) => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "max-content",
          overflow: "hidden",
          position: "absolute",
          zIndex: 0,
        }}
      >
        <MapSvg width="100wv" height="100wh" viewBox="0 0 2000 1050" />
      </Box>
      {props.children}
    </>
  );
};

export default Map;
