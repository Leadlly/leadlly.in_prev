import React from 'react'
import Hero from './Sections/Hero/Hero'
import Problem from'./Sections/Problem/Problem.jsx';
import WhyUs from './Sections/WhyUs/WhyUs.jsx';
import Testimonial from './Sections/Testimonials/Testimonial.jsx';


export default function Main() {
  return (
  <div className="bg-[#fefbff]">
    <div className=' w-screen overflow-clip'>
      <Hero/>
      <Problem/>
      <WhyUs/>
      <Testimonial/>
      </div>
    </div>
  )
}
