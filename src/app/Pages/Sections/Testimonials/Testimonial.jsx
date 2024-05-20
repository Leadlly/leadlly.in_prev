import { Heading } from "@chakra-ui/react";
import React from "react";
import Carousel from "./Carousel";
// import vector from "../../../assets/Vector.png";
// import Image from "next/image";

const ComponentName = () => {
  return (
    <>
      <section className="overflow-hidden bg-gradient flex flex-col items-center py-8">
        <div className="full rounded-xl bg-gradient-to-r bg-clip-text from-purple-600 to-[#5900d9] font-sans font-bold mb-8 mt-12">
          <Heading
            className="text-center"
            fontWeight="normal"
            fontFamily="Urbanist"
            opacity={1}
            zIndex={10}
            color="transparent"
            w="auto"
            h="auto"
            fontSize={{
              base: "2.5rem",
              sm: "2.5rem",
              md: "3rem",
              lg: "3.2rem",
              xl: "4rem",
            }}
          >
            <span className="para text-[2rem] lg:text-[35px]">
              Let's hear from
            </span>
            <br />
            <span className="heading gradient-text text-[3rem] md:text-[4rem] lg:text-[5rem]">
              Our Learners
            </span>
          </Heading>
        </div>
        <div className="w-full mb-[7rem]">
          <Carousel />
        </div>
        {/* <div className="contact text-center w-full mt-[3rem]">
          <button className="contact-button bg-[#FFB35C] text-center font-normal flex items-center gap-[10px] text-[26px] shadow-md hover:shadow-none py-[0.8rem] px-[3rem] rounded-[50px] text-white mx-auto">
            Discover more
            <Image src={vector} alt="vector" />
          </button>
        </div> */}
      </section>
    </>
  );
};
export default ComponentName;
