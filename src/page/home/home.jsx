import React from 'react'
import { Hero } from './components/hero'
import { About } from './components/about'
import { AnimatedSection } from './components/animated-section'
import { Phone } from './components/phone'
import { Advantages } from './components/advantages'

export const Home = () => {
  return (
    <div>
        <section className='bg-slate-600'>
            <Hero/>
        </section>
        <section id='service'>
            <About/>
        </section>
        <section >
          <AnimatedSection/>
        </section>
        <section>
          <Phone/>
        </section>
        <section>
          <Advantages/>
        </section>
    </div>
  )
}
