import React from 'react'
import { Header } from '../header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../footer'

export const MainLayout = () => {
  return (
    <div>
        <section>
            <Header/>
        </section>
        <main className='bg-black'>
            <Outlet/>
        </main>
        <section>
            <Footer/>
        </section>
    </div>
  )
}
