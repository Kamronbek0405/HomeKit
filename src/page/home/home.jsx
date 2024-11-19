import React from 'react'
import { Hero } from './components/hero'
import { About } from './components/about'
import { AnimatedSection } from './components/animated-section'
import { Phone } from './components/phone'

export const Home = () => {
  return (
    <div>
        <section className='bg-slate-600'>
            <Hero/>
        </section>
        <section>
            <About/>
        </section>
        <section >
          <AnimatedSection/>
        </section>
        <section>
          <Phone/>
        </section>
    </div>
  )
}
