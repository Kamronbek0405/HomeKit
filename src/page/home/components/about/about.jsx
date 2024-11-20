import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Location } from '../../../../icon/location';
import { useTranslation } from 'react-i18next';

export const About = () => {
    const { t, i18n } = useTranslation()
    const language = localStorage.getItem('i18nextLng') 
    useEffect(() => {
        AOS.init({
            once: false,
        });


        window.addEventListener('scroll', () => {
            AOS.refresh();
        });
    }, []);
    useEffect(() => {
        AOS.init({
            once: false,
        });
        window.addEventListener('scroll', () => {
            AOS.refresh();
        });

    }, []);

    return (
        <div  className="w-[100%] h-auto  bg-gradient-to-t from-black via-red-950 to-black mt-10 flex items-center flex-col ">
            <h1 className="text-white py-5 text-5xl font-medium">{t("Bizning xizmatlarimiz")}</h1>
            <p className="text-center w-[850px] mt-5 text-white leading-9 text-xl">
                {t("HomeKit kompaniyamiz 2019-yilda tashkil topgan bo'lib, ilk bor O'zbekistonda «HomeKit» nomi bilan ish boshlagan. Xizmatlarimiz turlari quyidagilardan iborat:")}
            </p>

            <div className="data-aos='fade-right' mt-20 px-[130px] py-[100px] text-white   bg-gradient-to-r from-bgroungColor to-gray-600  rounded-2xl flex items-center gap-16 justify-center"
                data-aos="fade-right"
            >
                <img className="w-[350px] h-[270px] rounded-xl" src="https://www.homekit.uz/static/media/t7.088bfdb5c8b1977c8892.jpg" alt="" />
                <div className="w-[400px]">
                    <h1 className="text-5xl font-medium leading-tight tracking-wide  ">{t("HOMEKIT AQLLI PARDALARI")}</h1>
                    <p className="mt-6 py-5">{t("HomeKit aqlli pardalari bilan hayot yanada zavqli ko'rinishga kiradi. Birgina qo'lingizdagi telefon orqali istalgan paytda pardalarni boshqaring.")}</p>
                </div>
            </div>
            <div className='flex  mt-20 gap-20 '>
                <div className='   text-white   bg-gradient-to-b from-gray-700 to-rose-900 py-[53px] rounded-2xl w-[500px] bg-gray-300 flex flex-col items-center' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <img className='w-[350px] h-[250px] rounded-xl' src="https://www.homekit.uz/static/media/newkalit.cfb0145959340fb61282.jpeg" alt="" />
                    <div className='px-[86px] mt-5  '>
                        <h1 className='text-4xl font-medium mr-16 leading-tight w-[300px]' > {t("HOMEKIT AQLLI QULFLARI")}</h1>
                        <p className=' mt-5'>{t("Smart qulflar orqali kirish kodi bilan eshikni qulflang va qulfdan chiqaring. Do'stlar, oila va mehmonlar uchun kalitsiz kirish orqali kirish va hisob ma'lumotlarini osongina yarating va yuboring.")}</p>
                    </div>
                </div>

                <div
                    className=' text-white   bg-gradient-to-b from-gray-700 to-rose-900  py-[53px] rounded-2xl w-[500px] bg-gray-300 flex flex-col items-center justify-center'
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                >
                    <img
                        className='w-[350px] h-[250px] rounded-xl'
                        src="https://www.homekit.uz/static/media/newr.a27de1cd6fa5b7be2207.jpg"
                        alt=""
                    />
                    <div className='px-[86px] mt-5'>
                        <h1 className='text-4xl font-medium mr-16 tracking-wider leading-tight'>{t("SMART ROZETKALAR")}</h1>
                        <p className='mt-5'>
                           {t("Maishiy texnika, vaqt kalitlari va o'lchash asboblarining quvvat sarfini masofadan boshqarish va jihozlarning ishdan chiqishi natijasida yuzaga keladigan baxtsiz hodisalarni HomeKit bilan oldini oling.")}
                        </p>
                    </div>
                </div>


            </div>
            <div className="data-aos='fade-right' text-white   bg-gradient-to-r from-gray-800 to-rose-900 mt-20 px-[110px] py-[100px] bg-gray-200 rounded-2xl flex items-center gap-16 justify-center"
                data-aos="fade-right"
            >
                <img className="w-[350px] h-[270px] rounded-2xl" src="https://www.homekit.uz/static/media/w2.ec6ec951e9bd7d1ab91e.jpg" alt="" />
                <div className="w-[450px]">
                    <h1 className="text-5xl font-medium  w-[500px] leading-normal ">{t("HOMEKIT BILAN UYNI AQLLI BOSHQARISH")}</h1>
                    <p className="mt-6">{t("Hisoblagichlar, rozetkalar kabi aqlli qurilmalar orqali kvartirani energiyani tejashni boshqaring va elektr energiyasini isrof qilishning oldini olish uchun bizning masofaviy va muntazam elektr jihozlarimizdan foydalaning")}</p>
                </div>
            </div>
            <div
                className=" text-white   bg-gradient-to-r from-gray-800 to-rose-900 mt-20 px-[130px] py-[80px] bg-gray-200 rounded-2xl flex items-center gap-16 justify-center"
                data-aos="fade-left"
            >
                <img
                    className="w-[350px] h-[270px] rounded-xl"
                    src="https://www.homekit.uz/static/media/w9.48ccdfc9745d9175da5d.jpg"
                    alt=""
                />
                <div className="w-[400px]">
                    <h1 className="text-5xl font-medium leading-snug">{t("HOMEKIT AQLLI KAMERALARI")}</h1>
                    <p className="mt-6">
                        {t("Aqlli kameralar obyektivni, kamerani, boshqaruvni, protsessorni va modelga qarab, ixcham tasvirni qayta ishlash yoki dasturlash tilini bilmasangiz ham, ko'rish sensorini sozlash oson! Dastlabki foydalanuvchi interfeyslari har qanday ko'rish tizimiga tezkor integratsiyalashuvdan tashqari, real vaqt rejimida tizim bilan o'zaro ta'sir o'tkazish imkonini beradi.")}
                    </p>
                </div>
            </div>

            <div id='about' className='w-[100%] h-[700px]  flex items-center justify-center relative mt-20 '>
                <div className="data-aos='fade-right' mt-20 bg-bgroundColorCream w-[900px] relative py-[50px] px-20  rounded-2xl flex  gap-5 flex-col"
                    data-aos="fade-right">

                    <h1 className='text-5xl'>{t("Biz haqimizda")}</h1>
                    <p className='w-[400px] text-lg leading-relaxed px-2'> {t("2019-yilda Toshkent shahrida o’z faoliyatini boshladi. “HomeKit” nomi ostida faoliyat boshlagan jamoamiz o’z oldiga O’zbekistonlik insonlarni aqlli uy bilan bo’ladigan ko’prik vazifasini bajarish, ular uchun har doim eng yaxshi tanlovlarni taqdim qilishni maqsad qilib qo’ygan edi. So’nggi 3 yildan oshiq vaqt davomida jami 50 dan ortiq mijozlarimizni rozi qildik va loyihalarni muvaffaqqiyatli amalga oshirdik")}</p>


                </div>
                <div  className='py-[50px] gap-5 absolute right-[250px] top-2 rounded-lg w-[400px] bg-white flex flex-col items-start  justify-center'
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500">
                   <div className='flex  items-center  gap-10 '>
                   <img className='w-[70px] h-[70px] ml-16' src="https://www.homekit.uz/static/media/logoj.2c2229bbed9b4e4d95f4.png" alt="img" />
                    <a className='text-2xl' href="">homekit.uz  <br /> <span className='text-gray-500 text-sm'>O'zbekiston</span></a>
                   </div>
                   <p className='px-16'>{t("Biz mahsulotlarimizni Xitoy, Buyuk Britaniya, Amerika, Kanada va Yevropadan olib kelamiz. Bizning hamkorlarimiz Toshkent City, Mirobod, Akay City va boshqalar.")}</p>
                   <div className='flex px-[50px] gap-1'>
                    <Location/>
                    <span >{t("Toshkent shahar va butun respublika bo'ylab")}</span>
                   </div>
                   <iframe className='ml-10' width="325" height="200" src="https://www.youtube.com/embed/3ZbvZur2Tuc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                </div>
            </div>

        </div>
    );
};
