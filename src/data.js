import GalleryImg1 from "../src/img/gallery/1.webp";
import GalleryImg2 from "../src/img/gallery/2.webp";
import GalleryImg3 from "../src/img/gallery/3.webp";
import GalleryImg4 from "../src/img/gallery/4.webp";
import GalleryImg5 from "../src/img/gallery/5.webp";
import GalleryImg6 from "../src/img/gallery/6.webp";
import GalleryImg7 from "../src/img/gallery/7.webp";
import GalleryImg8 from "../src/img/gallery/8.webp";
import artist1 from "../src/img/artists/artyHD.webp";
import QuoteImg from "../src/img/testimonial/quote.svg";

import paintImg from "../src/img/about/paint.webp";
import { GrFacebookOption } from "react-icons/gr";
import { IoMdArrowForward } from "react-icons/io";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronRight,
  FaChevronLeft,
  FaChevronDown,
} from "react-icons/fa";
import { IoLogoInstagram, IoIosAdd } from "react-icons/io";
import { Link } from "react-scroll";

export const navData = {
  items: [
    { href: "/", name: "За нас" },
    { href: "/", name: "Начало" },
    { href: "/", name: "Галерия" },
    { href: "/", name: "Ревюта" },
    { href: "/", name: "Видео" },
    { href: "/", name: "Контакт" },
  ],
};

export const socialData = [
  { href: "https://my.bio/tattooarty", icon: <IoIosAdd size={40} /> },
  {
    href: "https://www.facebook.com/TATTURT/",
    icon: <GrFacebookOption size={40} />,
  },
  {
    href: "https://www.instagram.com/tattoo_studio_arty/",
    icon: <IoLogoInstagram size={40} />,
  },
];

export const socialDataPhone = [
  { href: "https://my.bio/tattooarty", icon: <IoIosAdd size={40} /> },
  {
    href: "https://www.facebook.com/TATTURT/",
    icon: <GrFacebookOption size={40} />,
  },
  {
    href: "https://www.instagram.com/tattoo_studio_arty/",
    icon: <IoLogoInstagram size={40} />,
  },
  {},
];

export const aboutData = {
  title: "Нашата История:",
  subtitle1: `Tattoo Arty Studio се намира в сърцето на София. 
  Това е място за творчество, където нашите артисти вдъхват живот на своите визии, 
  а клиентите идват да изразят себе си с красиви, значими татуировки.`,
  subtitle2: `Отдадени на работата си и обсебени от създаването на татуировки,
   които клиентите ни ще се гордеят да носят цял живот. Всяка татуировка е съвместна работа между художника и клиента.
    Отделяме време, за да изслушаме историите на нашите клиенти, да разберем тяхната визия и да я оживим с мастило.`,
  subtitle3: `Ние сме специализирани в широка гама от стилове на татуиране, от традиционни до реалистични, и непрекъснато се стремим да сме в крак с най-новите тенденции и техники. Вярваме, че татуировка е нещо повече от физическо изживяване – то е също емоционално и духовно. Ето защо ние отделяме време да изслушаме нашите клиенти, да разберем техните желания и стремежи и да работим заедно с тях, за да създадем татуировка, която е наистина единствена по рода си. Гордеем се с нашето внимание към детайла, нашия ангажимент към чистотата и безопасността и нашата непоколебима отдаденост на нашия занаят. `,
  subtitle4: `Нашето студио е проектирано да осигури релаксираща и приветлива атмосфера. Използваме само най-висококачествено оборудване и мастило за татуиране и следваме стриктни процедури за стерилизация, за да гарантираме безопасността на нашите клиенти. В Tattoo Arty вярваме, че татуировката не е просто произведение на изкуството – тя е отражение на това кой сте. Позволете ни да ви помогнем да изразите себе си чрез боди арт, който е красив, смислен и вечен.`,
  img1: paintImg,
};

export const InstagramData = {
  title: "Последвайте ни в Инстаграм",
};

export const galleryData = {
  title: "Галерия:",
  btnText: "Още",
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      title: "Traditional or Old School Tattoos",
      width: 450,
      height: 450,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      title: "Realism Tattoos",
      width: 450,
      height: 450,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      title: "Watercolor Tattoos",
      width: 450,
      height: 450,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      title: "Black and Gray Tattoos",
      width: 450,
      height: 450,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      title: "Geometric Tattoos",
      width: 450,
      height: 450,
    },
    {
      src: GalleryImg6,
      title: "Japanese or Irezumi Tattoos",
      original: GalleryImg6,
      width: 450,
      height: 450,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      title: "Dotwork or Pointillism Tattoos",
      width: 450,
      height: 450,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      title: "New School Tattoos",
      width: 450,
      height: 450,
    },
  ],
};

