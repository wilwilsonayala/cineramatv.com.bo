import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

const Banner = () => {
  // Imágenes predeterminadas del banner
  const defaultAds = ["publicidad1.gif", "publicidad2.webp", "publicidad3.gif"];
  const [ads, setAds] = useState(defaultAds);
  const [currentAd, setCurrentAd] = useState(ads[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => ads[(ads.indexOf(prev) + 1) % ads.length]);
    }, 5000);
    return () => clearInterval(interval);
  }, [ads]);

  return (
    <Box
      component="img"
      src={`${process.env.PUBLIC_URL}/${currentAd}`}
      alt="Publicidad"
      sx={{
        width: "100%",
        height: 200,
        objectFit: "cover",
        backgroundColor: "#000000",
      }}
    />
  );
};

export default Banner;
