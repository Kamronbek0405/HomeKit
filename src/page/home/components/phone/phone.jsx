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

import 'aos/dist/aos.css'; // Import AOS styles
import { useTranslation } from 'react-i18next'


export const Phone = () => {
    const { t, i18n } = useTranslation()


    return (
        <div id='contact' className='w-[100%] h-auto py-20 bg-gradient-to-r from-gray-700 via-red-950 to-gray-700 flex flex-col  items-center justify-center gap-10'>
            <div className=' w-[800px] mr-32'>
                <span className='text-white text-lg' data-aos="fade-right">
                    {t("Bizning operatorlarimiz sizga tez orada javob berishadi.")}
                </span>

                <h1 className='text-5xl font-medium text-white py-5' data-aos="fade-left">
                    {t("O'z telefon raqamingizni qoldiring")}
                </h1>

            </div>
            <div className='w-[1100px] h-[850px]  flex flex-col items-center  rounded-3xl border-2 border-white'>
                <div className='py-5 ml-14'>
                    <input className='w-[1000px] py-2 text-white font-medium   bg-transparent outline-none' type="text" placeholder={t("Ismi")} />
                    <div className='w-[990px] h-[0.5px] mt-1 bg-white'></div>
                </div>
                <div className='py-5 ml-14'>
                    <input className='w-[1000px] py-2 text-white font-medium    bg-transparent outline-none' type="number" placeholder={t("Telefon raqami")} />
                    <div className='w-[990px] h-[0.5px] mt-1  bg-white '></div>
                </div>
                <div className=' flex flex-wrap px-20 mt-16 justify-center gap-16'>
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
                <button className='mt-20 w-[1000px] h-[50px]  bg-customRed text-white'>{t("Yuborish")}</button>
            </div>
        </div>
    )
}
