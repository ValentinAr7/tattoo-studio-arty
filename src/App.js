import React from "react";

// import components
// import Hero from './components/Hero';
// import Header from './components/Header';
// import Skills from './components/Skills';
// import Interview from './components/Interview';
// import { BrowserRouter } from 'react-router-dom';
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

const App = () => {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <HeaderSec />
      <Video />
      <About />
      <GallerySection />
      <Artist />
      {/* <Skills /> */}
      <Testimonial />
      {/* <Interview /> */}
      {/* <Hero /> */}
      <Contact />
      <Faq />
      <Footer />
      <Copyright />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
