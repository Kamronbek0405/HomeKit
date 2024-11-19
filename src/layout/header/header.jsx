import React from 'react'

export const Header = () => {
  return (
    <div className='w-[100%] py-3 bg-black flex  items-center  px-20 justify-between '>
        <img className='w-[80px] h-[80px]' src="https://www.homekit.uz/static/media/logoj.2c2229bbed9b4e4d95f4.png" alt="logoImg" />
        <nav>
    <ul className='flex gap-20 font-medium text-white scale-110 tracking-widest '>
      <li><a href="#">Xizmatlarimiz</a></li>
      <li><a href="#">Biz Haqimizda</a></li>
      <li><a href="#">Aloqa</a></li>
    </ul>

  </nav>
  <select className=' px-3 py-2  bg-gray-700 text-white font-bold rounded-lg'>
    <option className='bg-black text-white font-medium' value="uzbekiston">UZ</option>
    <option className='bg-black text-white font-medium' value="rossiya">RU</option>
  </select>
  <button className='flex items-center justify-center  px-[22px] rounded-xl py-[9px] bg-customRed transition   animate-shadowPulse     '>  
    <a className='w-[150px] text-white font-medium flex-col flex  ' href="tel:+998977772929">+998 97 777 29 29 Aloqa</a>
  </button>
    </div>
  )
}
