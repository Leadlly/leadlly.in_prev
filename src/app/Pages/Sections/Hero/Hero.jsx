import React from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import student from "../../../../app/assets/student.png";
import mentor from "../../../../app/assets/mentor.png";
import arrow from "../../../../app/assets/arrow.png";
import Star from "../../../../app/assets/star.png";
import left from "../../../../app/assets/left.png";
import right from "../../../../app/assets/right.png";
import Pencil from "../../../../app/assets/pencil.png";
import Book from "../../../../app/assets/book.png";
import vector from "../../../../app/assets/Vector.png";

const Hero = () => {
  return (
    <>
      <section className="bg-gradient relative flex flex-col">
        {/* Desktop and Tablet Section */}
        <div className="hidden md:flex flex-col md:flex-row justify-between mt-[7%] md:mb-[10%] lg:mb-[10%] lg:gap-5 px-8 lg:px-20 h-auto">
          <div className="2xl:w-[700px] lg:w-[60%] mb-8 md:mb-0">
            <Image src={mentor} alt="mentor" />
          </div>
          
          <div className="">
          <div className="middle flex flex-col md:ml-8 w-full md:w-auto">
            <Box className="relative lg:block flex flex-col justify-center items-center md:text-center">
            <div className="icons-container absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center pointer-events-none">
                <Image
                  src={arrow}
                  alt="arrow"
                  className="absolute lg:w-[60.86px] lg:h-[58.52px] top-[-10%] lg:top-[-4rem] md:w-10 md:h-[38px] left-[8%]  lg:left-[14%]"
                />
                <Image
                  src={Star}
                  alt="star"
                  className="absolute lg:w-[31.56px] md:w-7 h-[28px] top-[3%] lg:left-[95%] left-[90%]"
                />
                <Image
                  alt="lineright"
                  src={left}
                  className="relative lg:w-[20%] lg:top-[0%] top-[18%] md:w-16 left-[-55%] lg:left-[-63%]"
                />
                <Image
                  alt="lineleft"
                  src={right}
                  className="absolute lg:w-[95.56px] top-[30%] left-[95%] md:w-14 lg:left-[105%]"
                />
                <Image
                  alt="pencil"
                  src={Pencil}
                  className="absolute lg:w-[45.56px] lg:bottom-[-10%] md:bottom-[-50%] md:left-[-95%] lg:left-[-90%] md:w-6"
                />
                <Image
                  alt="book"
                  src={Book}
                  className="absolute lg:w-[46.56px] lg:block hidden lg:top-[105%] lg:right-[-54%] md:w-8"
                />
              </div>


              <div className="full w-[300px] md:text-center lg:w-[478px] rounded-xl gap-10 bg-gradient-to-r bg-clip-text from-purple-600 to-[#5900d9] font-sans font-bold">
                <Heading
                  className="lg:text-start"
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
                    md: "1.8rem",
                    lg: "2.7rem",
                    xl: "3.4rem",
                    "2xl": "4rem",
                  }}
                >
                  <span className="md:text-center lg:text-left">Get your own</span>
                  <br />
                  <span className="gradient-text xl:text-[80px] md:text-center lg:text-left lg:text-[75px] md:text-[48px]">
                    <Typewriter 
                      options={{
                        strings: ["Bade Bhaiya", "Badi Didi"],
                        autoStart: true,
                        loop: true,
                        cursor: "|",
                      }}
                    />
                  </span>
                  <br />
                  <span className="max-w-[70%] md:text-center lg:text-left">to hold your Hand</span>
                </Heading>
                <h4 className="lg:text-[1.2rem] md:text-[14px] md:font-medium md:text-center lg:text-left mt-[1rem]  leading-tight text-black mr-2.5 font-sans font-semibold">
              Say goodbye to one-size-fits-all! We tailor study plans and resources to your individual learning style and goals.
            </h4>
              </div>
            </Box>
            <div className="mt-[2rem] flex justify-end items-end">
              <button className="text-center bg-[#FFB35C] font-normal flex items-center gap-[10px] text-[16px] lg:text-[22px] shadow-md hover:shadow-none py-[0.8rem] px-[40px] rounded-[50px] text-white mx-auto">
               Contact us
                <Image src={vector} className="lg:w-[25px] w-[18px]" alt="vector" />
              </button>
          </div>
            </div>
          </div>

          <div className="2xl:w-[500px] lg:w-[60%] h-auto">
            <Image src={student} alt="student" />
          </div>
        </div>

        {/* Mobile Section */}
        <div className="relative hero mb-[8%] md:hidden">
          <div className="flex flex-col ml-[5vw] w-[95vw] my-[5vh] h-auto">
            <div className="flex w-[80%] h-auto">
              <div className="mt-10 rounded-xl bg-gradient-to-r bg-clip-text from-purple-600 to-[#5900d9] font-sans font-bold">
              <div className=" relative top-0 left-0 right-0 bottom-0 flex justify-center items-center pointer-events-none">
              <Image src={arrow} alt="arrow" className="absolute top-[-2rem] left-[0.8rem] w-8 h-8 " />
              <Image src={Star} alt="star" className="absolute top-[0.5rem] left-[14rem] w-8 h-8 " />
              <Image alt="lineright" src={left} className="absolute top-[12rem] left-[12rem] w-12 h-12 " />
              <Image alt="lineleft" src={right} className="absolute top-[2rem] left-[10rem] w-12 h-12" />
              <Image alt="pencil" src={Pencil} className="absolute top-[24rem] left-[0rem] w-8 h-8 " />
              <Image alt="book" src={Book} className="absolute top-[9rem] left-[20rem] w-8 h-8 " />
            </div>

                <Heading
                  fontWeight="bold"
                  fontFamily="onest"
                  opacity={1}
                  zIndex={10}
                  color="transparent"
                  w="auto"
                  h="auto"
                  fontSize={{
                    base: "2rem",
                    sm: "2.5rem",
                    md: "3rem",
                    lg: "3.2rem",
                    xl: "4rem",
                  }}
                >
                  Get your own
                  <br />
                  <span className="gradient-text">
                    <Typewriter
                      options={{
                        strings: ["Bade Bhaiya", "Badi Didi"],
                        autoStart: true,
                        loop: true,
                        cursor: "|",
                      }}
                    />
                  </span>
                  <br />
                  to hold your hand
                </Heading>
              </div>
              <div className="absolute right-[5vw] top-[16vh] w-[45%] h-auto">
                <Image src={student} alt="student" />
              </div>
            </div>
            <div className="flex w-full py-5">
              <div className="absolute ima w-[50%]">
                <Image src={mentor} alt="mentor" />
              </div>

              <div className="w-[55%] mt-[10vh] ml-[42%]">
                <h4 className="text-[0.8rem] leading-tight py-4 font-sans font-semibold">
                  Say goodbye to one-size-fits-all! We tailor study plans and resources to your individual learning style and goals.
                </h4>

                <Button bgColor="#ffb35c" ml={0} rounded="full" color="white" fontWeight="semibold">
                  Schedulle a meeting 
                  <Image src={vector} alt="vector" className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