export const artistData = {
  img: artist1,
  btnText: "Portfolio",
  artistName: "Мирослав Илиев",
  artistTitle: "Основател / татуист",
  desciption: `Известен със своята креативност, прецизност и внимание към детайла, неговите проекти са много търсени.
  Скайлър казва: „Всичко зависи от страстта, която влагате, правете го правилно или не го правете изобщо.`,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "Целият екип е изключително любезен и приятелски настроен. Те са фантастични. Те са страхотни в това, което правят! И това е уникално. Те ще се консултират правилно с вас.",
    name: "Валентин Арнаутски",
    occupation: "Програмист",
    btnIconRight: <FaChevronRight />,
    btnIconLeft: <FaChevronLeft />,
  },
  {
    quoteImg: QuoteImg,
    message:
      "Миро е най-добрият татуист в България! Разменихме няколко имейла и идеи и всеки път коригирахме малко чертежа, докато останах доволен. Дизайнът беше страхотен, хареса ми.",
    name: "Васил Костадинов",
    occupation: "Футболист",
    btnIconRight: <FaChevronRight />,
    btnIconLeft: <FaChevronLeft />,
  },

  {
    quoteImg: QuoteImg,
    message: `Румен наистина обърна внимание на всички детайли, които исках, даде ми прозрения, фокусира върху постигането на възможно най-добрия резултат от това, което желах.`,
    name: "Николай Петков",
    occupation: "Учител",
    btnIconRight: <FaChevronRight />,
    btnIconLeft: <FaChevronLeft />,
  },
];

export const contactData = {
  title: "Свържете се с нас:",
  info: [
    {
      title: "София",
      subtitle:
        "Свържете се с нас или заповядайте на място на посоченият адрес!",
      address: {
        icon: <FaMapMarkerAlt />,
        name: 'bul. "Jawaharlal Neru" 29 Mini Mall, first floor, 1336 Sofia',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "+359 88 510 8686",
      },
      email: {
        icon: <FaEnvelope />,
        address: "tattooartystudios@gmail.com",
      },
      link: "Get location",
    },
  ],
  form: {
    name: "Вашето име",
    email: "Вашият имейл",
    message: "Съобщение",
    btnText: "Изпрати",
  },
};

