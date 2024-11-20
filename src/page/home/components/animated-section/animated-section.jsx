import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"; 
import { useTranslation } from "react-i18next";

 export  function AnimatedSection() {
  const { t, i18n } = useTranslation()
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div id="aboutService" className="w-full h-[100vh] bg-gray-100  bg-gradient-to-t from-black via-rose-900 to-black relative">
  <Slider className="slider_container w-full  " {...settings}>
    <div className="slide-item bg-customRed mt-[320px] relative  " >
      <img
        className="slide-image  absolute bottom-40 left-32  transform -translate-y-10"  
        src="https://www.homekit.uz/static/media/w8.b73f007ee540b46cba9c.png"
        alt="Oqish himoyasi"
      />
      <div className="slide-content text-white absolute bottom-9 flex flex-col items-center text-center">
        <h1 className="text-4xl font-medium mb-2">{t("Oqish himoyasi")}</h1>
        <p className="text-base px-5 py-2">
       {t("Oqish datchiklari soni (simli), o'rnatilgan oqish datchiklari (simli) soni, Oqish datchiklari soni (simsiz), suvni to'sib qo'yadigan kranlar soni, suv kirishlari soni")}
        </p>
      </div>
    </div>
    <div className="slide-item relative bg-customRed mt-[320px]">
      <img
        className="slide-image absolute left-32 bottom-[170px]"
        src="https://www.homekit.uz/static/media/s44.abb85cf28e387add145f.png"
        alt="Video monitoring"
      />
      <div className="slide-content text-white absolute bottom-16  px-16 flex flex-col items-center text-center ">
        <h1 className="text-4xl font-medium mb-2">{t("Video monitoring")}</h1>
        <p className="text-base  mt-2 ">
          {t("Tashqi kameralar soni, ichki kameralar soni")}
        </p>
      </div>
    </div>
    <div className="slide-item bg-customRed mt-[320px] relative ">
    <img
        className="w-[300px] h-[200px]  absolute bottom-40 left-24  transform -translate-y-10"
        src="https://www.homekit.uz/static/media/s55.e110011aab5fee4bf4e3.png"
        alt="Multimedia"
      />
      <div className="slide-content text-white absolute bottom-9 flex flex-col items-center text-center">
        <h1 className="text-4xl font-medium mb-2"> {t("Multimedia")} </h1>
        <p className="text-base px-8 py-2">
        {t("Televizorni boshqarish, Ko'p xonali zonalar (stereo), Uy kinoteatrlari (5.1, 7.1), WI-FI nuqtalari, Boshqaruv panellari")}</p>
      </div>
    </div>
    <div className="slide-item bg-customRed mt-[320px] relative ">
      <img
        className="w-[300px] h-[200px]  absolute bottom-40 left-24  transform -translate-y-10"  
        src="https://www.homekit.uz/static/media/s666.a576f591b4b019ab2869.png"
        alt="Oqish himoyasi"
      />
      <div className="slide-content text-white absolute bottom-9 flex flex-col items-center text-center">
        <h1 className="text-4xl font-medium mb-2">{t("Xavfsizlik tizimi")} </h1>
        <p className="text-base px-16 py-2"> {t("Termal yong'in detektorlari, Tutun detektorlari")}</p>
      </div>
    </div>
    <div className="slide-item bg-customRed mt-[320px] relative ">
      <img
        className="w-[300px] h-[200px]  absolute bottom-40 left-24  transform -translate-y-10"  
        src="https://www.homekit.uz/static/media/w7.d19e1e5af45b62e8766b.png"
        alt="Oqish himoyasi"
      />
      <div className="slide-content text-white absolute bottom-9 left-32 flex flex-col items-center text-center">
        <h1 className="text-4xl font-medium mb-2">{t("Interkom")}</h1>
        <p className="text-base  py-2"> {t("Tashqi panellar, ichki panellar")}</p>
      </div>
    </div>
    <div className="slide-item bg-customRed mt-[320px] relative ">
      <img
        className="w-[200px] h-[200px]  absolute bottom-40 left-36  transform -translate-y-10"  
        src="https://www.homekit.uz/static/media/11q.549c15abadecf3d977cc.png"
        alt="Oqish himoyasi"
      />
      <div className="slide-content text-white absolute bottom-9  flex flex-col items-center text-center">
        <h1 className="text-4xl font-medium mb-2">{t("Mikroiqlim")}</h1>
        <p className="text-base  py-2 mr-3"> {t("Yerdan isitish zonalari, Radiatorlar guruhlari, Xona termostatlari (displeyli/displeysiz), Teskari aloqa bilan konditsioner tizimi, IQ aloqasi bo'lmagan konditsioner tizimi, Teskari aloqa bilan ventilyatsiya tizimi, Egzoz fanatlar")}</p>
      </div>
    </div>
  </Slider>
</div>

  );
}


