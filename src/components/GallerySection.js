import React, { useState } from "react";
import { galleryData } from "../data";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const slides = galleryData.images.map(({ original, width, height, title }) => ({
  src: original,
  width,
  height,
  title,
}));

const GallerySection = () => {
  const [index, setIndex] = useState(-1);
  const { title, images   } = galleryData;

  const renderImage = (photo, onClick) => {
    const imageTitle = galleryData.images.find(
      (img) => img.src === photo.src
    )?.title;

    return (
      <div key={photo.key} className="relative">
        <img
          onClick={(e) => onClick(e, photo)}
          alt={photo.title}
          src={photo.src}
          style={{ width: "100%", height: "auto", cursor: "pointer" }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center text-white font-bold"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white", // Adjust text color
            fontSize: "1.5em", // Adjust font size
            fontWeight: "bold", // Adjust font weight
            textAlign: "center",
            zIndex: 1,
          }}
        >
          {imageTitle}
        </div>
      </div>
    );
  };

  return (
    <section
      id="gallery"
      className="bg-[#F9F9F9] section relative mt-[40px] lg:mt-0"
    >
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 max-w-[370px] lg:mb-20"
        >
          {title}
        </motion.h2>
      </div>
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="mb-8 lg:mb-20"
      >
        <PhotoAlbum
          layout="rows"
          photos={images}
          renderImage={renderImage}
          onClick={(event, photo, index) => setIndex(index)}
        />
        <Lightbox
          slides={slides}
          styles={{ container: { backgroundColor: "rgba(0,0,0,.9)" } }}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </motion.div>
      {/* btn */}
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex justify-center"
      ></motion.div>
    </section>
  );
};

export default GallerySection;
