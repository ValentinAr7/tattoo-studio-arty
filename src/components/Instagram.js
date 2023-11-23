import React, { useState } from "react";
import { InstagramData } from "../data";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Instagram = () => {
  const { title, btnText, btnIcon, images } = InstagramData;
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

          <img
            src={require("../assets/tatts.png")}
            alt="Tattoo"
            className="w-full h-auto" // This makes the image take the full width and adjusts its height accordingly
          />
        </div>
      </section>
    </motion.div>
  );
};

export default Instagram;
