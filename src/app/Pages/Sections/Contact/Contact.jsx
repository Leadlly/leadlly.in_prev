import { Heading } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import vector from "../../../assets/Vector.png";
import qrcode from "../../../../imgs/qrcode.png"

export const Contact = () => {
  return (
    <section className="overflow-hidden bg-gradient relative flex flex-col items-center py-10">
    <div className="rounded-xl mb-[30px] bg-gradient-to-r  bg-clip-text from-purple-600 to-[#5900d9] font-sans font-bold">
       <Heading
          className="text-center"
          fontWeight="normal"
          fontFamily="Urbanist"
          opacity={1}
          zIndex={10}
          color={"transparent"}
          w={"auto"}
          h={"auto"}
          fontSize={{
            base: "2.5rem",
            sm: "2.5rem",
            md: "3rem",
            lg: "3.2rem",
            xl: "4rem",
          }}
        >
          <span className="para text-[2rem] lg:text-[35px]">Want to know more?</span>
          <br />
          <span className="gradient-text text-[3rem] md:text-[80px] lg:text-[100px]">Contact Us</span>
        </Heading>
      </div>

      <div className="border-purple-400 border-2 md:mx-0 mx-[15px] shadow-md px-[35px] py-[30px] md:py-[42px] bg-[#CFB0FA] rounded-xl">
        <div className="md:flex md:items-center md:gap-4">
          <div className="lg:w-[544px] md:w-[60%]">
          <form action="#" method="post">
          <div className="mb-[12px]">
            <input
              className="shadow-md border-[#CFB0FA] rounded-[15px] w-full py-[14px] px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name*"
              required
            />
          </div>
          <div className="mb-4">
            
            <input
              className="shadow-md border-[#CFB0FA] rounded-[15px] border  w-full py-[14px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            
            <input
              className="shadow-md border-[#CFB0FA] rounded-[15px] border  w-full py-2 md:py-[14px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div className="mb-4">
            
            <textarea
              className="shadow-md appearance-none border border-[#CFB0FA] rounded-[15px] w-full py-[14px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
        </form>
          </div>
          <div className="underline hidden md:block mx-[2%] md:rotate-0 rotate-90"></div>
          <div>
            <Image
            src={qrcode}
            alt="qrcode"/>
          </div>
        </div>
      </div>

      <div className="mt-[2rem] flex justify-end items-end">
              <button className="text-center bg-[#FFB35C] font-normal flex items-center gap-[10px] text-[16px] lg:text-[22px] shadow-md hover:shadow-none py-[0.8rem] px-[40px] rounded-[50px] text-white mx-auto">
               Send us
                <Image src={vector} className="lg:w-[25px] w-[18px]" alt="vector" />
              </button>
          </div>

    </section>
  );
};
