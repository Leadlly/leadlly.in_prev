import { Heading } from '@chakra-ui/react';
import solution from "../../../assets/solution.png";
import React from 'react';
import Image from 'next/image';
import vector from "../../../assets/Vector.png";

const Solutions = () => {
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
            <span className="text-[2rem] lg:text-[35px]">
              Yes, we have
            </span>
            <br />
            <span className="gradient-text">
              Solution!
            </span>
          </Heading>
        </div>
        <div className="flex justify-center items-center h-full w-full mt-4 md:mt-8">
          <Image
            src={solution}
            alt="solution"
            className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4"
          />
        </div>
        <div className="text-center w-full mt-8">
          <button className="bg-[#FFB35C] text-center font-normal flex items-center gap-2 text-[16px] sm:text-[20px] md:text-[24px] lg:text-[26px] shadow-md hover:shadow-none py-2 px-8 rounded-full text-white mx-auto">
            Know More
            <Image src={vector} alt="vector" />
          </button>
        </div>
      </section>
    </>
  );
}

export default Solutions;
