import React, { useState, useEffect } from "react";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Instagram = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

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
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="h2 max-w-none mb-12">Последвайте ни в инстаграм</h2>

          {isMobile ? (
            <a
              href="https://www.instagram.com/tattoo_studio_arty/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/phone-tatts.png")}
                alt="Tattoo for phones"
                className="w-full h-auto"
              />
            </a>
          ) : (
            <a
              href="https://www.instagram.com/tattoo_studio_arty/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/tatts.png")}
                alt="Tattoo"
                className="w-full h-auto"
              />
            </a>
          )}

          <div className="mt-4 flex justify-center">
            <a
              href="https://www.instagram.com/tattoo_studio_arty/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-dark"
            >
              Последвай ни сега
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Instagram;
