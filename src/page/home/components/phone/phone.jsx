import React from 'react'
import { AudioSystems } from '../../../../icon/audio-systems'
import { Fans } from '../../../../icon/fans'
import { Switches } from '../../../../icon/switches'
import { Sensors } from '../../../../icon/sensors'
import { Garage } from '../../../../icon/garage'
import { Doorbells } from '../../../../icon/doorbells'
import { Castles } from '../../../../icon/castles'
import { Foto } from '../../../../icon/foto'
import { Conditioners } from '../../../../icon/conditioners'
import { Windows } from '../../../../icon/windows'
import { Mashrut } from '../../../../icon/mashrut'
import { Lighting } from '../../../../icon/lighting'
import { Security } from '../../../../icon/security'
import { Purifiers } from '../../../../icon/purifiers'
import { Receivers } from '../../../../icon/receivers'
import { Sockets } from '../../../../icon/sockets'
import { Network } from '../../../../icon/network'
import { Irrigation } from '../../../../icon/irrigation'
import { Faucets } from '../../../../icon/faucets'
import { Televizor } from '../../../../icon/televizor'
import { Thermostats } from '../../../../icon/thermostats'
import { Humidifiers } from '../../../../icon/humidifiers'

import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next'
import axios from 'axios'


export const Phone = () => {
    const { t, i18n } = useTranslation()

    const sendMesage = (event) => {
        event.preventDefault()
        const token = '7908338624:AAHIHkcrc0wjmkA5WwM4xE7M52HJ6nLugV0';
        const chat_id = 1271362249;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const name = document.getElementById("name").value
        const surname = document.getElementById("surname").value
        const massgeContent = `Ismi ${name} \nnumber    : ${surname}`
        axios({
            url: url,
            method: "POST",
            data: {
                "chat_id": chat_id,
                "text": name,

            }
        }).then((res) => {
            document.getElementById("myForm").reset();
            alert("Malumotingiz muvafiqiyatli yuborildi")
        }).catch((error) => {
            alert("yuborishda xatolik", error)
        })
    }


    return (
        <div id='contact' className='w-[100%] h-auto py-20 bg-gradient-to-r from-gray-700 via-red-950 to-gray-700 flex flex-col  items-center justify-center gap-10 '>
            <div className='  lg:w-[800px]  lg:mr-32'>
                <span className=' text-white text-xs ml-10     lg:text-white lg:text-lg' data-aos="fade-right">
                    {t("Bizning operatorlarimiz sizga tez orada javob berishadi.")}
                </span>

                <h1 className=' text-white text-2xl font-medium px-10 mt-3 lg:text-5xl lg:font-medium lg:text-white lg:py-5' data-aos="fade-left">
                    {t("O'z telefon raqamingizni qoldiring")}
                </h1>

            </div>
            <div className='w-[400px] h-[110vh]  flex flex-col items-center  rounded-3xl border-2 border-white lg:w-[1100px] lg:h-[880px] lg:flex lg:flex-col lg:items-center lg:rounded-3xl lg:border-2 lg:border-white'>
                <form onSubmit={sendMesage}>
                    <div className='lg:py-5 mt-12 lg:ml-14'>
                        <input className=' w-[330px]  lg:w-[1000px] lg:py-2 text-white font-medium   bg-transparent outline-none' type="text" placeholder={t("Ismi")} />
                        <div className=' w-[330px]  lg:w-[990px] h-[0.5px] mt-1 bg-white'></div>
                    </div>
                    <div className='py-5 lg:ml-14'>
                        <input className=' w-[330px]  lg:w-[1000px] py-2 text-white font-medium    bg-transparent outline-none' type="number" placeholder={t("Telefon raqami")} />
                        <div className='w-[330px] lg:w-[990px] h-[0.5px] mt-1  bg-white '></div>
                    </div>
                    <div className=' flex  flex-wrap gap-6  justify-center items-center lg:flex lg:flex-wrap lg:px-20 lg:mt-16 lg:justify-center lg:gap-16'>
                        <div className='flex mb-1 flex-col items-center text-white hover:scale-125 transition-all duration-500'>
                            <AudioSystems />
                            <span>{t("Audio tizimlar")}</span>
                        </div>
                        <div className='flex mb-1 flex-col items-center text-white hover:scale-125 transition-all duration-500'>
                            <Fans />
                            <span>{t("Ventilyatorlar")}</span>
                        </div>
                        <div className='flex mb-1 flex-col items-center text-white hover:scale-125 transition-all duration-500'>
                            <Switches />
                            <span>{t("Kalitlar")}</span>
                        </div>
                        <div className='flex mb-1 flex-col items-center text-white hover:scale-125 transition-all duration-500'>
                            <Sensors />
                            <span>{t("Datchiklar")}</span>
                        </div>
                        <div className='flex mb-1 flex-col items-center text-white hover:scale-125 transition-all duration-500'>
                            <Garage />
                            <span>{t("Garaj eshiklari")}</span>
                        </div>
                        <div className='flex mb-1 flex-col items-center text-white hover:scale-125 transition-all duration-500'>
                            <Doorbells />
                            <span>{t("Eshik qo'ng'irog'lari")}</span>
                        </div>
                        <div className='flex mb-1 flex-col items-center text-white hover:scale-125 transition-all duration-500'>
                            <Castles />
                            <span>{t("Zamkilar")}</span>
                        </div>
                        <div className='flex mb-1 flex-col items-center text-white hover:scale-125 transition-all duration-500'>
                            <Foto />
                            <span>{t("Kameralar")}</span>
                        </div>
                        <div className='flex mb-1 flex-col items-center text-white hover:scale-125 transition-all duration-500'>
                            <Conditioners />
                            <span>{t("Konditsionerlar")}</span>
                        </div>
                        <div className='flex mb-1 flex-col items-center text-white hover:scale-125 transition-all duration-500'>
                            <Mashrut />
                            <span>{t("Marshrutizatorlar")}</span>
                        </div>
                        <div className='flex mb-1 flex-col items-center text-white hover:scale-125 transition-all duration-500'>
                            <Windows />
                            <span>{t("Oynalar")}</span>
                        </div>
                        <div className='flex mb-1 flex-col items-center text-white hover:scale-125 transition-all duration-500'>
                            <Lighting />
                            <span>{t("Yoritish")}</span>
                        </div>
                        <div className='flex mb-1 flex-col items-center text-white hover:scale-125 transition-all duration-500'>
                            <Security />
                            <span>{t("Xavfsizlik tizimlari")}</span>
                        </div>
                        <div className='flex mb-1 flex-col items-center text-white hover:scale-125 transition-all duration-500'>
                            <Purifiers />
                            <span>{t("Havo tozalash uskunalari")}</span>
                        </div>
                        <div className='flex mb-1 flex-col items-center text-white hover:scale-125 transition-all duration-500'>
                            <Receivers />
                            <span>{t("Qabul qiluvchilar")}</span>
                        </div>
                        <div className='flex mb-1 flex-col items-center text-white hover:scale-125 transition-all duration-500'>
                            <Sockets />
                            <span>{t("Rozetkalar")}</span>
                        </div>
                        <div className='flex mb-1 flex-col items-center text-white hover:scale-125 transition-all duration-500'>
                            <Network />
                            <span>{t("Tarmoq ko‘priklari")}</span>
                        </div>
                        <div className='flex mb-1 flex-col items-center text-white hover:scale-125 transition-all duration-500'>
                            <Irrigation />
                            <span>{t("Sug‘orish tizimlari")}</span>
                        </div>
                        <div className='flex mb-1 flex-col items-center text-white hover:scale-125 transition-all duration-500'>
                            <Faucets />
                            <span>{t("Armaturalar")}</span>
                        </div>
                        <div className='flex mb-1 flex-col items-center text-white hover:scale-125 transition-all duration-500'>
                            <Televizor />
                            <span>{t("Televizorlar")}</span>
                        </div>
                        <div className='flex mb-1 flex-col items-center text-white hover:scale-125 transition-all duration-500'>
                            <Thermostats />
                            <span>{t("Termostatlar")}</span>
                        </div>
                        <div className='flex mb-1 flex-col items-center text-white hover:scale-125 transition-all duration-500'>
                            <Humidifiers />
                            <span>{t("Havo namlatuvchilari")}</span>
                        </div>




                    </div>
                    <button className=' w-[330px] mt-9 text-white py-3  lg: ml-11 lg:mt-20 lg:w-[1000px] lg:h-[50px]  bg-customRed lg:text-white'>{t("Yuborish")}</button>
                </form>
            </div>
        </div>
    )
}
