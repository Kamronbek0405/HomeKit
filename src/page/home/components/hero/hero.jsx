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
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        customPaging: (i) => (
            <ul className="lg:slick-dots lg:absolute lg:bottom-20 md:bottom-10 text-white font-medium">
                <li className="lg:w-5 lg:h-5 lg:mx-1 lg:rounded-full lg:flex items-center lg:justify-center lg:absolute">
                    <div className="lg:text-white lg:text-2xl lg:font-bold lg:flex lg:items-center lg:justify-center lg:absolute lg:left-[5px] lg:bottom-[0.5px] md:text-xl md:left-0 md:bottom-[1px]">
                        {i + 1}
                    </div>
                </li>
            </ul>
        ),
    };

    return (
        <Slider {...settings}>
        <div id='hero' className="bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')] bg-no-repeat bg-cover lg:w-[100%] lg:h-[680px] lg:px-40 lg:py-[110px] w-[390px] h-[568px]">
            <div className='lg:w-[800px] lg:h-[500px] w-[90%] h-[400px]'>
                <h1 className='lg:font-medium lg:tracking-wide lg:text-gray-700 lg:text-5xl lg:leading-normal font-medium tracking-wide text-white text-2xl px-10 mt-10 py-2 leading-normal'>
                    {t("HomeKit texnologiyalaridan foydalanish qulayligi:")}
                </h1>
                <p className='lg:text-gray-700 lg:text-2xl lg:mt-10 text-white px-10 text-lg'>
                    {t("Agar siz texnologiyani yaxshi bilmaydigan odam bo'lsangiz ham, qo'llanmalarni kuzatib, bu narsalar qanday ishlashini tushunishingiz mumkin. Aqlli uy texnologiyalari yordamida siz uyda bo'lmasangiz ham, 24/7 uy bilan bog'langaningizni his qilishingiz mumkin.")}
                </p>
                <button className='lg:px-9 lg:text-lg lg:py-3 lg:bg-customRed lg:rounded-full lg:text-white lg:mt-7 px-7 text-md py-2 ml-10 bg-customRed rounded-full text-white mt-7'>
                    {t("Bog'lanish")}
                </button>
            </div>
        </div>
    
        <div className="relative bg-[url('https://www.homekit.uz/static/media/e11.2d00e0fc48f03f0176f9.jpg')] bg-no-repeat bg-cover lg:w-full lg:h-[680px] lg:px-40 lg:py-[110px] w-[390px] h-[569px]">
            <div className="lg:w-[800px] lg:h-[500px] w-[90%] h-[400px]">
                <h1 className="lg:font-medium lg:tracking-wide lg:text-white lg:text-5xl lg:leading-normal text-white text-2xl px-10 mt-10 py-2">
                    {t("Eshiklarni qulflash va ochish HomeKit bilan osonroq.")}
                </h1>
                <p className="lg:text-white lg:text-2xl lg:mt-10 text-white text-lg px-10">
                    {t("Xavfsiz uylar har qanday uyning eng muhim jihati hisoblanadi. Uyingiz uchun qancha qulfdan foydalansangiz ham, uyingizga o'g'rilar va o'g'rilar kirishi xavfi doimo mavjud. HomeKit aqlli texnologiyalari bilan uyingizni aqlli himoya qiling.")}
                </p>
                <button className='lg:px-9 lg:text-lg lg:py-3 lg:bg-customRed lg:rounded-full lg:text-white lg:mt-7 px-7 text-md py-2 ml-10 bg-customRed rounded-full text-white mt-7'>
                    {t("Bog'lanish")}
                </button>
            </div>
        </div>
    
        <div className="relative bg-[url('https://www.homekit.uz/static/media/t10.01fa6ef74fcc289bbd8f.jpg')] bg-no-repeat bg-cover lg:w-full lg:h-[680px] lg:px-40 lg:py-[100px] w-[390px] h-[568px]">
            <div className="lg:w-[800px] lg:h-[500px] w-[90%] h-[400px]">
                <h1 className="lg:font-medium lg:tracking-wide lg:text-white lg:text-5xl lg:leading-normal text-white text-2xl px-10 mt-10 py-2">
                    {t("HomeKit bilan uyingizni boshqaring:")}
                </h1>
                <p className="lg:text-white lg:text-2xl lg:mt-10 text-white text-lg px-10">
                    {t("Agar siz isitish tizimining haroratini oshirmoqchi bo'lsangiz yoki konditsioneringizdagi haroratni pasaytirmoqchi bo'lsangiz yoki uyingizdan uzoqda suv isitgichni yoqmoqchi bo'lsangiz yoki yotoqda yotganingizda hamma narsani o'chirmoqchi bo'lsangiz, ularni HomeKit orqali mobil telefoningizga bir marta bosish bilan bajaring.")}
                </p>
                <button className='lg:px-9 lg:text-lg lg:py-3 lg:bg-customRed lg:rounded-full lg:text-white lg:mt-7 px-7 text-md py-2 ml-10 bg-customRed rounded-full text-white mt-7'>
                    {t("Bog'lanish")}
                </button>
            </div>
        </div>
    
        <div className="relative bg-[url('https://www.homekit.uz/static/media/e3.a762accf534abd2401e0.jpg')] bg-no-repeat bg-cover lg:w-full lg:h-[680px] lg:px-40  lg:py-[110px] w-[390px] h-[569px]">
            <div className="lg:w-[800px] lg:h-[500px] w-[90%] h-[400px]">
                <h1 className="lg:font-medium lg:tracking-wide lg:text-white lg:text-5xl lg:leading-normal text-white text-2xl px-10 mt-10 py-2">
                    {t("HomeKit bilan energiyani tejash:")}
                </h1>
                <p className="lg:text-white lg:text-2xl lg:mt-10 text-white text-lg px-10">
                    {t("Aqlli uy mahsulotlari bilan siz energiya sarfini isrof qilmasligiga ishonch hosil qilishingiz mumkin. Mashinalar, qurilmalar va jihozlar aqlli uy mahsulotiga ega bo'lganda, ulardan foydalanishdan so'ng darhol boshqarilishi va o'chirilishi mumkin.")}
                </p>
                <button className='lg:px-9 lg:text-lg lg:py-3 lg:bg-customRed lg:rounded-full lg:text-white lg:mt-7 px-7 text-md py-2 ml-10 bg-customRed rounded-full text-white mt-7'>
                    {t("Bog'lanish")}
                </button>
            </div>
        </div>
    </Slider>
    
    );
}
