import React from "react";
// import contact data
import { contactData } from "../data";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../variants";
import artist1 from "../img/artists/artyHD.jpg";
import artist2 from "../img/artists/rumenHD.jpg";
import { artistData } from "../data";

const Artist = () => {
  const { img, btnText, artistName, artistTitle, description } = artistData;
  return (
    <section id="artists" className="lg:py-16 xl:pb-[160px]">
      <div className="container mx-auto">
        <div className="container pt-0 ml-18  max-w-screen-lg ">
          <motion.h2
            variants={fadeIn("up")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="h2 max-w-[370px] lg:mb-10 pl-0"
          >
            Татуисти:
          </motion.h2>
        </div>

        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="flex-1"
        >
          <section
            id="artists"
            className="section flex justify-center py-0 mt-0 "
          >
            <div className="flex flex-wrap justify-center">
              <div className="card bg-[#F9F9F9] mx-4 mb-6 rounded-lg shadow-lg relative w-[340px] h-[640px]">
                <div className="img-area w-full h-[480px] absolute left-1/2 transform -translate-x-1/2 transition-all duration-200 ease-in-out">
                  <img
                    src={artist1}
                    className="w-full h-full object-cover rounded-lg transition-all duration-200 ease-in-out hover:shadow-lg"
                  />
                </div>
                <div className="text-area pt-[400px]">
                  <div className="text-center text-2xl font-bold p-5 mb-50 mt-10 relative transition-all duration-200 ease-in-out group">
                    <button className="px-8 py-3 border-2 border-gray-700 bg-gray-900 text-white shadow-lg rounded-full transition-all duration-150 ease-in-out">
                      <a href="https://www.instagram.com/tattoo_arty/">
                        Instagram
                      </a>
                    </button>
                  </div>
                </div>

                <div className="artist-name text-center">
                  <h2 className=" @apply text-2xl font-bold mx-auto mb-2 overflow-hidden whitespace-nowrap truncate">
                    Миро "arTy" Илиев
                  </h2>
                </div>
                <div class="artist-title text-center">
                  <h3 className="  @apply text-md font-bold mx-auto my-15 overflow-hidden whitespace-nowrap truncate">
                    Основател / татуист
                  </h3>
                </div>
              </div>

              {/** Henry  */}

              <div className="card bg-[#F9F9F9] mx-4 mb-6 rounded-lg shadow-lg relative w-[340px] h-[640px]">
                <div className="img-area w-full h-[480px] absolute left-1/2 transform -translate-x-1/2 transition-all duration-200 ease-in-out">
                  <img
                    src={require("../assets/henry.jpg")}
                    className="w-full h-full object-cover rounded-lg transition-all duration-200 ease-in-out hover:shadow-lg"
                  />
                </div>

                {/* Button and effects */}
                <div className="text-area pt-[400px]">
                  <div className="text-center text-2xl font-bold p-5 mb-50 mt-10 relative transition-all duration-200 ease-in-out group">
                    <button className="px-8 py-3 border-2 border-gray-700 bg-gray-900 text-white shadow-lg rounded-full transition-all duration-150 ease-in-out">
                      <a href="https://www.instagram.com/tattoo_arty/">
                        Instagram
                      </a>
                    </button>
                  </div>
                </div>

                <div className="artist-name text-center">
                  <h2 className=" @apply text-2xl font-bold mx-auto mb-2 overflow-hidden whitespace-nowrap truncate">
                    Димитър Henry Златанов
                  </h2>
                </div>
                <div class="artist-title text-center">
                  <h3 className="  @apply text-md font-bold mx-auto my-15 overflow-hidden whitespace-nowrap truncate">
                    Tатуист
                  </h3>
                </div>
              </div>

              {/** Girl */}
              <div className="card bg-[#F9F9F9] mx-4 mb-6 rounded-lg shadow-lg relative w-[340px] h-[640px]">
                <div className="img-area w-full h-[480px] absolute left-1/2 transform -translate-x-1/2 transition-all duration-200 ease-in-out">
                  <img
                    src={require("../assets/girl.jpg")}
                    className="w-full h-full object-cover rounded-lg transition-all duration-200 ease-in-out hover:shadow-lg"
                  />
                </div>

                {/* Button and effects */}
                <div className="text-area pt-[400px]">
                  <div className="text-center text-2xl font-bold p-5 mb-50 mt-10 relative transition-all duration-200 ease-in-out group">
                    <button className="px-8 py-3 border-2 border-gray-700 bg-gray-900 text-white shadow-lg rounded-full transition-all duration-150 ease-in-out">
                      <a href="https://www.instagram.com/tattoo_arty/">
                        Instagram
                      </a>
                    </button>
                  </div>
                </div>

                <div className="artist-name text-center">
                  <h2 className=" @apply text-2xl font-bold mx-auto mb-2 overflow-hidden whitespace-nowrap truncate">
                    Лили Игнатова
                  </h2>
                </div>
                <div class="artist-title text-center">
                  <h3 className="  @apply text-md font-bold mx-auto my-15 overflow-hidden whitespace-nowrap truncate">
                    Tатуист
                  </h3>
                </div>
              </div>

              {/* -------------------------------------------------------------------------------------------------------------------------------- */}
              <div className="card bg-[#F9F9F9] mx-4 mb-6 rounded-lg shadow-lg relative w-[340px] h-[640px]">
                <div className="img-area w-full h-[480px] absolute left-1/2 transform -translate-x-1/2 transition-all duration-200 ease-in-out">
                  <img
                    src={artist2}
                    className="w-full h-full object-cover rounded-lg transition-all duration-200 ease-in-out hover:shadow-lg"
                  />
                </div>

                <div className="text-area pt-[400px]">
                  <div className="text-center text-2xl font-bold p-5 mb-50 mt-10 relative transition-all duration-200 ease-in-out group">
                    <button className="px-8 py-3 border-2 border-gray-700 bg-gray-900 text-white shadow-lg rounded-full transition-all duration-150 ease-in-out">
                      <a href="https://www.instagram.com/kochev_tattoo/">
                        Instagram
                      </a>
                    </button>
                  </div>
                </div>

                <div className="artist-name text-center">
                  <h2 className=" @apply text-2xl font-bold mx-auto mb-2 overflow-hidden whitespace-nowrap truncate">
                    Румен Кочев
                  </h2>
                </div>
                <div class="artist-title text-center">
                  <h3 className="  @apply text-md font-bold mx-auto my-15 overflow-hidden whitespace-nowrap truncate">
                    Татуист
                  </h3>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </section>
  );
};

export default Artist;
