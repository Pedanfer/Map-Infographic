import "./globals.css";
import React from "react";
import LocationMarker from "../components/map/location-marker.tsx";
import Map from "../components/map/map.js";
import Legend from "@/components/map/legend.tsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.ts";
import { Metadata } from "next";
import Logos from "@/components/map/logos.tsx";
import { Infographic } from "@/components/infographic/Infographic.tsx";

export const metadata: Metadata = {
  title: "Park infographic",
  description:
    "Infographic project for a natural park by the Universitat Politècnica de València",
};

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Map>
          <Legend />
          <LocationMarker top={"30vh"} left={"10vh"} birdName={"flamingo"} />
          <LocationMarker top={"18vh"} left={"24vh"} birdName={"corvid"} />
          <LocationMarker top={"65vh"} left={"-25vh"} birdName={"duck"} />
          <LocationMarker top={"55vh"} left={"5vh"} birdName={"rare"} />
          <Infographic />
          <Logos />
        </Map>
      </main>
    </ThemeProvider>
  );
}
