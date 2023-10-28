import React from "react";
import { aboutData } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const { subtitle1, subtitle2, subtitle3, subtitle4, img1 } = aboutData;
  return (
    <section id="about" className="lg:py-16 xl:pb-[160px]">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-x-[70px] items-center">
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col lg:flex-row flex-1"
          >
            <div className="flex flex-col text-justify">
              <h3 className="#about text-[40px] xl:text-[40px] py-8 leading-none font-tertiary lg:-tracking-[0.055em] bg-about bg-no-repeat bg-right bg-clip-text text-transparent">
                Letter from the founder,
              </h3>

              <div className="max-w-[530px] text-grey">
                <p className="mb-6">{subtitle1}</p>
                <p className="mb-6">{subtitle2}</p>
                <img
                  src={img1}
                  className=" w-[500px] h-[300px] shadow-md shadow-black rounded-sm "
                />
              </div>
            </div>
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0 }}
            className="flex-1 h-full xl:mt-48"
          >
            <div className="flex flex-col items-end">
              <div className="max-w-[530px] text-grey">
                <p className="mb-6 mt-6">{subtitle3}</p>
                <p className="mb-6">{subtitle4}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
