import React from "react";
import {Box,Center ,Spacer,Stack,Flex ,Text,Heading,useColorModeValue , extendTheme, Button} from "@chakra-ui/react"
import Typewriter from 'typewriter-effect';
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import backimg from "../../../../imgs/backimg1.png";
import student from "../../../../imgs/student_hero.png";
import mentor from "../../../../imgs/mentor_hero.png"
import Image from "next/image";

import { Icon } from "@chakra-ui/react";


const Home = () => {
  return (
    <>
        
    <section className="overflow-hidden hidden md:flex flex-col h-[100vh]" >

       <div className="hidden md:flex overflow-hidden ml-[10vw] w-[90vw] my-[10vh] h-auto">
     
          <div className="w-[30%] my-[5vh]">
            <Image src={mentor} />
          </div>

          <div className="flex flex-col w-[50%] gap-5 justify-center">   

          <div className="full rounded-xl bg-gradient-to-r bg-clip-text from-purple-600 to-[#5900d9] font-sans  font-bold"
            >
            <Heading fontWeight={"bold"} fontFamily={"onest"} opacity={1} zIndex={10}  color={"transparent"} w={"auto"} h={"auto"}   fontSize={{base:"2.5rem",sm:"2.5rem",md:"3rem",lg:"3.2rem",xl:"4rem" }}>Get your own <Typewriter
  options={{
    strings: ["Bade Bhaiya","Badi Didi"],
    autoStart: true,
    loop: true,
    cursor: "|",
  }}
  
/> to hold your hand
           
            </Heading>  </div>
            
            <div>
            < h4 className="text-[1rem] leading-tight font-sans font-semibold  "> Say goodbye to one-size-fits-all! We tailor study plans and resources to your individual learning style and goals. </h4>
            <Button  bgColor={"#ffb35c"} size={"lg"} ml={"60%"} rounded={"full"} color={"white"} fontWeight={"semibold"} _hover={{bgColor:"#f5ebff",color:"black"}} mt={5}><Link href="/about-us">Learn More</Link></Button>
            </div>
  </div>
          <div className=" absolute right-[7vw] w-[20%] h-auto ">
          <Image src={student} alt="student" />
        </div>
      
        </div>
        

        {/* phone */}
        </section><section className="md:hidden h-[60vh]">

        <div className="flex flex-col md:hidden overflow-hidden ml-[5vw] w-[95vw] my-[5vh] h-auto">
        <div className="flex w-[80%] h-auto">
        <div className="full mt-10 rounded-xl bg-gradient-to-r bg-clip-text from-purple-600 to-[#5900d9] font-sans  font-bold"
            >
            <Heading fontWeight={"bold"} fontFamily={"onest"} opacity={1} zIndex={10}  color={"transparent"} w={"auto"} h={"auto"}   fontSize={{base:"2rem",sm:"2.5rem",md:"3rem",lg:"3.2rem",xl:"4rem" }}>Get your own <Typewriter
  options={{
    strings: ["Bade Bhaiya","Badi Didi"],
    autoStart: true,
    loop: true,
    cursor: "|",
  }}
  
/> to hold your hand
           
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
     
       
    </section>
    
   
    </>
  );
};

export default Home;
