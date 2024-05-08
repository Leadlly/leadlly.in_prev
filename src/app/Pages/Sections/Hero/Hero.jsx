import React from "react";
import {Box,Center ,Spacer,Stack,Flex ,Text,Heading,useColorModeValue , extendTheme, Button} from "@chakra-ui/react"
import Typewriter from 'typewriter-effect';
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import backimg from "../../../../imgs/backimg1.png";
import student from "../../../../imgs/student.svg";
import mentor from "../../../../imgs/mentor.svg"
import Image from "next/image";
import Bhayadiag from "../../../../imgs/bhayaDiag.png"
import Aero from "../../../../imgs/areo.svg"
import Star from "../../../../imgs/star.svg"
import lineright from "../../../../imgs/lineright.svg"
import lineleft from "../../../../imgs/lineleft.svg"
import Pencil from "../../../../imgs/pencil.svg"
import Book from "../../../../imgs/book.svg"
import emojystar from "../../../../imgs/emojystar.svg"

import { Icon } from "@chakra-ui/react";


const Home = () => {
  return (
    <>
         
    <section className="overflow-hidden bg-gradient hidden md:flex flex-col" >
    <div className="flex justify-center 2xl:items-center 2xl:ml-[0px] ml-[84px] items-center">
              <button className="bg-[#FFB35C] px-[10px] py-[7px] gap-10 rounded-[5px] font-normal text-center text-[14px] text-white mt-[62px]">Never Stop Learing</button>
    </div>
       
       <div className="hidden md:flex justify-between gap-10 ml-[84px] w-[90vw] mb-[10vh] h-auto">
          <div className="md:w-[50%] lg:w-[35%] 2xl:w-[600px] my-[5vh]">
            <Image src={mentor} />
          </div>
      
          <div className="flex flex-col gap-5 justify-center">  
          <Box className="relative">
          <div className="icons-container absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center pointer-events-none"> {/* Container for icons */}
              <Image src={Aero} className="absolute lg:w-[68.86px] h-[58.52px] top-[-2%] md:w-[40px] lg:left-0 md:left-[-10%] gap-0"/>
              <Image src={Star} alt="star" className="absolute lg:w-[31.56px] md:w-[40px] h-[28px] top-[0px] left-[84%] gap-0" />
              <Image src={lineright} className="absolute lg:w-[95.56px] h-[49.33px] top-[50%] md:w-[40px] left-[-10%] gap-0"/>
              <Image src={lineleft} className="absolute lg:w-[95.56px] h-[49.33px] top-[30%] md:w-[40px] lg:left-[90%] md:left-[95%]   gap-0"/>
              <Image src={Pencil} className="absolute lg:w-[95.56px] h-[49.33px] top-[120%] md:w-[30px] lg:left-[-3%] md:left-[-20%] gap-0"/>
              <Image src={Book} className="absolute lg:w-[95.56px] h-[49.33px] top-[100%] left-[100%] md:w-[40px] gap-0"/>
            </div>
           
          <div className="full rounded-xl bg-gradient-to-r bg-clip-text from-purple-600 to-[#5900d9] font-sans  font-bold"
            >
            <Heading className="text-center" fontWeight={"normal"} fontFamily={"Urbanist"} opacity={1} zIndex={10}  color={"transparent"} w={"auto"} h={"auto"}  fontSize={{base:"2.5rem",sm:"2.5rem",md:"3rem",lg:"3.2rem",xl:"4rem",'2xl': "5.5rem" }}>
             <span className="md:text-[1.9rem] lg:text-[3.2rem]">Get your own</span>
            <br />
            <span className="gradient-text">
              <Typewriter 
               options={{
                
                 strings: ["Bade Bhaiya","Badi Didi"],
                 autoStart: true,
                 loop: true,
                 cursor: "|",
                 
               }}
            /></span>
            <br/><span className="md:text-[1.9rem] lg:text-[3.2rem]">to hold your Hand</span>
           
            </Heading>  </div>
          </Box>
          
            
            <div className="flex flex-col justify-center items-center text-center">
            < h4 className="lg:text-[1rem] md:text-[0.8rem] md:font-medium leading-tight text-[#7F7F7F] lg:max-w-[75%] text-center font-sans font-semibold  "> Say goodbye to one-size-fits-all! We tailor study plans and resources to your individual learning style and goals. </h4>
            <div>
              <button className="bg-[#FFB35C] font-normal text-[14px] shadow-md hover:shadow-none py-[14px] px-[23px] gap-0 rounded-[8px] text-white mt-[62px]">Request Now</button>
            </div>
            </div>
           </div>

          <div className="md:w-[50%] lg:w-[35%] 2xl:w-[600px] h-auto ">
          <Image src={student} alt="student" />
        </div>
      
        </div>
        
        <div className="bg-[#5900D9] text-white mb-[17.8%]">
      <div className="lg:mx-[25%] md:mx-[15%] py-[2.9%] flex justify-between items-center">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-Urbanist md:text-[32px] lg:text-[46.26px] font-semibold">4.9/5</h1>
        <p className="lg:text-[22px] md:text-[18px]  items-center font-normal mt-[15px] flex">On <span><Image className="w-[20px]" src={emojystar}/> </span>Google</p>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
      <h1 className="lg:text-[46.26px] md:text-[32px] font-semibold">+10,000</h1>
        <p className="lg:text-[22px]   md:text-[18px] font-normal mt-[15px]">Student Enrolled</p>
      </div>
      <div className="flex flex-col  items-center justify-center text-center">
      <h1 className="lg:text-[46.26px] md:text-[32px] font-semibold">65,000</h1>
        <p className="lg:text-[22px]   md:text-[18px]  font-normal mt-[15px]">Hours taught</p>
      </div>
      </div>
      
    </div>
        {/* phone */}
        </section>
        
        
   <section className="md:hidden bg-gradient]">

        <div className="flex flex-col md:hidden overflow-hidden ml-[5vw] w-[95vw] mb-[15vh] h-auto">
        <div className="flex w-[80%] h-auto">
        <div className="full mt-10 rounded-xl bg-gradient-to-r bg-clip-text from-purple-600 to-[#5900d9] font-sans  font-bold"
            >
            <Heading className="" fontWeight={"normal"} fontFamily={"Urbanist"} opacity={1} zIndex={10}  color={"transparent"} w={"auto"} h={"auto"}  fontSize={{base:"2.5rem",sm:"2.5rem",md:"3rem",lg:"3.2rem",xl:"4rem",'2xl': "5.5rem" }}>Get your own
            <br/>
            <span className="text-gradient">
            <Typewriter
              options={{
                strings: ["Bade Bhaiya","Badi Didi"],
                autoStart: true,
                loop: true,
                cursor: "|",
              }}
  
            /></span> <br/>
             to hold your hand
           
            </Heading>  </div>
            <div className=" absolute right-[5vw] top-[16vh] w-[45%] h-auto ">
          <Image src={student} alt="student" />
        </div>

        </div>
        <div className="flex w-full py-5">
        <div className="absolute w-[50%] ">
            <Image src={mentor} ></Image>
          </div>

        <div className="w-[55%] mt-[10vh] ml-[42%]">
        
      
        < h4 className="text-[0.8rem] leading-tight py-4 font-sans font-semibold  "> Say goodbye to one-size-fits-all! We tailor study plans and resources to your individual learning style and goals. </h4>
        
         <Button  bgColor={"#ffb35c"} ml={16} rounded={"full"} color={"white"} fontWeight={"semibold"} >
         <Link href="/about-us">Learn More</Link>
         </Button>
        </div>
        </div>
        </div>
     
        <div className="bg-[#5900D9] text-white mb-[17.8%]">
      <div className="mx-[10%] py-[2.9%] flex justify-between items-center">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-Urbanist text-[24px] font-semibold">4.9/5</h1>
        <p className="text-[14px] items-center font-normal mt-[15px] flex">On <span><Image className="w-[20px]" src={emojystar}/> </span>Google</p>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-[24px] font-semibold">+10,000</h1>
        <p className="text-[14px]  font-normal mt-[15px]">Student Enrolled</p>
      </div>
      <div className="flex flex-col  items-center justify-center text-center">
      <h1 className="text-[24px] font-semibold">65,000</h1>
        <p className="text-[14px]  font-normal mt-[15px]">Hours taught</p>
      </div>
      </div>
      
    </div>
    </section>

    
    </>
  );
};

export default Home;
