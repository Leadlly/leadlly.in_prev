import { Heading } from "@chakra-ui/react";
import problems from "../../../assets/problems.png";
import React from "react";
import Image from "next/image";

export default function BouncyCardsFeatures() {
  return (
    <>
      <section className="overflow-hidden bg-gradient flex flex-col items-center py-8">
        <div className="full rounded-xl bg-gradient-to-r bg-clip-text from-purple-600 to-[#5900d9] font-sans font-bold mb-8">
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
              md: "2.5rem",
              lg: "3rem",
              xl: "3.5rem",
            }}
          >
            <span className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem]">
              Do you have
            </span>
            <br />
            <span className="gradient-text">
              Problems?
            </span>
          </Heading>
        </div>
        <div className="flex justify-center items-center h-full w-full mt-4 md:mt-8">
          <Image
            src={problems}
            alt="problem"
            className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4"
          />
        </div>
      </section>
    </>
  );
}
