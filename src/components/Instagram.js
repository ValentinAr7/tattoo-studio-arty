import React, { useState, useEffect } from "react";
import { InstagramData } from "../data";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Instagram = () => {
  const { title, btnText, btnIcon, images } = InstagramData;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="flex-1"
    >
      <section
        id="gallery"
        className="bg-[#F9F9F9] section relative mt-[40px] lg:mt-0"
      >
        <div className="container mx-auto">
          <h2 className="h2 max-w-none mb-12">Последвайте ни в инстаграм</h2>

          {isMobile ? (
            <img
              src={require("../assets/phone-tatts.png")}
              alt="Tattoo for phones"
              className="w-full h-auto"
            />
          ) : (
            <img
              src={require("../assets/tatts.png")}
              alt="Tattoo"
              className="w-full h-auto"
            />
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Instagram;
