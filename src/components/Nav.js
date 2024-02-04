import React from "react";
// import nav data
import { navData } from "../data";
import { Link } from "react-scroll";

const Nav = () => {
  // destructure nav data
  const { items } = navData;
  return (
    <nav>
      <ul className="flex gap-x-[58px]">
        {/* <Link className='link hover:border-b-2 hover:border-dark transition duration-300 flex gap-x-[58px]'
            to={'video'} spy={true} smooth={true} offset={50} duration={500}>
            Начало
          </Link> */}
        {/*         
          <Link className='link hover:border-b-2 hover:border-dark transition duration-300 flex gap-x-[58px]'
            to={'about'} spy={true} smooth={true} offset={-50} duration={500}>
            За нас
          </Link> */}

        <Link
          className="link hover:border-b-2 hover:border-dark transition duration-300 flex gap-x-[58px]"
          to={"gallery"}
          spy={true}
          smooth={true}
          offset={1200}
          duration={500}
        >
          Галерия
        </Link>

        <Link
          className="link hover:border-b-2 hover:border-dark transition duration-300 flex gap-x-[58px]"
          to={"artists"}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          Татуисти
        </Link>

        <Link
          className="link hover:border-b-2 hover:border-dark transition duration-300 flex gap-x-[58px]"
          to={"reviews"}
          spy={true}
          smooth={true}
          offset={-350}
          duration={500}
        >
          Ревюта
        </Link>

        <Link
          className="link hover:border-b-2 hover:border-dark transition duration-300 flex gap-x-[58px]"
          to={"contact"}
          spy={true}
          smooth={true}
          offset={-250}
          duration={500}
        >
          Контакт
        </Link>

        <Link
          className="link hover:border-b-2 hover:border-dark transition duration-300 flex gap-x-[58px] font-bold"
          to={"faq"}
          spy={true}
          smooth={true}
          offset={-250}
          duration={500}
        >
          Как да запазим час?
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
