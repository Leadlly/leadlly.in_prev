import React from "react";
import { motion } from "framer-motion";
import { img } from "@nextui-org/react";
import bgimg from "./../../../imgs/Vector60.png"

import knocking from "./../../../imgs/Group 203.png"
import backlogs from "./../../../imgs/backlogs.png"
import distractions from "./../../../imgs/distractions.png"
import procastination from "./../../../imgs/procastination.png"
import anxiety from "./../../../imgs/anxiety.png"
import Image from "next/image";

export default function BouncyCardsFeatures(){



  
  return (<>
    <section className=" hidden md:flex flex-col overflow-hidden  ">
      
      <div className="relative h-[200vh] flex-col flex-shrink   bg-clip-content">
      <div className="absolute  top-[28vh] w-[28vw] left-[37vw] ">
        <Image src={bgimg} alt="background"/>
        </div>
        <Image className="absolute w-[18vw]  right-[15vw]" src={backlogs}></Image>
        <Image className="absolute w-[25vw] top-[40vh] left-[8vw]" src={distractions}></Image>
        <Image className="absolute w-[25vw] top-[90vh] right-[10vw]" src={procastination}></Image>
        <Image className="absolute w-[25vw] top-[130vh] left-[8vw]" src={anxiety}></Image>
     
      {/* <motion.div initial={{ width:"0" }} whileInView={{ width:"calc(50vw)"}} transition={{ duration: 1,delay:1.2 }}  className="absolute h-[13vw] left-[9vw] top-[31vw] opacity-50 rounded-3xl z-0 bg-[#ffb35c]"></motion.div>

      <motion.div initial={{ width:"0" }} whileInView={{ width:"calc(60vw)"}} transition={{ duration: 1,delay:1.2 }}  className="absolute h-[13vw] left-[9vw]  top-[74vw] opacity-50 rounded-3xl z-0 bg-[#ffb35c]"></motion.div>
      
      <motion.div initial={{ width:"0" }} whileInView={{ width:"calc(50vw)"}} transition={{ duration: 1,delay:1.2 }}  className="absolute h-[13vw] left-[9vw] top-[31vw] opacity-50 rounded-3xl z-0 bg-[#ffb35c]"></motion.div>
      <motion.div initial={{ width:"0" }} whileInView={{ width:"calc(50vw)"}} transition={{ duration: 1,delay:1.2 }}  className="absolute h-[13vw] left-[9vw] top-[31vw] opacity-50 rounded-3xl z-0 bg-[#ffb35c]"></motion.div> */}
      <div className='hidden md:flex flex-col  h-auto  w-screen'>

        <div className="flex flex-col ml-[5vw] w-[50vw] h-auto justify-center">
      <motion.div initial={{ y:"80%" }} whileInView={{ y:"0%"}} transition={{ duration: 1,ease:"easeOut" }} className=" hidden md:flex h-auto justify-center bg-clip-text bg-gradient-to-br from-[#5a10d9] via-indigo-400 to-indigo-900 items-center z-10">
        <h1 className="font-sans text-[5vw] leading-tight font-bold text-transparent">Are you buried under the <span className="text-transparent text-[6vw]">BACKLOGS?</span> </h1>

      </motion.div>
      </div>
      <div className="flex flex-col w-[50vw] ml-[45vw] h-auto justify-center">
      <motion.div initial={{ y:"80%" }} whileInView={{ y:"0%"}} transition={{ duration: 1,ease:"easeOut" }} className=" hidden md:flex h-auto text-right justify-center bg-clip-text bg-gradient-to-br from-[#5a10d9] via-indigo-400 to-indigo-900 items-center z-10">
        <h1 className="font-sans text-[5vw] leading-tight font-bold text-transparent">Bombarded by<span className="text-transparent text-[6vw]"> DISTRACTONS</span> and feeling isolated <br /> and Unheard? </h1>

      </motion.div>

      </div>
      <div className="flex flex-col h-auto  justify-center">
      <motion.div initial={{ y:"80%" }} whileInView={{ y:"0%"}} transition={{ duration: 1,ease:"easeOut" }} className=" hidden ml-[5vw] md:flex w-[50vw] h-auto justify-center bg-clip-text bg-gradient-to-br from-[#5a10d9] via-indigo-400 to-indigo-900 items-center z-10">
        <h1 className="font-sans text-[5vw] leading-tight font-bold text-transparent">Lacking a proper Schedule and <span className="text-transparent text-[6vw]">PROCRASTINATE</span> <br /> a lot? </h1>

      </motion.div>
      </div>
      <div className="flex flex-col w-full h-auto ml-[] justify-center">
      <motion.div initial={{ y:"80%" }} whileInView={{ y:"0%"}} transition={{ duration: 1,ease:"easeOut" }} className=" hidden md:flex w-[45vw] h-auto justify-center mt-[10vh] ml-[50vw] text-right bg-clip-text bg-gradient-to-br from-[#5a10d9] via-indigo-400 to-indigo-900 items-center z-10">
        <h1 className="font-sans text-[5vw]  leading-tight font-bold text-transparent">Which only adds on the <span className="text-transparent text-[6vw]">Anxiety!</span> </h1>

      </motion.div>
      </div>

      </div>

      </div>
      </section>
      <section className="mx-auto md:hidden relative  px-4 py-5  h-auto">
{/* phone */}
<div className="absolute w-[80%] top-[19vh] ml-[10%]   bg-clip-content">
        <Image src={bgimg} />
      </div>
      <Image className="absolute w-[15vh] top-[18vh] right-[5vw]" src={backlogs}></Image>
        <Image className="absolute w-[25vh] top-[45vh] left-[-10vw] " src={distractions}></Image>
        <Image className="absolute w-[23vh] top-[81vh] right-[-7vw]" src={procastination}></Image>
        <Image className="absolute w-[25vh] top-[100vh] left-[-10vw]" src={anxiety}></Image>
     

<div className='flex  flex-col md:ml-[10vw] h-full  md:w-auto'>

        <div className="flex flex-col w-[75vw] h-[30vh] justify-center">
      <motion.div initial={{ y:"50%" }} whileInView={{ y:"0%"}} transition={{ duration: 0.7,ease:"easeOut" }} className=" flex md:hidden h-auto justify-center bg-clip-text bg-gradient-to-br from-[#5a10d9] via-indigo-400 to-indigo-900 items-center z-10">
        <h1 className="font-sans text-[1.7rem] leading-tight font-bold text-transparent">Are you buried under the <span className="text-transparent text-[2rem]">backlogs?</span> </h1>

      </motion.div>
      </div>
      <div className="flex flex-col w-full h-[30vh] justify-center">
      <motion.div initial={{ y:"50%" }} whileInView={{ y:"0%"}} transition={{ duration: 0.7,ease:"easeOut" }} className=" md:hidden flex h-auto justify-center bg-clip-text bg-gradient-to-br from-[#5a10d9] via-indigo-400 to-indigo-900 items-center z-10">
        <h1 className="font-sans text-[1.7rem] text-right leading-tight font-bold text-transparent">Bombarded by<span className="text-transparent text-[2rem]"> distractions</span> and feeling isolated <br /> and Unheard? </h1>

      </motion.div>

      </div>
      <div className="flex flex-col w-full mt-[5vh] h-[30vh] justify-center">
      <motion.div initial={{ y:"50%" }} whileInView={{ y:"0%"}} transition={{ duration: 0.7,ease:"easeOut" }} className=" md:hidden flex w-[65vw] h-auto justify-center bg-clip-text bg-gradient-to-br from-[#5a10d9] via-indigo-400 to-indigo-900 items-center z-10">
        <h1 className="font-sans text-[1.7rem] leading-tight font-bold text-transparent">Lacking a proper  Schedule and <span className="text-transparent text-[2rem]">Procrastinate</span> a lot? </h1>

      </motion.div>
      </div>
      <div className="flex flex-col w-[full]  h-[25vh] justify-center">
      <motion.div initial={{ y:"50%" }} whileInView={{ y:"0%"}} transition={{ duration: 0.7,ease:"easeOut" }} className=" md:hidden  flex w-full h-auto justify-center bg-clip-text bg-gradient-to-br from-[#5a10d9] via-indigo-400 to-indigo-900 items-center z-10">
        <h1 className="font-sans w-screen  text-[1.7rem] text-right  leading-tight font-bold text-transparent">Which only <br /> adds on the <br /> <span className="text-transparent text-[2rem]">Anxiety!</span> </h1>

      </motion.div>
      </div>

      </div>



    </section></>
  );
};