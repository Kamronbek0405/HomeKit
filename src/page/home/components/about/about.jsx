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
    useEffect(() => {
        if (window.innerWidth < 768) {
          
          AOS.init({
            disable: true,
          });
        } else {
         
          AOS.init({
            disable: false,
          });
        }
      }, []);
      

    return (
        <div className="w-[100%] h-auto bg-gradient-to-t from-black via-red-950 to-black mt-10 flex items-center flex-col">
            <h1 className="text-white py-5 text-2xl -tracking-tighter font-medium lg:text-5xl">{t("Bizning xizmatlarimiz")}</h1>
            <p className="text-center  px-5  text-white leading-8 lg:leading-9 text-lg lg:w-[890px] lg:text-lg">
                {t("HomeKit kompaniyamiz 2019-yilda tashkil topgan bo'lib, ilk bor O'zbekistonda «HomeKit» nomi bilan ish boshlagan. Xizmatlarimiz turlari quyidagilardan iborat:")}
            </p>

            <div className="data-aos='fade-right' mt-16  w-[400px]  text-white bg-gradient-to-r from-bgroungColor to-gray-600 rounded-xl flex items-center gap-4 p-4 justify-center  lg:mt-20 lg:w-[1100px] lg:py-[100px] lg:text-white lg:bg-gradient-to-r lg:from-bgroungColor lg:to-gray-600 lg:rounded-2xl lg:flex lg:items-center lg:gap-16 lg:justify-center"
                data-aos="fade-right"
            >
                <img className="w-[230px] h-[150px] rounded-xl lg:w-[400px] lg:h-[300px]" src="https://www.homekit.uz/static/media/t7.088bfdb5c8b1977c8892.jpg" alt="" />
                <div className="   lg:w-[450px]">
                    <h1 className="text-xl  font-medium lg:leading-tight  tracking-wide lg:text-4xl lg:mb-10">{t("HOMEKIT AQLLI PARDALARI")}</h1>
                    <p className=" tracking-normal mt-2 text-xs    font-light lg:w-[400px] lg:text-lg">{t("HomeKit aqlli pardalari bilan hayot yanada zavqli ko'rinishga kiradi. Birgina qo'lingizdagi telefon orqali istalgan paytda pardalarni boshqaring.")}</p>
                </div>
            </div>


            <div className='flex mt-20 px-2 gap-3 ml-2  lg:gap-10 lg:flex lg:items-center '>
                <div className='text-white  w-[200px] flex items-center flex-col  h-[320px] rounded-lg bg-gradient-to-b from-gray-700 to-rose-900 lg:bg-gradient-to-b lg:from-gray-700 lg:to-rose-900  lg:rounded-2xl  lg:w-[500px] lg:h-[620px] lg:bg-gray-300 lg:flex lg:flex-col lg:items-center ' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <img className='w-[180px]  mt-5  h-[120px]  rounded-lg lg:rounded-xl lg:w-[350px] lg:mt-14 lg:h-[250px]' src="https://www.homekit.uz/static/media/newkalit.cfb0145959340fb61282.jpeg" alt="" />
                    <div className='  lg:px-10'>
                        <h1 className=' font-medium tracking-widest  ml-2 text-sm  mt-2  leading-tight w-[150px] lg:text-4xl lg:w-[400px] lg:ml-10 lg:py-2 lg:tracking-widest'>{t("HOMEKIT AQLLI QULFLARI")}</h1>
                        <p className=' text-xs  px-2 mt-2  lg:text-[17px] lg:tracking-wider lg:leading-6 lg:ml-8 '>{t("Smart qulflar orqali kirish kodi bilan eshikni qulflang va qulfdan chiqaring. Do'stlar, oila va mehmonlar uchun kalitsiz kirish orqali kirish va hisob ma'lumotlarini osongina yarating va yuboring.")}</p>
                    </div>
                </div>


                <div
                    className='text-white  w-[200px] flex items-center flex-col  h-[320px] rounded-lg bg-gradient-to-b from-gray-700 to-rose-900   lg:w-[500px] lg:h-[620px] lg:rounded-2xl lg:bg-gray-300 lg:flex lg:flex-col lg:items-center   '
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                >
                    <img
                        className='w-[180px]  mt-5  h-[120px] rounded-lg lg:w-[350px] lg:mt-14 lg:h-[250px]'
                        src="https://www.homekit.uz/static/media/newr.a27de1cd6fa5b7be2207.jpg"
                        alt=""
                    />
                    <div className=' lg:px-10'>
                        <h1 className='font-medium  tracking-widest  ml-3 text-sm  mt-2  lg:py-2 leading-tight w-[150px] lg:ml-10 lg:text-4xl'>{t("SMART ROZETKALAR")}</h1>
                        <p className=' text-xs  px-3 mt-2 lg:text-sm lg:text-[17px] lg:tracking-wider lg:leading-6 lg:ml-8'>
                            {t("Maishiy texnika, vaqt kalitlari va o'lchash asboblarining quvvat sarfini masofadan boshqarish va jihozlarning ishdan chiqishi natijasida yuzaga keladigan baxtsiz hodisalarni HomeKit bilan oldini oling.")}
                        </p>
                    </div>
                </div>
            </div>


            <div className="data-aos='fade-right' mt-16  w-[400px]  text-white bg-gradient-to-r  from-gray-800 to-rose-900 rounded-xl flex items-center gap-4 p-4 justify-center  lg:mt-20 lg:w-[1100px] lg:py-[100px] lg:text-white lg:bg-gradient-to-r lg:from-bgroungColor lg:to-gray-600 lg:rounded-2xl lg:flex lg:items-center lg:gap-16 lg:justify-center"
                data-aos="fade-right"
            >
                <img className="w-[170px] h-[130px] rounded-xl lg:w-[400px] lg:h-[300px]" src="https://www.homekit.uz/static/media/w2.ec6ec951e9bd7d1ab91e.jpg" alt="" />
                <div className="   lg:w-[450px]">
                    <h1 className="text-xl  font-medium lg:leading-tight  tracking-wide lg:text-4xl lg:mb-10">{t("HOMEKIT BILAN UYNI AQLLI BOSHQARISH")}</h1>
                    <p className=" tracking-normal mt-2 text-xs    font-light lg:w-[400px] lg:text-lg">{t("Hisoblagichlar, rozetkalar kabi aqlli qurilmalar orqali kvartirani energiyani tejashni boshqaring va elektr energiyasini isrof qilishning oldini olish uchun bizning masofaviy va muntazam elektr jihozlarimizdan foydalaning.")}</p>
                </div>
            </div>


            <div className="data-aos='fade-left' mt-16  w-[400px]  text-white bg-gradient-to-r  from-gray-800 to-rose-900 rounded-xl flex items-center gap-4 p-4 justify-center  lg:mt-20 lg:w-[1100px] lg:py-[100px] lg:text-white lg:bg-gradient-to-r lg:from-bgroungColor lg:to-gray-600 lg:rounded-2xl lg:flex lg:items-center lg:gap-16 lg:justify-center"
                data-aos="fade-left"
            >
                <img className="w-[170px] h-[130px] rounded-xl lg:w-[400px] lg:h-[300px]" src="https://www.homekit.uz/static/media/w9.48ccdfc9745d9175da5d.jpg" alt="" />
                <div className="lg:w-[450px]">
                    <h1 className="text-xl font-medium lg:leading-tight tracking-wide lg:text-4xl lg:mb-10">{t("HOMEKIT AQLLI KAMERALARI")}</h1>
                    <p className="tracking-normal mt-2 text-xs font-light lg:w-[400px] lg:text-lg">
                        {t("Aqlli kameralar obyektivni, kamerani, boshqaruvni, protsessorni va modelga qarab, ixcham tasvirni qayta ishlash yoki dasturlash tilini bilmasangiz ham, ko'rish sensorini sozlash oson! Dastlabki foydalanuvchi interfeyslari har qanday ko'rish tizimiga tezkor integratsiyalashuvdan tashqari, real vaqt rejimida tizim bilan o'zaro ta'sir o'tkazish imkonini beradi.")}
                    </p>
                </div>
            </div>

















            <div id='about' className=' w-[100%]  h-[130vh] flex    items-center justify-center  relative mt-20 lg:w-[100%] lg:h-[700px] lg:flex lg:items-center lg:justify-center lg:relative lg:mt-20'>
                <div className=" absolute bg-bgroundColorCream flex flex-col justify-center w-[390px] h-[400px] px-8 gap-5 top-3 rounded-2xl lg:mt-20 lg:bg-bgroundColorCream lg:w-[900px] lg:h-[488px] lg:relative lg:py-[40px] lg:px-20 lg:rounded-2xl lg:flex lg:gap-5 lg:flex-col"
                    data-aos="fade-right">

                    <h1 className='text-4xl lg:ml-2 lg:text-4xl'>{t("Biz haqimizda")}</h1>
                    <p className='  lg:text-lg lg:leading-relaxed lg:px-2  lg:w-[380px] '>
                        {t("2019-yilda Toshkent shahrida o’z faoliyatini boshladi. “HomeKit” nomi ostida faoliyat boshlagan jamoamiz o’z oldiga O’zbekistonlik insonlarni aqlli uy bilan bo’ladigan ko’prik vazifasini bajarish, ular uchun har doim eng yaxshi tanlovlarni taqdim qilishni maqsad qilib qo’ygan edi. So’nggi 3 yildan oshiq vaqt davomida jami 50 dan ortiq mijozlarimizni rozi qildik va loyihalarni muvaffaqqiyatli amalga oshirdik.")}
                    </p>
                </div>

                <div className=' absolute bg-white flex flex-col justify-center w-[390px] h-[600px]  gap-5 bottom-3 rounded-xl  lg:absolute  lg:bg-white lg:flex lg:flex-col lg:justify-center lg:w-[450px] lg:h-[640px] lg:px-8 lg:gap-5 lg:top-10 lg:right-[250px]'
                    data-aos="fade-left">

                    <div className='flex items-center gap-10'>
                        <img className='w-[70px] h-[70px] ml-16' src="https://www.homekit.uz/static/media/logoj.2c2229bbed9b4e4d95f4.png" alt="img" />
                        <a className='text-2xl lg:text-xl' href="">homekit.uz <br />
                            <span className='text-gray-500 text-sm'>O'zbekiston</span>
                        </a>
                    </div>

                    <p className='px-16 lg:px-10'>
                        {t("Biz mahsulotlarimizni Xitoy, Buyuk Britaniya, Amerika, Kanada va Yevropadan olib kelamiz. Bizning hamkorlarimiz Toshkent City, Mirobod, Akay City va boshqalar.")}
                    </p>

                    <div className='flex px-[50px] gap-1'>
                        <Location />
                        <span>{t("Toshkent shahar va butun respublika bo'ylab")}</span>
                    </div>

                    <iframe className='ml-10' width="325" height="200" src="https://www.youtube.com/embed/3ZbvZur2Tuc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div>
        </div>


    );
};
