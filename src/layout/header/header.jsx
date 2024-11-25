import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu } from "../../icon/menu";
import { Exit } from "../../icon/exit";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const language = localStorage.getItem("i18nextLng");
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menyu holati

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };


  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
    className={`px-5 bg-black w-[100%] flex items-center justify-between py-7 lg:w-full lg:py-3 lg:bg-black lg:flex lg:items-center lg:px-20 lg:justify-between lg:shadow-lg
      ${isSticky ? "fixed top-0 z-50 opacity-80 lg:fixed lg:top-0 lg:z-50 lg:opacity-80 transform transition-all duration-300 ease-in-out" : "md:relative lg:relative"} 
      md:transition-all ease-in-out lg:transition-all lg:ease-in-out`}
  >
    <div className="flex items-center gap-64">
      <img
        className="lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]"
        src="https://www.homekit.uz/static/media/logoj.2c2229bbed9b4e4d95f4.png"
        alt="logoImg"
      />
    
      <div className="md:hidden block">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <Menu />
        </button>
      </div>
    </div>
  
   
    <div className="hidden  lg:flex lg:items-center bg-black lg:gap-36 lg:ml-10 py-4">
      <nav className="flex items-center">
        <ul className="flex gap-10 text-white lg:flex lg:gap-32">
          <li>
            <a
              href="#service"
              onClick={(e) => handleSmoothScroll(e, "#service")}
              className="cursor-pointer hover:text-gray-400 lg:text-lg lg:p-5"
            >
              {t("Xizmatlarimiz")}
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "#about")}
              className="cursor-pointer hover:text-gray-400 lg:text-lg"
            >
              {t("Biz Haqimizda")}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="cursor-pointer hover:text-gray-400 lg:text-lg"
            >
              {t("Aloqa")}
            </a>
          </li>
        </ul>
      </nav>
  
     
      <select
        onChange={handleChange}
        value={language}
        className="bg-gray-700 outline-none text-white font-bold rounded-lg py-2 px-3 mt-4 lg:ml-4 lg:py-3 lg:px-4"
      >
        <option value="uz">{t("UZ")}</option>
        <option value="ru">{t("RU")}</option>
        <option value="en">{t("EN")}</option>
      </select>
    </div>
  
  
    <button className="lg:flex lg:items-center lg:justify-center lg:px-[22px] lg:rounded-xl lg:py-[9px] lg:bg-customRed lg:transition">
      <a
        className="hidden  lg:w-[150px] lg:text-white lg:font-medium lg:flex-col lg:flex"
        href="tel:+998977772929"
      >
        +998 97 777 29 29 {t("Aloqa")}
      </a>
    </button>
  
   
    {isMenuOpen && (
      <div
        className="absolute z-20 top-0 right-0 h-full w-[427px] bg-black text-white rounded-lg flex flex-col items-center justify-center transition-transform transform ease-in-out duration-300"
        style={{
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          opacity: isMenuOpen ? '1' : '0.8',  
        }}
      >
       
        <div className="absolute top-5 right-10 cursor-pointer p-5" onClick={toggleMenu}>
          <Exit />
        </div>
  
     
        <nav>
          <ul className="flex flex-col gap-16  mb-16 text-xl text-center">
            <li>
              <a
                href="#service"
                onClick={(e) => handleSmoothScroll(e, "#service")}
                className="cursor-pointer hover:text-gray-400"
              >
                {t("Xizmatlarimiz")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "#about")}
                className="cursor-pointer hover:text-gray-400"
              >
                {t("Biz Haqimizda")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="cursor-pointer hover:text-gray-400"
              >
                {t("Aloqa")}
              </a>
            </li>
            <li>
              <a
                className="md:text-white"
                href="tel:+998977772929"
              >
                +998 97 777 29 29
              </a>
            </li>
          </ul>
        </nav>
  
        {/* Language Select */}
        <select
          onChange={handleChange}
          value={language}
          className="bg-gray-700 outline-none text-white font-bold rounded-lg py-2 px-3 mt-4"
        >
          <option value="uz">{t("UZ")}</option>
          <option value="ru">{t("RU")}</option>
          <option value="en">{t("EN")}</option>
        </select>
      </div>
    )}
  </header>
  
  
  
  
  

  );
};
