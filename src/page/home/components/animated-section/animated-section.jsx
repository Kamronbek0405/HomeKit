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
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };
  

  return (
    <div id="aboutService" className="w-[420px] h-[123vh]   bg-gradient-to-t from-black via-rose-900 to-black relative  lg:w-full lg:h-[100vh] lg:bg-gray-100 lg:bg-gradient-to-t lg:from-black lg:via-rose-900 lg:to-black lg:relative">
  <Slider className="  lg:slider_container w-full  " {...settings}>
    <div className="slide-item bg-customRed mt-[300px]   relative lg:bg-customRed lg:mt-[320px] lg:relative  " >
      <img
        className="  w-[150px] h-[150px] absolute left-20 -top-20 lg:w-[200px] lg:h-[200px] lg:slide-image   lg:absolute lg:bottom-40 lg:left-32  lg:transform lg:-translate-y-10"  
        src="https://www.homekit.uz/static/media/w8.b73f007ee540b46cba9c.png"
        alt="Oqish himoyasi"
      />
      <div className="slide-content text-white mt-24  text-center  lg:text-white lg:absolute lg:bottom-9 lg:flex lg:flex-col lg:items-center lg:text-center">
        <h1 className=" text-2xl  lg:text-4xl lg:font-medium lg:mb-2">{t("Oqish himoyasi")}</h1>
        <p className=" mt-4 px-4  lg:text-base lg:px-5 lg:py-2">
       {t("Oqish datchiklari soni (simli), o'rnatilgan oqish datchiklari (simli) soni, Oqish datchiklari soni (simsiz), suvni to'sib qo'yadigan kranlar soni, suv kirishlari soni")}
        </p>
      </div>
    </div>
    <div className="slide-item relative bg-customRed mt-[300px]">
      <img
        className="slide-image absolute left-14 -top-20 w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] lg:absolute lg:left-32 lg:bottom-[170px]"
        src="https://www.homekit.uz/static/media/s44.abb85cf28e387add145f.png"
        alt="Video monitoring"
      />
      <div className="slide-content text-white absolute bottom-16  px-16 flex flex-col items-center text-center ">
        <h1 className=" text-xl lg:text-4xl lg:font-medium lg:mb-2">{t("Video monitoring")}</h1>
        <p className="  lg:text-base mt-3 lg:mt-2 ">
          {t("Tashqi kameralar soni, ichki kameralar soni")}
        </p>
      </div>
    </div>
    <div className="slide-item bg-customRed mt-[320px] relative ">
    <img
        className="  w-[200px] h-[150px] absolute left-16 -top-20 lg:w-[300px] lg:h-[200px]  lg:absolute lg:bottom-40 lg:left-24  lg:transform lg:-translate-y-10"
        src="https://www.homekit.uz/static/media/s55.e110011aab5fee4bf4e3.png"
        alt="Multimedia"
      />
      <div className="slide-content text-white absolute bottom-9 flex flex-col items-center text-center">
        <h1 className=" text-2xl font-medium lg:text-4xl lg:font-medium lg:mb-2"> {t("Multimedia")} </h1>
        <p className="text-base px-8 py-2">
        {t("Televizorni boshqarish, Ko'p xonali zonalar (stereo), Uy kinoteatrlari (5.1, 7.1), WI-FI nuqtalari, Boshqaruv panellari")}</p>
      </div>
    </div>
    <div className="slide-item bg-customRed mt-[320px] relative ">
      <img
        className=" w-[200px] h-[150px] absolute left-16 -top-16 lg:w-[300px] lg:h-[200px]  lg:absolute lg:bottom-40 lg:left-24  lg:transform lg:-translate-y-10"  
        src="https://www.homekit.uz/static/media/s666.a576f591b4b019ab2869.png"
        alt="Oqish himoyasi"
      />
      <div className="slide-content text-white absolute bottom-9 flex flex-col items-center text-center">
        <h1 className=" text-2xl font-medium  lg:text-4xl lg:font-medium lg:mb-2">{t("Xavfsizlik tizimi")} </h1>
        <p className="text-base px-16 py-2"> {t("Termal yong'in detektorlari, Tutun detektorlari")}</p>
      </div>
    </div>
    <div className="slide-item bg-customRed mt-[320px] relative ">
      <img
        className=" w-[200px] h-[150px] absolute left-16 -top-16 lg:w-[300px] lg:h-[200px]  lg:absolute lg:bottom-40 lg:left-24  lg:transform lg:-translate-y-10"  
        src="https://www.homekit.uz/static/media/w7.d19e1e5af45b62e8766b.png"
        alt="Oqish himoyasi"
      />
      <div className="slide-content  text-white absolute top-32 left-10 text-center lg:text-white lg:absolute lg:bottom-9 lg:left-32 lg:flex lg:flex-col lg:items-center lg:text-center">
        <h1 className=" text-2xl lg:text-4xl lg:font-medium lg:mb-2">{t("Interkom")}</h1>
        <p className="text-base  py-2"> {t("Tashqi panellar, ichki panellar")}</p>
      </div>
    </div>
    <div className="slide-item bg-customRed mt-[320px] relative ">
      <img
        className=" w-[200px] h-[200px] absolute -top-20 left-16 lg:w-[200px] lg:h-[200px]  lg:absolute lg:bottom-40 lg:left-36  lg:transform lg:-translate-y-10"  
        src="https://www.homekit.uz/static/media/11q.549c15abadecf3d977cc.png"
        alt="Oqish himoyasi"
      />
      <div className="slide-content text-white absolute top-24 text-center lg:text-white lg:absolute lg:bottom-9  lg:flex lg:flex-col lg:items-center lg:text-center">
        <h1 className=" text-2xl font-medium  lg:text-4xl lg:font-medium lg:mb-2">{t("Mikroiqlim")}</h1>
        <p className="text-base  py-2 mr-3"> {t("Yerdan isitish zonalari, Radiatorlar guruhlari, Xona termostatlari (displeyli/displeysiz), Teskari aloqa bilan konditsioner tizimi, IQ aloqasi bo'lmagan konditsioner tizimi, Teskari aloqa bilan ventilyatsiya tizimi, Egzoz fanatlar")}</p>
      </div>
    </div>
  </Slider>
</div>

  );
}


