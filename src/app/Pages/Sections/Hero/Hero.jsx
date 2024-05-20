import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import student from "../../../../app/assets/student.png";
import mentor from "../../../../app/assets/mentor.png";
import Image from "next/image";
import arrow from "../../../../app/assets/arrow.png";
import Star from "../../../../app/assets/star.png";
import left from "../../../../app/assets/left.png";
import right from "../../../../app/assets/right.png";
import Pencil from "../../../../app/assets/pencil.png";
import Book from "../../../../app/assets/book.png";
import vector from "../../../../app/assets/Vector.png";

const Home = () => {
  return (
    <>
      <section className="overflow-hidden bg-gradient flex flex-col">
        <div className="upper flex flex-col md:flex-row justify-between mt-[10rem] mb-[12rem] gap-5  px-8 md:px-20 h-auto">
          <div className=" 2xl:w-[700px] mb-8 md:mb-0">
            <Image src={mentor} alt="mentor" className="mentor" />
          </div>

          <div className="middle flex flex-col justify-center w-full md:w-auto">
            <Box className="relative">
              <div className="icons-container absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center pointer-events-none">
                <Image
                  src={arrow}
                  alt="areo"
                  className="arrow absolute lg:w-[60.86px] h-[58.52px]  top-[-15%] ml-12 md:w-10 lg:left-0 md:left-[-10%]"
                />
                <Image
                  src={Star}
                  alt="star"
                  className="star absolute lg:w-[31.56px]  md:w-10 h-[28px] top-[4%] left-[60%]"
                />
                <Image
                  alt="lineright"
                  src={left}
                  className="left relative lg:w-[95.56px]  h-[49.33px] top-[2rem] md:w-10 right-[32rem]"
                />
                <Image
                  alt="lineleft"
                  src={right}
                  className="right absolute lg:w-[95.56px]  h-[49.33px] top-[45%] md:w-10 lg:left-[110%] md:left-[95%]"
                />
                <Image
                  alt="pencil"
                  src={Pencil}
                  className="pencil relative top-[95%] md:w-8 lg:left-[-125%] md:left-[-20%]"
                />
                <Image
                  alt="book"
                  src={Book}
                  className="book absolute lg:w-[95.56px] h-[49.33px]  top-[22rem] right-[-22rem] md:w-10"
                />
              </div>

              <div className="full rounded-xl gap-10 bg-gradient-to-r bg-clip-text from-purple-600 to-[#5900d9] font-sans font-bold">
                <Heading
                  className="text-start"
                  fontWeight={"normal"}
                  fontFamily={"Urbanist"}
                  opacity={1}
                  zIndex={10}
                  color={"transparent"}
                  w={"auto"}
                  h={"auto"}
                  fontSize={{
                    base: "1.5rem",
                    sm: "2rem",
                    md: "2.5rem",
                    lg: "3.2rem",
                    xl: "4rem",
                    "2xl": "3rem",
                  }}
                >
                  <span className="hero-text">
                    Get your own
                  </span>
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
                  <span className="hero-text ">
                    to hold your Hand
                  </span>
                </Heading>
              </div>
            </Box>
            <h4 className="para-text text-[1.2rem] mt-[1rem]  md:text-[1.2rem] leading-tight text-black mr-2.5 font-sans font-semibold">
              Say goodbye to one-size-fits-all! We tailor study plans and
              resources to your individual learning style and goals.
            </h4>

            <div className="mt-[2rem]">
              <button className="hero-button bg-[#FFB35C] text-center font-normal flex items-center gap-[10px] text-[26px] shadow-md hover:shadow-none py-[0.8rem] px-[3rem] rounded-[50px] text-white mx-auto">
                Schedule a meeting
                <Image src={vector} alt="vector" />
              </button>
            </div>
          </div>

          <div className=" 2xl:w-[500px] h-auto">
            <Image src={student} alt="student" className="student" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
