import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

const Inicio = () => {
  const videoRef = useRef(null);
  const [availableQualities, setAvailableQualities] = useState([]);
  const [hlsInstance, setHlsInstance] = useState(null);

  useEffect(() => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource("https://5d00db0e0fcd5.streamlock.net/7062/7062/playlist.m3u8");
      hls.attachMedia(video);

      // Escuchar el evento para obtener las calidades disponibles
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        const qualities = hls.levels.map((level, index) => ({
          index,
          label: `${level.height}p (${Math.round(level.bitrate / 1000)} kbps)`,
        }));
        setAvailableQualities(qualities);
        video.play().catch((err) => {
          console.error("Error al reproducir el video:", err);
        });
      });

      setHlsInstance(hls);

      return () => {
        hls.destroy(); // Limpia recursos
        setHlsInstance(null);
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Soporte HLS nativo (Safari/iOS)
      video.src = "https://5d00db0e0fcd5.streamlock.net/7062/7062/playlist.m3u8";
    } else {
      console.error("HLS no soportado en este navegador.");
    }
  }, []);

  // Cambiar la calidad del stream
  const handleQualityChange = (index) => {
    if (hlsInstance) {
      hlsInstance.currentLevel = index;
    }
  };

  return (
    <div>
      <h1>Disfruta de la Película en Vivo</h1>
      <div className="player">
        <video ref={videoRef} controls autoPlay muted></video>
      </div>
      <div className="quality-selector">
        <label htmlFor="quality">Selecciona la calidad:</label>
        <select
          id="quality"
          onChange={(e) => handleQualityChange(parseInt(e.target.value, 10))}
        >
          <option value="-1">Automático</option>
          {availableQualities.map((quality) => (
            <option key={quality.index} value={quality.index}>
              {quality.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Inicio;