export const FaqData = [
  {
    sectionTitle: "Freaquently Asked Questions",
    title: "Как да си запазим час?",
    answer:
      "Ако желаете да си направите татуировка в нашето студио, първата стъпка е да се свържете с нас. Можете да направите това, като ни пишете в Инстаграм или изпратите имейл. Изпратите снимка на татуировката или идеята, която имате предвид, заедно с частта от тялото, където искате да бъде поставена татуировката, описание на дизайна и предпочитаната от вас дата и час за срещата. Въз основа на тази информация, ние ще работим с вас, за да създадем персонализиран дизайн и да назначим среща, която работи за вас. Нашата цел е да направим процеса на резервация възможно най-лесен и без стрес, така че, моля, не се колебайте да се свържете с нас с всякакви въпроси, които може да имате.",
    btnIcon: <FaChevronDown />,
  },

  {
    sectionTitle: "Freaquently Asked Questions",
    title: "Инструкции за грижа на свежа татуировка!",
    answer: (
      <p>
        - Татуировката е рана, ако се грижите добре за нея, ще бъде напълно
        излекувана след около 6 седмици ( под и над кожата).
        <br></br>- Премахнете фолиото от 1 до 3 часа след поставянето му.
        <br></br>- Погрижете се за вашата татуировка по следния начин:
        <br></br>- Mийте татуировката си поне два пъти на ден само с вода и
        чисти ръце, без никакви препарати ( душ гел, видове сапун и т.н).
        <br></br>- Подсушете татуировката си с качествена кухненска хартия.
        <br></br>- Винаги мийте ръцете си преди да докоснете татуировката по
        време на лечебния процес!
        <br></br>- Нанасяйте тънък слой крем следващите 2 седмици от 4 до 6 пъти
        на ден!
        <br></br>- Не използвайте никаква друга козметика освен предназначената
        за тази цел.
        <br></br>- Лечебният процес трябва да бъде започнат и завършен с един и
        същ вид крем
        <br></br>- Не драскайте, чоплете и не чешайте татуировкта!
        <br></br>- Избягвайте прекалено тесни дрехи или материи дразнещи кожата
        първата една седмица!
        <br></br>- Душът с прясна татуировка със сигурност е разрешен и възможен
        още на същия ден!
        <br></br>- Накисването (вана) не е препорачително в първите 3 седмици.
        <br></br>- Сауни, парни бани, плувни басейни и солариуми са напълно
        забранени през първите 4 седмици!
        <br></br>- Татуировката не трябва да се излага на пряка слънчева
        светлитна през първите 4 седмици!
        <br></br>- За да поддържате цвета и резултата от заздравената си
        татуировка, е препоръчително да нанасяте слънцезащитен крем с 50ти
        фактор или т.н Sunblocker
        <br></br>- При съмнение за инфекция на татуировката, задължително се
        свържете с артиста!
      </p>
    ),

    btnIcon: <FaChevronDown />,
  },

  {
    sectionTitle: "Freaquently Asked Questions",
    title: "Колко време отнема заздравяването на една татуировка?",
    answer:
      "Една татуировка обикновено отнема около 2-3 седмици, за да заздравее на повърхността на кожата, но пълният процес на заздравяване може да отнеме до 2-3 месеца. През това време е важно да се грижите правилно за вашата татуировка, за да сте сигурни, че заздравява правилно и изглежда по най-добрия начин. Това включва следване на инструкциите за последваща грижа, предоставени от вашия татуист, поддържане на зоната чиста и овлажнена и избягване на дейности, които могат да повредят или раздразнят татуираната зона.",
    btnIcon: <FaChevronDown />,
  },

  {
    sectionTitle: "Freaquently Asked Questions",
    title: "Трябва ли да платя депозит, за да си осигуря час?",
    answer:
      "В нашето студио за татуировки не изискваме от нашите клиенти депозит, за да си осигурим час. Все пак препоръчваме да си запазите час предварително, за да сте сигурни, че можете да получите точната дата и час, които искате. Моля, имайте предвид, че ако трябва да пренасрочите или отмените срещата си, любезно ви молим да ни предоставите възможно най-кратко известие от любезност към нашите артисти и други клиенти, които може да чакат свободно място за среща.",
    btnIcon: <FaChevronDown />,
  },

  {
    sectionTitle: "Freaquently Asked Questions",
    title:
      "Какво да направя, ако не мога да дойда и трябва да пренасроча срещата си?",
    answer:
      "Ако трябва да пренасрочите своя час, моля, уведомете ни възможно най-скоро. Ние ще направим всичко възможно, за да се съобразим с новата предпочитана от вас дата и час, в зависимост от наличността ни. Все пак, имайте предвид, че ние изискваме поне 48 часа предизвестие за всякакви заявки за пренасрочване. Това ще ни позволи да предложим оригиналния слот за среща на друг клиент, който може да чака свободно място.",
    btnIcon: <FaChevronDown />,
  },

  {
    sectionTitle: "Freaquently Asked Questions",
    title:
      "Предлагате ли услуги за корекция на татуировки, които са избледнели или се нуждаят от коригиране?",
    answer:
      "Да, предлагаме услуги за корекция на татуировки, които са избледнели или се нуждаят от коригиране. Ние разбираме, че с течение на времето татуировките могат да избледнеят или да  загубят своята жизненост и искаме нашите клиенти да бъдат доволни от своите татуировки за години напред. Нашите квалифицирани художници могат да ретушират татуировката ви, за да я върнат към живот или да направят необходимите корекции, за да гарантират, че тя изглежда също толкова страхотно, колкото и в деня, в който сте я направили. Моля, не се колебайте да ни попитате за нашите услуги за ретуширане, ако имате нужда от тях.",
    btnIcon: <FaChevronDown />,
  },
];

export const footerData = {
  about: {
    title: "Tattoo Arty Studio",
    subtitle: "Свържете се с нас или заповядайте на място на посоченият адрес!",
    address: {
      icon: <FaMapMarkerAlt />,
      name: 'bul. "Jawaharlal Neru" 29 Mini Mall, first floor, 1336 Sofia',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: "+359 88 510 8686",
    },
    email: {
      icon: <FaEnvelope />,
      address: "tattooartystudios@gmail.com",
    },
  },
  links: {
    title: "Полезни Линкове",
    items: [
      {
        name: (
          <Link
            to={"video"}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Начало
          </Link>
        ),
      },

      {
        name: (
          <Link
            to={"galery"}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Галерия
          </Link>
        ),
      },

      {
        name: (
          <Link
            to={"artists"}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Татуисти
          </Link>
        ),
      },

      {
        name: (
          <Link
            to={"contact"}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Контакт
          </Link>
        ),
      },

      {
        name: (
          <Link
            to={"video"}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Как да запазим час?
          </Link>
        ),
      },
    ],
  },
  program: {
    title: "Работно време",
    items: [
      { name: "Пон - Събота / 11:00 - 19:00" },
      { name: "Неделя / Почивен ден" },
    ],
  },
  newsletter: {
    title: "Очакваме ви!",
    subtitle: "",
    form: {},
  },
};
