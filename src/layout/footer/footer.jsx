import React from 'react'
import { Instagram } from '../../icon/instagram'
import { Telefon } from '../../icon/telefon'
import { Telegram } from '../../icon/telegram'

export const Footer = () => {
  return (
    <div className='w-[100%] h-[500px] bg-pink-800 flex flex-col justify-center items-center'>
      <div className='w-[100%] flex items-center justify-around'>
      <div>
        <img className='w-[100px] h-[100px]' src="https://www.homekit.uz/static/media/logoj.2c2229bbed9b4e4d95f4.png" alt="logo" />
        <div className='flex items-center gap-7 py-10' >
          <Telefon/>
          <Instagram/>
          <Telegram/>
        </div>
      </div>
      <div className='text-gray-400 flex flex-col gap-5'>
        <strong className='text-lg text-white'>Kompaniya haqida</strong>
        <ul>
          <a href="#">Bosh sahifa</a>
        </ul>
        <ul>
          <a href="#">Biz haqimizda</a>
        </ul>
        <ul>
          <a href="#">Aloqa</a>
        </ul>
      </div>
      <div className='text-gray-400 flex flex-col gap-5 '>
        <strong className='text-lg text-white'>Xizmatlarimiz</strong>
        <ul>
          <a href="">Bizning afzalliklarimiz</a>
        </ul>
        <ul>
          <a href="">Bizning xizmatlarimiz</a>
        </ul>
        <ul>
          <a href="">Xizmatlarimiz haqida</a>
        </ul>
      </div>
      </div>
      <div className='w-[1200px] h-[1px] bg-white mt-5'>

      </div>
    </div>
  )
}
