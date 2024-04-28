import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import smily from "../../imgs/smily.png"
import logo from "../../imgs/logos/logo1.png"
import Image from "next/image";
export default function Footer(){

    

    return(
        <div className="flex  gap-2  bg-purple-100  ">
            <div className="flex  flex-col w-[30vw] h-[40vh] justify-start gap-[5%] ">

            <div className="inline-block  ml-[3vw] mt-3 ">
                <Image height={56} width={206} className="md:h-14" src={logo} alt="" /></div>
            <div className=" mx-auto md:w-[30vw] md:mx-auto md:ml-7 w-[55vw] pl-2 "><p className="text-purple-950 text-left text-[0.8rem] md:text-[1rem] ">At Leadlly, we believe every student has the potential to excel. We're a passionate team dedicated to helping school-going students reach their academic goals through a unique blend of technology and personalized mentorship.</p></div>
            </div>
            
            <div className="flex flex-col ml-[25vw] w-[40vw] md:w-[40vw] h-full ">
            <div className="md:mx-auto  text-[#5a10d9]"><h1 className="mt-5 leading-tight font-lato mb-2 text-[1.2rem]  md:text-[1.6rem] font-bold ">Important Links </h1>
            <h2 className="text-[0.8rem] md:text-[1rem]">
            <a href="https://forms.gle/rGuHFN2JwULDVVGAA">Contact Us</a>
            <br/> <Link href="/">Become a Mentor</Link>
            <br/> <Link href="/About">About Us</Link>
            <br/> <a href="https://question-bank-web-flame.vercel.app" target="_blank">Question Bank</a>
            
            </h2> 
            </div>

            <div className="mx-auto"><h1 className="mt-[10%]  font-lato  text-[#5a10d9] text-[1.2rem] md:text-[1.6rem] font-bold ">Follow us <br /></h1></div>

            <div className="flex  justify-center md:gap-2 mx-auto  bg-purple-100  ">
            
            <div className="inline-block  my-auto cursor-pointer "><a ><FaInstagram className="md:size-8 size-5"/></a></div>
            <div className="inline-block my-auto cursor-pointer"><a><FaLinkedin className="md:size-8 size-5"/></a></div>
            <div className="inline-block  my-auto cursor-pointer"><a><FaSquareXTwitter className="md:size-8 size-5"/></a></div>
            <div className="inline-block  my-auto cursor-pointer"><a> <FaYoutube className="md:size-8 size-5"/></a></div>
           </div></div>

          <div className=" hidden md:flex my-auto ml-[20vw] h-full "> <Image src={smily} alt="" className="my-auto"/></div>
        </div>
    )

}

