import React from "react";
import {
  Box,
  Heading,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import student from "../../../../app/assets/student.png";
import mentor from "../../../../app/assets/mentor.png";
import Image from "next/image";
import Aero from "../../../../app/assets/areo.svg";
import Star from "../../../../app/assets/star.svg";
import lineright from "../../../../app/assets/Group.png";
import lineleft from "../../../../app/assets/lineleft.svg";
import Pencil from "../../../../app/assets/pencil.png";
import Book from "../../../../app/assets/book.svg";
import vector from "../../../../app/assets/Vector.png";


const Home = () => {
  return (
    <>
      <section className="overflow-hidden bg-gradient hidden md:flex flex-col ">
      <div className="hidden md:flex justify-between mt-[2rem] gap-5 mb-[3rem] px-[5rem] py-[2rem] h-auto">
          <div className=" md:w-[30%] lg:w-[35%] 2xl:w-[700px] ">
            <Image src={mentor} alt="mentor" />
          </div>

          <div className="flex flex-col  justify-center">
            <Box className="relative">
              <div className="icons-container absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center pointer-events-none">
                {" "}
                {/* Container for icons */}
                <Image
                  src={Aero}
                  alt="areao"
                  className="absolute lg:w-[60.86px] h-[58.52px] opacity-[0.3] top-[-15%]  ml-[3rem] md:w-[40px] lg:left-0 md:left-[-10%] gap-0"
                />
                <Image
                  src={Star}
                  alt="star"
                  className="absolute lg:w-[31.56px] opacity-[0.4] md:w-[40px] h-[28px] top-[4%] left-[70%] gap-0"
                />
                <Image
                alt="lineright"
                  src={lineright}
                  className="absolute lg:w-[95.56px] opacity-[0.3]  h-[49.33px] top-[40%] md:w-[40px] right-[58rem] gap-0"
                />
                <Image
                alt="lineleft"
                  src={lineleft}
                  className="absolute lg:w-[95.56px] opacity-[0.3] h-[49.33px] top-[40%] md:w-[40px] lg:left-[100%] md:left-[95%]   gap-0"
                />
                <Image
                alt="pencil"
                  src={Pencil}
                  className="relative top-[95%]  md:w-[30px] lg:left-[-120%] md:left-[-20%] gap-0"
                />
                <Image
                alt="book"
                  src={Book}
                  className="absolute lg:w-[95.56px] h-[49.33px] opacity-[0.3] top-[85%] right-[-38%] md:w-[40px] gap-0"
                />
              </div>

              <div className="full rounded-xl bg-gradient-to-r bg-clip-text from-purple-600 to-[#5900d9] font-sans  font-bold">
                <Heading
                  className="text-start "
                  fontWeight={"normal"}
                  fontFamily={"Urbanist"}
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
                    "2xl": "3rem",
                  }}
                >
                  <span className="md:text-[2rem] lg:text-[5rem]">
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
                  <span className="md:text-[3rem] lg:text-[4.5rem]">
                    to hold your Hand
                  </span>
                </Heading>{" "}
              </div>
            </Box>
            <h4 className="text-[1.2rem] leading-tightn text-[#00000] mr-[10px]  font-sans font-semibold  ">
              {" "}
              Say goodbye to one-size-fits-all! We tailor study plans and
              resources to your individual learning style and goals.{" "}
            </h4>

            <div className="flex flex-col justify-center items-end text-center">
               <div>
                <button className="bg-[#FFB35C] font-normal flex items-center gap-[10px] text-[26px] shadow-md hover:shadow-none py-[0.8rem] px-[3rem] rounded-[50px]  text-white ">
                  Schedule a meeting
                  <Image  src={vector} alt="vector" />
                </button>
              </div>
            </div>
          </div>

          <div className="md:w-[35%] lg:w-[40%] 2xl:w-[500px] h-auto   ">
            <Image src={student} alt="student" />
          </div>
        </div>

      
       
      </section>

      
    </>
  );
};

export default Home;
