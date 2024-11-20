import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './hero.css'
import { useTranslation } from 'react-i18next';


export function Hero() {
    const { t, i18n } = useTranslation()
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
        arrows: false,
        customPaging: (i) => (
            <ul className=" slick-dots absolute bottom-20 ">
            <li className="w-5 h-5 mx-1  rounded-full  flex items-center justify-center absolute">
                 <div className=" text-white  text-2xl  font-bold flex items-center justify-center absolute left-[5px] bottom-[0.5px]">
                     {i + 1}
                 </div>
            </li>
         </ul>
         
        ),
    };
    
    
    
    

    return (
        <Slider  {...settings}>
            <div id='hero' className="bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')] bg-no-repeat bg-cover w-[100%] h-[700px]  px-48 py-[170px]">
                <div className='w-[800px] h-[500px] '>
                    <h1 className='font-medium tracking-wide text-gray-700 text-5xl leading-normal' >{t("HomeKit texnologiyalaridan foydalanish qulayligi:")}</h1>
                    <p className='  text-gray-700 text-2xl mt-10 '> {t("Agar siz texnologiyani yaxshi bilmaydigan odam bo'lsangiz ham, qo'llanmalarni kuzatib, bu narsalar qanday ishlashini tushunishingiz mumkin. Aqlli uy texnologiyalari yordamida siz uyda bo'lmasangiz ham, 24/7 uy bilan bog'langaningizni his qilishingiz mumkin.")}</p>
                    <button className='px-9 text-lg py-3 bg-customRed rounded-full text-white mt-7'>{t("Bog'lanish")}</button>
                </div>
            </div>

            <div className="relative bg-[url('https://www.homekit.uz/static/media/e11.2d00e0fc48f03f0176f9.jpg')] bg-no-repeat bg-cover w-full h-[700px] px-48 py-[170px] ">
                <div className="w-[800px] h-[500px] ">
                    <h1 className="font-medium tracking-wide text-white text-5xl leading-normal">{t("Eshiklarni qulflash va ochish HomeKit bilan osonroq.")}</h1>
                    <p className=" text-white text-2xl mt-10 ">{t("Xavfsiz uylar har qanday uyning eng muhim jihati hisoblanadi. Uyingiz uchun qancha qulfdan foydalansangiz ham, uyingizga o'g'rilar va o'g'rilar kirishi xavfi doimo mavjud. HomeKit aqlli texnologiyalari bilan uyingizni aqlli himoya qiling.")}</p>
                    <button className='px-9 text-lg py-3 bg-customRed rounded-full text-white mt-7'>{t("Bog'lanish")}</button>

                </div>
            </div>

            <div className="relative bg-[url('https://www.homekit.uz/static/media/t10.01fa6ef74fcc289bbd8f.jpg')] bg-no-repeat bg-cover w-full h-[700px] px-48 py-[170px]">
                <div className="w-[800px] h-[500px] ">
                    <h1 className="font-medium tracking-wide text-white text-5xl leading-normal">{t("HomeKit bilan uyingizni boshqaring:")}</h1>
                    <p className=" text-white text-2xl mt-10 ">{t("Agar siz isitish tizimining haroratini oshirmoqchi bo'lsangiz yoki konditsioneringizdagi haroratni pasaytirmoqchi bo'lsangiz yoki uyingizdan uzoqda suv isitgichni yoqmoqchi bo'lsangiz yoki yotoqda yotganingizda hamma narsani o'chirmoqchi bo'lsangiz, ularni HomeKit orqali mobil telefoningizga bir marta bosish bilan bajaring.")}</p>
                    <button className='px-9 text-lg py-3 bg-customRed rounded-full text-white mt-7'>{t("Bog'lanish")}</button>

                </div>
            </div>

            <div className="relative bg-[url('https://www.homekit.uz/static/media/e3.a762accf534abd2401e0.jpg')] bg-no-repeat bg-cover w-full h-[700px] px-48 py-[170px]">
                <div className="w-[800px] h-[500px] ">
                    <h1 className="font-medium tracking-wide text-white text-5xl leading-normal">{t("HomeKit bilan energiyani tejash:")}</h1>
                    <p className=" text-white text-2xl mt-10 ">{t("Aqlli uy mahsulotlari bilan siz energiya sarfini isrof qilmasligiga ishonch hosil qilishingiz mumkin. Mashinalar, qurilmalar va jihozlar aqlli uy mahsulotiga ega bo'lganda, ulardan foydalanishdan so'ng darhol boshqarilishi va o'chirilishi mumkin.")}</p>
                    <button className='px-9 text-lg py-3 bg-customRed rounded-full text-white mt-7'>{t("Bog'lanish")}</button>

                </div>
            </div>
        </Slider>
    );
}



