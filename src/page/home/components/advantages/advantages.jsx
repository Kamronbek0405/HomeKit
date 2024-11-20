import React from "react";
import Slider from "react-slick";
import { VerifiedIcon, VerifiedIcon2, VerifiedIcon3 } from "../../../../icon/verifiedIcon";
import { ControlPointIcon } from "../../../../icon/control-pointIcon";
import { SellIcon, SellIcon2 } from "../../../../icon/sell-icon";
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
        <div className="slider-container py-28 w-[1400px] h-[800px]">
          <Slider {...settings}>
            <div className="w-[500px] h-[600px] rounded-3xl px-20 bg-bgroundColorCream">
              <h3 className="text-4xl ml-[450px] font-medium -tracking-tighter mt-12">{t("Afzalliklar")}</h3>
              <div className="flex items-center gap-5 justify-center w-full border-2 border-[rgba(0,0,0,0.1)] shadow-lg shadow-[rgba(0,0,0,0.4)] mt-7 px-5 rounded-xl">
                <VerifiedIcon />
                <p className="text-2xl mb-3">{t("Avtomatlashtirilgan mikroiqlim tizimi va har bir xona uchun yoritish stsenariylarini boshqarish bilan jihozlangan Aqlli uyingizni energiya xarajatlarini sezilarli darajada tejaydi.")}</p>
              </div>
              <div className="flex items-center py-3 gap-5 justify-center w-full border-2 border-[rgba(0,0,0,0.1)] shadow-lg shadow-[rgba(0,0,0,0.4)] mt-7 px-5 rounded-xl">
                <ControlPointIcon />
                <p className="text-2xl">{t("Istalgan vaqtda smartfoningizda videokuzatuv kameralarini ko'rsatishingiz va uyingizning holatini tekshirishingiz mumkin.")}</p>
              </div>
              <div className="flex items-center py-4 gap-5 justify-center w-full border-2 border-[rgba(0,0,0,0.1)] shadow-lg shadow-[rgba(0,0,0,0.4)] mt-7 px-7 rounded-xl">
                <SellIcon />
                <p className="text-2xl">{t("Favqulodda vaziyatlar haqida masofaviy xabarnomalarni ham uy ichida, ham mahalliy joylarda avtomatlashtirilgan usulda aniqlay olasiz")}</p>
              </div>
            </div>
            <div className="w-[500px] h-[600px] rounded-3xl px-20 bg-bgroundColorCream">
              <h3 className="text-4xl ml-[450px] font-medium -tracking-tighter mt-12">{t("Afzalliklar")}</h3>
              <div className="flex items-center gap-5 w-full border-2 border-[rgba(0,0,0,0.1)] shadow-lg shadow-[rgba(0,0,0,0.4)] py-5 mt-7 px-5 rounded-xl">
                <VerifiedIcon2 />
                <p className="text-2xl mb-3">{t("Tizim sizni gaz portlashlari va yong'inlardan himoya qiladi")}</p>
              </div>
              <div className="flex items-center py-3 gap-5 justify-center w-full border-2 border-[rgba(0,0,0,0.1)] shadow-lg shadow-[rgba(0,0,0,0.4)] mt-7 px-5 rounded-xl">
                <ControlPointIcon />
                <p className="text-2xl">{t("Endi uy kinoteatringizni boshqarish oson va sodda - bir tugmani bosish bilan siz kerakli stsenariyni ishga tushirasiz.")}</p>
              </div>
              <div className="flex items-center py-4 gap-5 justify-center w-full border-2 border-[rgba(0,0,0,0.1)] shadow-lg shadow-[rgba(0,0,0,0.4)] mt-7 px-7 rounded-xl">
                <SellIcon />
                <p className="text-2xl">{t("Suv, gazning oqishi, konditsionerning noto'g'ri ishlashi - avtomatlashtirish tizimi sizni hamma narsa haqida ogohlantiradi")}</p>
              </div>
            </div>
            <div className="w-[500px] h-[600px] rounded-3xl px-20 bg-bgroundColorCream">
              <h3 className="text-4xl ml-[450px] font-medium -tracking-tighter mt-12">{t("Afzalliklar")}</h3>
              <div className="flex items-center gap-5 justify-center w-full border-2 py-6 border-[rgba(0,0,0,0.1)] shadow-lg shadow-[rgba(0,0,0,0.4)] mt-7 px-5 rounded-xl">
                <VerifiedIcon3 />
                <p className="text-2xl mb-3">{t("Faqat bitta tugmani bosish bilan yorug'lik xiralashadi, pardalar yopiladi, mikroiqlim muvozanatlanadi.")}</p>
              </div>
              <div className="flex items-center py-4 gap-5 justify-center w-full border-2 border-[rgba(0,0,0,0.1)] shadow-lg shadow-[rgba(0,0,0,0.4)] mt-7 px-5 rounded-xl">
                <ControlPointIcon />
                <p className="text-2xl">{t("Yorqin xonalar, yorug'lik oqimlari, interyerni ijobiy ta'kidlaydi - do'stlaringiz uyingizda qulay va erkin his qiladilar.")}</p>
              </div>
              <div className="flex items-center py-2 gap-5 justify-center w-full border-2 border-[rgba(0,0,0,0.1)] shadow-lg shadow-[rgba(0,0,0,0.4)] mt-7 px-7 rounded-xl">
                <SellIcon2 />
                <p className="text-2xl">{t("Siz uxlayotganingizda, yorug'likni tekshirib, xonalarni kezishingiz shart emas. Choyshab yonidagi kalitni bir marta bosish bilan siz uydagi barcha chiroqlarni o'chirasiz va yoqimli uyquga ketasiz.")}</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      
    );
}
