import React from "react";
import bgImage from "../img/hero/bg.webp"; // Import the image
import verticalVideoBg from "../assets/verticalVideo.mp4";
import { useEffect, useState } from "react";

export const Video = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
  }, []);

  return (
    <div id="video" className="relative w-full h-screen">
      {isMobile ? (
        <video
          className="w-full h-full object-cover"
          src={verticalVideoBg}
          autoPlay
          muted
          loop
        ></video>
      ) : (
        <img
          className="w-full h-full object-cover"
          src={bgImage}
          alt="Hero Background"
        />
      )}
    </div>
  );
};
