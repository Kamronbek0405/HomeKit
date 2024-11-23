import React from 'react';
import { Instagram } from '../../icon/instagram';
import { Telefon } from '../../icon/telefon';
import { Telegram } from '../../icon/telegram';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-[100%] h-[500px] bg-pink-800 flex flex-col justify-center items-center">
      <div className="w-[100%] flex items-center justify-around">
        <div className='lg:flex lg:items-center lg:justify-between lg:w-[650px]'>
        <div>
          <img
            className=" w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]"
            src="https://www.homekit.uz/static/media/logoj.2c2229bbed9b4e4d95f4.png"
            alt="logo"
          />
          <div className="flex items-center gap-7 py-10">
            <Telefon />
            <Instagram />
            <Telegram />
          </div>
        </div>
        <div className="text-gray-400 flex flex-col gap-5">
          <strong className="text-lg text-white">{t('Kompaniya haqida')}</strong>
          <ul>
            <button
              onClick={() => scrollToSection('#hero')}
              className="cursor-pointer text-gray-400 hover:text-white"
            >
              {t('Bosh sahifa')}
            </button>
          </ul>
          <ul>
            <button
              onClick={() => scrollToSection('#about')}
              className="cursor-pointer text-gray-400 hover:text-white"
            >
              {t('Biz haqimizda')}
            </button>
          </ul>
          <ul>
            <button
              onClick={() => scrollToSection('#contact')}
              className="cursor-pointer text-gray-400 hover:text-white"
            >
              {t('Aloqa')}
            </button>
          </ul>
        </div>
        </div>
        <div className="text-gray-400 flex flex-col gap-5">
          <strong className="text-lg text-white">{t('Xizmatlarimiz')}</strong>
          <ul>
            <button
              onClick={() => scrollToSection('#advantages')}
              className="cursor-pointer text-gray-400 hover:text-white"
            >
              {t('Bizning afzalliklarimiz')}
            </button>
          </ul>
          <ul>
            <button
              onClick={() => scrollToSection('#service')}
              className="cursor-pointer text-gray-400 hover:text-white"
            >
              {t('Bizning xizmatlarimiz')}
            </button>
          </ul>
          <ul>
            <button
              onClick={() => scrollToSection('#aboutService')}
              className="cursor-pointer text-gray-400 hover:text-white"
            >
              {t('Xizmatlarimiz haqida')}
            </button>
          </ul>
        </div>
      </div>
      <div className=" w-[350px] lg:w-[1200px] h-[1px] bg-white mt-5"></div>
    </div>
  );
};
