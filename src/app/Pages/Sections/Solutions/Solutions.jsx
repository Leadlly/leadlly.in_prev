import { Heading } from '@chakra-ui/react';
import solution from "../../../assets/solution.png";
import React from 'react';
import Image from 'next/image';
import vector from "../../../assets/Vector.png";

const Solutions = () => {
  return (
    <>
      <section className="overflow-hidden bg-gradient relative flex flex-col items-center py-5">
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
              md: "80px",
              lg: "120px",
              xl: "4rem",
            }}
          >
            <span className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem]">
              Yes, we have
            </span>
            <br />
            <span className="gradient-text text-[3rem] md:text-[80px] lg:text-[100px]">
              Solution!
            </span>
          </Heading>
        </div>
        <div className="flex justify-center items-center h-full w-full mt-4 md:mx-0 mx-[20px] md:mt-8">
          <Image
            src={solution}
            alt="solution"
            className="md:w-[70%] w-[90%]"
          />
        </div>
        <div className="mt-[2rem] flex justify-end items-end">
              <button className="text-center bg-[#FFB35C] font-normal flex items-center gap-[10px] text-[16px] lg:text-[22px] shadow-md hover:shadow-none py-[0.8rem] px-[40px] rounded-[50px] text-white mx-auto">
               Know more
                <Image src={vector} className="lg:w-[25px] w-[18px]" alt="vector" />
              </button>
          </div>
      </section>
    </>
  );
}

export default Solutions;
