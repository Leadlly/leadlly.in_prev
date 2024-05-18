import React from "react";
import {
  Box,
  Center,
  Spacer,
  Stack,
  Flex,
  Text,
  Heading,
  useColorModeValue,
  extendTheme,
  Button,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import backimg from "../../../../app/assets/backimg1.png";
import student from "../../../../app/assets/student.png";
import mentor from "../../../../app/assets/mentor.png";
import Image from "next/image";
import Bhayadiag from "../../../../app/assets/bhayaDiag.png";
import Aero from "../../../../app/assets/areo.svg";
import Star from "../../../../app/assets/star.svg";
import lineright from "../../../../app/assets/Group.png";
import lineleft from "../../../../app/assets/lineleft.svg";
import Pencil from "../../../../app/assets/pencil.png";
import Book from "../../../../app/assets/book.svg";
import emojystar from "../../../../app/assets/emojystar.svg";
import vector from "../../../../app/assets/vector.png";

import { Icon } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <section className="overflow-hidden bg-gradient hidden md:flex flex-col ">
      <div className="hidden md:flex justify-between  gap-5  px-[5rem] py-[2rem] h-auto">
          <div className=" md:w-[30%] lg:w-[35%] 2xl:w-[700px] ">
            <Image src={mentor} alt="mentor" style={{height: '60vh'}}  />
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
                  className="relative lg:w-[95.56px] h-[49.33px] top-[95%]  md:w-[30px] lg:left-[-120%] md:left-[-20%] gap-0"
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
              {/* < h4 className="lg:text-[1rem] md:text-[0.8rem] md:font-medium leading-tight text-[#7F7F7F] lg:max-w-[75%] text-center font-sans font-semibold  "> Say goodbye to one-size-fits-all! We tailor study plans and resources to your individual learning style and goals. </h4> */}
              <div>
                <button className="bg-[#FFB35C] font-normal flex items-center gap-[10px] text-[26px] shadow-md hover:shadow-none py-[0.8rem] px-[3rem] rounded-[50px]  text-white ">
                  Schedule a meeting
                  <Image  src={vector} alt="vector" />
                </button>
              </div>
            </div>
          </div>

          <div className="md:w-[35%] lg:w-[40%] 2xl:w-[500px] h-auto   ">
            <Image src={student} alt="student" style={{height: '30vh'}} />
          </div>
        </div>

        {/* <div className="bg-[#5900D9] text-white mb-[17.8%]">
          <div className="lg:mx-[25%] md:mx-[15%] py-[2.9%] flex justify-between items-center">
            <div className="flex flex-col items-center text-center">
              <h1 className="font-Urbanist md:text-[32px] lg:text-[46.26px] font-semibold">
                4.9/5
              </h1>
              <p className="lg:text-[22px] md:text-[18px]  items-center font-normal mt-[15px] flex">
                On{" "}
                <span>
                  <Image className="w-[20px]" src={emojystar} />{" "}
                </span>
                Google
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="lg:text-[46.26px] md:text-[32px] font-semibold">
                +10,000
              </h1>
              <p className="lg:text-[22px]   md:text-[18px] font-normal mt-[15px]">
                Student Enrolled
              </p>
            </div>
            <div className="flex flex-col  items-center justify-center text-center">
              <h1 className="lg:text-[46.26px] md:text-[32px] font-semibold">
                65,000
              </h1>
              <p className="lg:text-[22px]   md:text-[18px]  font-normal mt-[15px]">
                Hours taught
              </p>
            </div>
          </div>
        </div> */}
       
      </section>

      {/* <section className="md:hidden bg-gradient]">
        <div className="flex flex-col md:hidden overflow-hidden ml-[5vw] w-[95vw] mb-[15vh] h-auto">
          <div className="flex w-[80%] h-auto">
            <div className="full mt-10 rounded-xl bg-gradient-to-r bg-clip-text from-purple-600 to-[#5900d9] font-sans  font-bold">
              <Heading
                className=""
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
                  "2xl": "5.5rem",
                }}
              >
                Get your own
                <br />
                <span className="text-gradient">
                  <Typewriter
                    options={{
                      strings: ["Bade Bhaiya", "Badi Didi"],
                      autoStart: true,
                      loop: true,
                      cursor: "|",
                    }}
                  />
                </span>{" "}
                <br />
                to hold your hand
              </Heading>{" "}
            </div>
            <div className=" absolute right-[5vw] top-[16vh] w-[45%] h-auto ">
              <Image src={student} alt="student" />
            </div>
          </div>
          <div className="flex w-full py-5">
            <div className="absolute w-[50%] ">
              <Image src={mentor}></Image>
            </div>

            <div className="w-[55%] mt-[10vh] ml-[42%]">
              <Button
                bgColor={"#ffb35c"}
                ml={16}
                rounded={"full"}
                color={"white"}
                fontWeight={"semibold"}
              >
                <Link href="/about-us">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-[#5900D9] text-white mb-[17.8%]">
          <div className="mx-[10%] py-[2.9%] flex justify-between items-center">
            <div className="flex flex-col items-center text-center">
              <h1 className="font-Urbanist text-[24px] font-semibold">4.9/5</h1>
              <p className="text-[14px] items-center font-normal mt-[15px] flex">
                On{" "}
                <span>
                  <Image className="w-[20px]" src={emojystar} />{" "}
                </span>
                Google
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-[24px] font-semibold">+10,000</h1>
              <p className="text-[14px]  font-normal mt-[15px]">
                Student Enrolled
              </p>
            </div>
            <div className="flex flex-col  items-center justify-center text-center">
              <h1 className="text-[24px] font-semibold">65,000</h1>
              <p className="text-[14px]  font-normal mt-[15px]">Hours taught</p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;
