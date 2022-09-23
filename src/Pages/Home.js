import React from 'react'
import Banner from '../Components/Banner'
import Features from '../Components/Features'
import HowItWorks from '../Components/HowItWorks'
import Pricing from '../Components/Pricing'
import Testimonial from '../Components/Testimonial'

export default function Home() {
  return (
    <div className='flex flex-col items-center w-full'>
        <Banner/>
        <Features/>
        <HowItWorks/>
        <Testimonial/>
        <Pricing/>
    </div>
  )
}
