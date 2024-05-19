import { Heading } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import vector from "../../../assets/Vector.png";

export const Contact = () => {
  return (
    <section className="overflow-hidden bg-gradient flex flex-col items-center py-10">
    <div className="rounded-xl bg-gradient-to-r mt-[3rem] bg-clip-text from-purple-600 to-[#5900d9] font-sans mt-20 font-bold">
       <Heading
          className="text-center font-normal font-Urbanist"
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
          <span className="para sm:text-1xl md:text-2xl lg:text-3xl">Want to know more?</span>
          <br />
          <span className="heading gradient-text">Contact Us</span>
        </Heading>
      </div>
      <div className="flex flex-col md:flex-row items-center mr-[2rem] justify-evenly w-full px-4 md:px-20 py-10 rounded-xl">
        <div className="flex flex-col items-start justify-between w-full md:w-2/3 lg:w-1/2 p-5">
          <div className=" card bg-[#eee4fb] rounded-2xl p-6 max-w-xl ml-[4.5rem] w-full h-40vh flex flex-col items-start">
            <h2 className="text-2xl font-bold pb-4">Contact Us</h2>
            <div className="w-1/2 h-1 bg-[#8000ff] mb-4"></div>
            <p className="text-gray-700 text-start mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Integer
              semper, lacus ac dignissim efficitur, ante orci varius turpis, non
              accumsan urna lorem vitae velit.
            </p>
            <button className="integer-button border-2 text-black rounded-lg">
              Integer
            </button>
          </div>
          <div className="contact mt-[1rem] ml-[4.5rem]">
            <button className="contact-button text-white  flex items-center ">
              CONTACT US
              <Image src={vector} alt="vector" className="ml-2" />
            </button>
          </div>
        </div>
        <div className="card-container">
          <div className="horizontal-bar"></div>
          <div className=" card-content">
         
          </div>
        </div>
      </div>
    </section>
  );
};
