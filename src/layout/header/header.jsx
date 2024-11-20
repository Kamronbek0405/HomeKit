import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const language = localStorage.getItem("i18nextLng");
  const [isSticky, setIsSticky] = useState(false);

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  // Scroll monitoring
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll uchun JavaScript
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
      className={`w-full py-3 bg-black flex items-center px-20 justify-between shadow-lg 
        ${isSticky ? "fixed top-0 z-50 opacity-80" : "relative"} transition-all ease-in-out`}
    >
      <img
        className="w-[80px] h-[80px]"
        src="https://www.homekit.uz/static/media/logoj.2c2229bbed9b4e4d95f4.png"
        alt="logoImg"
      />
      <nav>
        <ul className="flex gap-20 font-medium text-white scale-110 tracking-widest">
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
        </ul>
      </nav>
      <select
        onChange={handleChange}
        value={language}
        className="px-3 py-2 bg-gray-700 outline-none text-white font-bold rounded-lg"
      >
        <option value="uz">{t("UZ")}</option>
        <option value="ru">{t("RU")}</option>
        <option value="en">{t("EN")}</option>
      </select>
      <button className="flex items-center justify-center px-[22px] rounded-xl py-[9px] bg-customRed transition">
        <a
          className="w-[150px] text-white font-medium flex-col flex"
          href="tel:+998977772929"
        >
          +998 97 777 29 29 {t("Aloqa")}
        </a>
      </button>
    </header>
  );
};
