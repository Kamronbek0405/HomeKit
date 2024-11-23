import React from "react";
import Slider from "react-slick";
import { VerifiedIcon, VerifiedIcon2, VerifiedIcon3 } from "../../../../icon/verifiedIcon";
import { ControlPointIcon, ControlPointIcon2 } from "../../../../icon/control-pointIcon";
import { SellIcon, SellIcon2, SellIcon3 } from "../../../../icon/sell-icon";
import { useTranslation } from "react-i18next";

export function Advantages() {
    const { t, i18n } = useTranslation()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,         
        autoplaySpeed: 2000,     
    };
    

    return (
        <div id="advantages" className="w-[100%] h-[800px] flex items-center justify-center bg-customGradient ">
        <div className="slider-container py-28 w-[400px]  lg:w-[1400px] h-[800px]">
          <Slider {...settings}>
            <div className=" w-[200px] lg:py-  py-10 rounded-3xl lg:w-[500px] lg:h-[600px] lg:rounded-3xl lg:px-20 bg-bgroundColorCream">
              <h3 className=" text-3xl ml-28   text-black  lg:text-4xl lg:ml-[450px] font-medium -tracking-tighter lg:mt-12">{t("Afzalliklar")}</h3>
              <div className="flex  lg:py-3 items-center gap-5 justify-center w-[350px] ml-6 border-2  lg:w-full border-[rgba(0,0,0,0.1)] shadow-lg shadow-[rgba(0,0,0,0.4)] mt-7 px-5 rounded-xl">
                <VerifiedIcon />
                <p className=" py-1 text-xs w-[300px] lg:w-[1100px] lg:text-2xl lg:mb-3">{t("Avtomatlashtirilgan mikroiqlim tizimi va har bir xona uchun yoritish stsenariylarini boshqarish bilan jihozlangan Aqlli uyingizni energiya xarajatlarini sezilarli darajada tejaydi.")}</p>
              </div>
              <div className="flex w-[350px] ml-6  items-center py-2 gap-5 justify-center lg:w-full border-2 border-[rgba(0,0,0,0.1)] shadow-lg shadow-[rgba(0,0,0,0.4)] lg:mt-7 mt-4 px-5 rounded-xl">
                <ControlPointIcon />
                <p className=" text-xs py-1  lg:text-2xl">{t("Istalgan vaqtda smartfoningizda videokuzatuv kameralarini ko'rsatishingiz va uyingizning holatini tekshirishingiz mumkin.")}</p>
              </div>
              <div className="flex w-[350px] ml-6 py-1 items-center lg:py-4 gap-5 justify-center lg:w-full border-2 border-[rgba(0,0,0,0.1)] shadow-lg shadow-[rgba(0,0,0,0.4)] lg:mt-7 mt-4 px-7 rounded-xl">
                <SellIcon />
                <p className=" text-xs lg:text-2xl">{t("Favqulodda vaziyatlar haqida masofaviy xabarnomalarni ham uy ichida, ham mahalliy joylarda avtomatlashtirilgan usulda aniqlay olasiz")}</p>
              </div>
            </div>
            <div className=" w-[200px]   py-11 rounded-3xl lg:w-[500px] lg:h-[600px] lg:rounded-3xl lg:px-20 bg-bgroundColorCream">
              <h3 className="text-3xl lg:text-4xl ml-28 mb-5 lg:ml-[450px] font-medium -tracking-tighter lg:mt-12">{t("Afzalliklar")}</h3>
              <div className="flex  py-2 ml-6 items-center  gap-5 w-[350px] lg:w-full border-2 border-[rgba(0,0,0,0.1)] shadow-lg shadow-[rgba(0,0,0,0.4)] lg:py-5 lg:mt-7 lg:px-5 rounded-xl">
                <VerifiedIcon2 />
                <p className="py-3 text-xs w-[300px] lg:w-[1100px] lg:text-2xl lg:mb-3">{t("Tizim sizni gaz portlashlari va yong'inlardan himoya qiladi")}</p>
              </div>
              <div className="flex mt-3 ml-6 w-[350px] items-center py-3 gap-5 justify-center lg:w-full border-2 border-[rgba(0,0,0,0.1)] shadow-lg shadow-[rgba(0,0,0,0.4)] lg:mt-7 lg:px-5 rounded-xl">
                <ControlPointIcon2 />
                <p className=" text-xs  w-[300px] lg:w-[1100px] lg:text-2xl lg:mb-3">{t("Endi uy kinoteatringizni boshqarish oson va sodda - bir tugmani bosish bilan siz kerakli stsenariyni ishga tushirasiz.")}</p>
              </div>
              <div className="flex mt-3 ml-6 w-[350px] items-center lg:py-2 gap-5 justify-center lg:w-full border-2 border-[rgba(0,0,0,0.1)] shadow-lg shadow-[rgba(0,0,0,0.4)] lg:mt-7 lg:px-7 rounded-xl">
                <SellIcon3 />
                <p className="py-3 text-xs w-[300px] lg:w-[1100px] lg:text-2xl lg:mb-3">{t("Suv, gazning oqishi, konditsionerning noto'g'ri ishlashi - avtomatlashtirish tizimi sizni hamma narsa haqida ogohlantiradi")}</p>
              </div>
            </div>
            <div className="w-[200px]  py-11 rounded-3xl lg:w-[500px] lg:h-[600px] lg:rounded-3xl lg:px-20 bg-bgroundColorCream">
              <h3 className="lg:text-4xl text-3xl mb-5 ml-28 lg:ml-[450px] font-medium -tracking-tighter lg:mt-12">{t("Afzalliklar")}</h3>
              <div className="flex w-[350px] py-2 ml-6 items-center gap-5 justify-center lg:w-full border-2 lg:py-6 border-[rgba(0,0,0,0.1)] shadow-lg shadow-[rgba(0,0,0,0.4)] lg:mt-7 lg:px-5 rounded-xl">
                <VerifiedIcon3 />
                <p className=" text-xs  w-[250px] lg:w-[1100px] lg:text-2xl lg:mb-3">{t("Faqat bitta tugmani bosish bilan yorug'lik xiralashadi, pardalar yopiladi, mikroiqlim muvozanatlanadi.")}</p>
              </div>
              <div className="flex items-center gap-8 mt-5 py-2 w-[350px] ml-6 lg:py-4 lg:gap-5 justify-center lg:w-full border-2 border-[rgba(0,0,0,0.1)] shadow-lg shadow-[rgba(0,0,0,0.4)] lg:mt-7 lg:px-5 rounded-xl">
                <ControlPointIcon2 />
                <p className=" text-xs  w-[250px] lg:w-[1100px] lg:text-2xl lg:mb-3">{t("Yorqin xonalar, yorug'lik oqimlari, interyerni ijobiy ta'kidlaydi - do'stlaringiz uyingizda qulay va erkin his qiladilar.")}</p>
              </div>
              <div className="flex lg:py-2 items-center w-[350px] ml-6 mt-4  gap-5 justify-center lg:w-full border-2 border-[rgba(0,0,0,0.1)] shadow-lg shadow-[rgba(0,0,0,0.4)] lg:mt-7 lg:px-7 rounded-xl">
                <SellIcon2 />
                <p className=" text-xs py-2 w-[340px] lg:w-[1100px] lg:text-2xl lg:mb-3">{t("Siz uxlayotganingizda, yorug'likni tekshirib, xonalarni kezishingiz shart emas. Choyshab yonidagi kalitni bir marta bosish bilan siz uydagi barcha chiroqlarni o'chirasiz va yoqimli uyquga ketasiz.")}</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      
    );
}
