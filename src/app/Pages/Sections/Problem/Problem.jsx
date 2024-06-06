import { Heading } from "@chakra-ui/react";
import problems from "../../../assets/problems.png";
import React from "react";
import Image from "next/image";

export default function BouncyCardsFeatures() {
  return (
    <>
      <section className="overflow-hidden bg-gradient relative flex flex-col items-center py-5">
        <div className="full rounded-xl bg-gradient-to-r bg-clip-text from-purple-600 to-[#5900d9] font-sans font-bold">
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
              base: "1.5rem",
              sm: "2rem",
              md: "80px",
              lg: "120px",
              xl: "3.5rem",
            }}
          >
            <span className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem]">
              Do you have
            </span>
            <br />
            <span className="gradient-text text-[3rem] md:text-[80px] lg:text-[100px]">
              Problems?
            </span>
          </Heading>
        </div>
        <div className="flex justify-center items-center h-full  ml-4 mr-4 mt-3 md:mt-8">
          <Image
            src={problems}
            alt="problem"
            className="md:w-[60%]"
          />
        </div>
      </section>
    </>
  );
}
