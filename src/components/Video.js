import React from "react";
import videoBg from '../assets/videoBg.mp4';
import verticalVideoBg from '../assets/verticalVideo.mp4';
import { useEffect, useState } from "react";

export const Video = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
  }, []); 

  return (
    <div id='video' className="relative w-full h-screen">
      {isMobile ? (
        <video className="w-full h-full object-cover" src={verticalVideoBg} autoPlay muted loop ></video>
      ) : (
        <video className="w-full h-full object-cover" src={videoBg} autoPlay muted loop></video>
      )}
    </div>
  );
}




//Code for simple single video
// import React from "react";
// import videoBg from '../assets/videoBg.mp4'

// export const Video = () => {
//     return (

        
//         <div id="video" className="main autoplay loop muted">
//             <video src={videoBg} autoPlay muted loop/>
//         </div>
//     )
// }



