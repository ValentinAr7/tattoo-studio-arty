import React, { useState, useEffect } from "react";
import { headerData } from "../data";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";
import { TiThMenu } from "react-icons/ti";
import logoArty from "../assets/logoArty.png";

const Header = () => {
  // const { logo } = headerData;
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  return (
    <header
      className={`${
        isActive ? "h-[50px] lg:h-[55px] shadow-lg" : "h-[80px] lg:h-[90px]"
      }  bg-white fixed left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div className="flex justify-between items-center h-full pl-[50px] pr-[60px]">
        <a href="/">
          <img className="w-[148px] h-[50px]" src={logoArty} alt="" />
        </a>
        <div className="hidden xl:flex">
          <Nav />
        </div>

        <div
          onClick={() => setNavMobile(!navMobile)}
          className="xl:hidden absolute right-[5%]  p-2 rounded-md cursor-pointer"
        >
          <TiThMenu className="text-3xl text-black" />
        </div>
        {/* nav mobile - is showing by default - hidden on desktop mode */}

        <div
          className={`${navMobile ? "max-h-full" : "max-h-0 overflow-hidden"}
          ${
            isActive
              ? "top-[100px] lg:top-[110px]"
              : "top-[120px] lg:top-[150px]"
          } 
          
          fixed left-0 -z-10 w-full h-full bg-white transition-all duration-300`}
        >
          <NavMobile />
        </div>
        {/* social icons - initially hidden - is showing on desktop mode */}
        <div className="hidden xl:flex">
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
