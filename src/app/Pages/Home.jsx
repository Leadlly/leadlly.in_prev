import React from 'react'
import Hero from './Sections/Hero/Hero'
import Problem from'./Sections/Problem/Problem.jsx';
import Solutions from './Sections/Solutions/Solutions.jsx';
import Testimonial from './Sections/Testimonials/Testimonial.jsx';
import  {Contact}  from './Sections/Contact/Contact';



export default function Main() {
  return (
  <div style={{ backgroundImage: "url('grid.png')", width: "100%", zIndex: "-1" }}>
    <div className='overflow-clip'>
      <Hero/>
      <Problem/>
      <Solutions/>
      <Testimonial/>
      <Contact />
      </div>
    </div>
  )
}
