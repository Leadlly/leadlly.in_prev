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
      <section className="overflow-hidden  bg-gradient flex flex-col" >
        
        <div className="hidden md:flex flex-col md:flex-row justify-between mt-[10rem] mb-[12rem] gap-5 px-8 md:px-20 h-auto">
          <div className="2xl:w-[700px] mb-8 md:mb-0">
            <Image src={mentor} alt="mentor" />
          </div>

          <div className="middle flex flex-col md:ml-8 justify-center w-full md:w-auto">
            <Box className="relative">
            <div className="icons-container absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center pointer-events-none">
                <Image
                  src={arrow}
                  alt="arrow"
                  className="absolute lg:w-[60.86px] h-[58.52px] top-[-4rem]  left-[2rem]  sm:left-[-5%] md:w-8 lg:left-0 md:left-[-10%] "
                />
                <Image
                  src={Star}
                  alt="star"
                  className="absolute lg:w-[31.56px] md:w-10 h-[28px] top-[4%] md:top-[-1rem] left-[60%] md:left-[40%] sm:left-[50%]"
                />
                <Image
                  alt="lineright"
                  src={left}
                  className="relative lg:w-[95.56px] h-[49.33px] top-[2rem] md:w-10  md:right-[26rem] sm:right-[8rem] "
                />
                <Image
                  alt="lineleft"
                  src={right}
                  className="absolute lg:w-[95.56px] h-[49.33px] top-[0rem] md:w-8 lg:left-[110%] md:left-[95%] sm:left-[-10%]  sm:top-[2rem]"
                />
                <Image
                  alt="pencil"
                  src={Pencil}
                  className="absolute lg:w-[45.56px] top-[25rem] md:w-6 lg:left-[-40rem] md:left-[-55%] md:top-[24rem]  sm:right-[-3rem]"
                />
                <Image
                  alt="book"
                  src={Book}
                  className="absolute lg:w-[95.56px] h-[49.33px] top-[12rem] md:right-[-22rem] md:w-8 sm:right-[-6rem]"
                />
              </div>


              <div className="full rounded-xl gap-10 bg-gradient-to-r bg-clip-text from-purple-600 to-[#5900d9] font-sans font-bold">
                <Heading
                  className="text-start"
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
                    md: "1.5rem",
                    lg: "3.2rem",
                    xl: "4rem",
                    "2xl": "3rem",
                  }}
                >
                  <span>Get your own</span>
                  <br />
                  <span className="gradient-text ">
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
                  <span>to hold your Hand</span>
                </Heading>
              </div>
            </Box>
            <h4 className="text-[1.2rem] mt-[1rem] md:text-[1rem] leading-tight text-black mr-2.5 font-sans font-semibold">
              Say goodbye to one-size-fits-all! We tailor study plans and resources to your individual learning style and goals.
            </h4>

            <div className="mt-[2rem] ml-[2rem]">
              <button className="hero-button bg-[#FFB35C] text-center font-normal flex items-center gap-[10px] text-[26px] shadow-md hover:shadow-none py-[0.8rem] px-[3rem] rounded-[50px] text-white mx-auto">
                Schedule a meeting
                <Image src={vector} alt="vector" />
              </button>
            </div>
          </div>

          <div className="2xl:w-[500px] h-auto">
            <Image src={student} alt="student" />
          </div>
        </div>

        {/* Mobile Section */}
        <div className="md:hidden h-[60vh]">
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
              <div className="absolute w-[50%]">
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
