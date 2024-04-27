import React from 'react'
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import mentorship  from "../../../../imgs/Vecto 2.png"
import workshop from "../../../../imgs/Group 165 1.png"
import revision from "../../../../imgs/Group 162 1.png"
import errorBook from "../../../../imgs/Group 163.png"
import planner from "../../../../imgs/Group 164.png"
import growthMeter from "../../../../imgs/Group 166 2 1.png"
import Image from 'next/image';
export default function WhyUs() {
  return (
    <div >

      {/* for phone */}
      <motion.div 
      initial={{ opacity: 0, scale:0.5 }}
      whileInView={{ opacity: 1,scale:1 }}
      transition={{ duration: 0.8,ease:"easeInOut" }}
       className='block md:hidden bg-gradient-to-r bg-clip-text from-[#5900d9] - bg-purple-400  justify-start  ' ><h2 className='font-bold md:hidden ml-5 text-[3rem] mt-10  text-transparent ' > Don't Stress!</h2></motion.div>
      <div className=' md:hidden grid grid-cols-12 grid-rows-12 w-[95vw] h-[100vh]  mx-auto my-5 gap-y-4 gap-x-4'>
        
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
       
        transition={{ duration: 0.5 ,delay:0.2 }} className='   col-span-6  row-span-2'><p className='font-lato font-bold ml-5  text-[0.9rem]'>we got your back with leadly's  powerful learning suite:</p></motion.div>


<motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
       
        transition={{ duration: 0.5 ,delay:0.2}} className='relative col-span-6 bg-[#faf8fe] row-span-4 rounded-xl ring-2 ring-purple-100 ring-offset-2'>
          <h2 className=' text-[1.5rem] mt-[10%] leading-tight  ml-1 font-bold font-sans' > Mentorship& Guidance Session</h2><p className='mx-1 text-[0.9rem]'>guided learning <br /> journey</p>
          <Image src={mentorship} className='absolute w-[40%] right-0 bottom-0  h-auto '></Image> </motion.div>
        

          <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        
        transition={{ duration: 0.5,delay:0.2 }}  className='relative col-span-6  bg-[#faf8fe] row-span-1 rounded-xl ring-2 ring-purple-100 ring-offset-2'>
          <h2 className='text-[1.2rem] mt-[3%] leading-tight ml-1 font-bold font-sans' >Workshops</h2><p className='px-1 text-[0.7rem]'>Ignite your expertise</p>
        <Image src={workshop} className='absolute w-[25%] right-[1.5vw] bottom-0   h-auto '></Image> </motion.div>
       

        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        
        transition={{ duration: 0.6 ,delay:0.2 }} className='relative col-span-6 bg-[#faf8fe]  row-span-3 rounded-xl ring-2 ring-purple-100 ring-offset-2 '>
           <h2 className='text-[1.4rem] mt-[5%] leading-tight  ml-2 font-bold font-sans' > Revision<br></br> Tracker</h2><p className='px-2 text-[0.8rem]'>Stay on top of<br/> your revision</p>
        <Image src={revision} className='absolute w-[50%] right-0 bottom-0   h-auto '></Image> </motion.div>
         

        
         <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        
        transition={{ duration: 0.7,delay:0.2 }} className='relative col-span-6 bg-[#faf8fe] row-span-2 my-3 rounded-xl ring-2 ring-purple-100 ring-offset-2'>
          <h2 className='text-[1.2rem] mt-[20%] leading-tight  ml-2 font-semibold font-sans' > Error Book </h2><p className='mx-2 text-[0.8rem]'>embrace your mistake</p>
          <Image src={errorBook} className='absolute w-[30%] right-0 top-0  h-auto '></Image> </motion.div>
       
        

        
         <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        
        transition={{ duration: 0.8, delay:0.4 }} className='relative col-span-12 bg-[#faf8fe] row-span-3 rounded-xl ring-2 ring-purple-100 ring-offset-2'>
          <h2 className='text-[2rem] mt-[5%]  ml-5  font-semibold font-sans leading-tight' > Personalized<br/> Planner</h2><p className='px-5 text-[1rem]'>Crafting your roadmap</p>
          <Image src={planner} className='absolute w-[40%] right-0 bottom-0  h-auto '></Image></motion.div>
        

        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        
        transition={{ duration: 0.8 ,delay:0.5 }} className='relative  col-span-12 bg-[#faf8fe] row-span-3 rounded-xl ring-2 ring-purple-100 ring-offset-2 '>
          <h2 className='text-[2rem] mt-[5%]  ml-5 font-semibold leading-tight font-sans' > Growth<br/> Meter</h2><p className='text-[1rem]  mx-5'>Track your progress</p>
          <Image src={growthMeter} className='absolute w-[35%] right-0 bottom-0   h-auto '></Image> </motion.div>
          </div>   
         

      {/* for computer */}
      
      <motion.div 
      initial={{ y:"50%", scale:0.8 }}
      whileInView={{ y:"0",scale:1 }}
      transition={{ duration: 1,ease:"easeInOut" }}
       className='md:block w-[60vw] hidden bg-gradient-to-r bg-clip-text pb-10 mt-10 from-[#5900d9] - bg-purple-400  ' ><h2 className='font-bold inline ml-[10vw] text-center text-[5rem]  text-transparent ' > Don't Stress!</h2></motion.div>
        <div className='hidden md:grid md:grid-cols-12 md:grid-rows-12 md:w-[80vw] md:h-[90vh] mx-auto mb-10 gap-y-4 gap-x-4'>
        
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
       
        transition={{ duration: 0.5 }} className='   md:col-span-3  md:row-span-4'><p className='text-[1.8rem] font-sans font-bold  leading-tight'>we got your back with leadlly's powerful learning suite:</p></motion.div>
        <div className='col-span-3  row-span-1'></div>
        
        
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        
        transition={{ duration: 0.6 }} className='relative  md:col-span-6 bg-[#faf8fe] md:row-span-5 rounded-2xl ring-2 ring-purple-100 ring-offset-2 '>
          <h2 className='text-[3vw] mt-[5%]  leading-tight ml-5 font-sans font-bold' > Growth<br/> Meter</h2><p className='text-xl mx-5'>Track your progress</p>
          <Image src={growthMeter} className='absolute w-[35%] right-0 bottom-0   h-auto '></Image> </motion.div>
           
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        
        transition={{ duration: 0.7 }} className='relative md:col-span-3 bg-[#faf8fe]  md:row-span-6 rounded-2xl ring-2 ring-purple-100 ring-offset-2 '>
           <h2 className='text-[2.5vw] mt-[10%] font-mono leading-tight ml-5 font-bold font-sans' > Revision<br></br> Tracker</h2><p className='mx-5'>Stay on top of<br/> your revision</p>
        <Image src={revision} className='absolute w-[60%] left-[40%] bottom-0   h-auto '></Image> </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        
        transition={{ duration: 0.5 }}  className='relative md:col-span-3  bg-[#faf8fe] md:row-span-3 rounded-2xl ring-2 ring-purple-100 ring-offset-2'>
          <h2 className='text-[2.2vw] mt-[7%] font-mono ml-5 leading-tight font-bold font-sans' >Workshops</h2><p className='ml-5 text-[0.9rem]'>Ignite your Expertise</p>
        <Image src={workshop} className='absolute w-[25%] right-[1.5vw] bottom-0   h-auto '></Image> </motion.div>
        
        

        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
       
        transition={{ duration: 0.9}} className='relative md:col-span-3 bg-[#faf8fe] md:row-span-6 rounded-2xl ring-2 ring-purple-100 ring-offset-2'>
          <h2 className=' text-[2.5vw] mt-[1vw] font-mono leading-tight ml-5 font-bold font-sans' > Mentorship& Guidance Session</h2><p className=' ml-5 text-xl'>guided learning <br /> journey</p>
          <Image src={mentorship} className='absolute w-[40%] right-0 bottom-0  h-auto '></Image> </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        
        transition={{ duration: 1 }} className='relative md:col-span-3 bg-[#faf8fe] md:row-span-6 my-10 rounded-2xl ring-2 ring-purple-100 ring-offset-2'>
          <h2 className='text-[3vw] mt-[40%] font-mono ml-5 leading-tight font-bold font-sans' > Error Book </h2><p className=' ml-5'>embrace your mistake</p>
          <Image src={errorBook} className='absolute w-[50%] right-0 top-0  h-auto '></Image> </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        
        transition={{ duration: 0.7 }} className='relative md:col-span-6 bg-[#faf8fe] md:row-span-5 rounded-2xl ring-2 ring-purple-100 ring-offset-2'>
          <h2 className='text-[3vw] mt-[5%] font-mono ml-5 leading-tight font-bold font-sans' > Personalized<br/> Planner</h2><p className='mx-5 text-xl'>Crafting your roadmap</p>
          <Image src={planner} className='absolute w-[40%] right-0 bottom-0  h-auto '></Image></motion.div>
        </div>
        
    </div>
   
  )
}
