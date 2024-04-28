import React from "react";
import About from "./components/About";
import GallerySection from "./components/GallerySection";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import { Video } from "./components/Video";
import Artist from "./components/Artists";
import HeaderSec from "./components/HeaderSec";
import { Faq } from "./components/Faq";
import Instagram from "./components/Instagram";

const App = () => {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <HeaderSec />
      <Video />
      <About />
      <Instagram />
      <GallerySection />
      <Artist />
      {/* <Skills /> */}
      <Testimonial />
      <Contact />
      <Faq />
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
