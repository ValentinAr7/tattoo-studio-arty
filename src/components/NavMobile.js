import React, { useState, useEffect } from "react";
import { navData } from "../data";
import Socials from "./Socials";
import { Link } from "react-scroll";

const NavMobile = () => {
  const { items } = navData;

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      const closeMenu = () => {
        setIsOpen(false);
      };
      document.addEventListener("click", closeMenu);
      return () => {
        document.removeEventListener("click", closeMenu);
      };
    }
  }, [isOpen]);

  return (
    <nav
      className="w-full h-full flex flex-col justify-evenly overflow-hidden"
      onClick={(e) => {}}
    >
      <ul className="flex flex-col justify-center items-center gap-y-6 py-6 mb-8">
        <Link
          className="link hover:border-b-2 hover:border-dark transition duration-300 flex gap-x-[58px]"
          to={"video"}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={handleClick}
        >
          Начало
        </Link>

        <Link
          className="link hover:border-b-2 hover:border-dark transition duration-300 flex gap-x-[58px]"
          to={"about"}
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          onClick={handleClick}
        >
          За нас
        </Link>

        <Link
          className="link hover:border-b-2 hover:border-dark transition duration-300 flex gap-x-[58px]"
          to={"gallery"}
          spy={true}
          smooth={true}
          offset={750}
          duration={500}
          onClick={handleClick}
        >
          Галерия
        </Link>

        <Link
          className="link hover:border-b-2 hover:border-dark transition duration-300 flex gap-x-[58px]"
          to={"artists"}
          spy={true}
          smooth={true}
          offset={30}
          duration={500}
          onClick={handleClick}
        >
          Татуисти
        </Link>

        <Link
          className="link hover:border-b-2 hover:border-dark transition duration-300 flex gap-x-[58px]"
          to={"reviews"}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={handleClick}
        >
          Ревюта
        </Link>

        <Link
          className="link hover:border-b-2 hover:border-dark transition duration-300 flex gap-x-[58px]"
          to={"contact"}
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          onClick={handleClick}
        >
          Контакт
        </Link>

        <Link
          className="link hover:border-b-2 hover:border-dark transition duration-300 flex gap-x-[58px] font-bold"
          to={"faq"}
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          onClick={handleClick}
        >
          Как да запазим час?
        </Link>
      </ul>
      <div className="text-2xl">
        <Socials />
      </div>
    </nav>
  );
};

export default NavMobile;
