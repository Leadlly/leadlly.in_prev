import Image from 'next/image'
import React from 'react';
import about from "../assets/about/about-top.png"
import { Heading } from '@chakra-ui/react';
import mission from "../assets/about/mission.png"
import { Different } from './Different';

export default function About() {
  return (
<>
<div style={{ backgroundImage: "url('grid.png')", width: "100%", zIndex: "-1"}}>
    <section>

   
<div className="mt-8 w-full">
      <div className="flex flex-col md:flex-row w-full p-8 md:p-16">
        <div className="about-left relative md:top-8 left-[1rem] mb-8 md:mb-0 md:w-1/2">
          <p className="about_p p-12">
            At Leadlly, we're revolutionizing student success. We believe every student possesses the potential to excel, and our mission is to bridge the gap between that potential and academic achievement. We do this through a unique blend of cutting-edge technology, personalized mentorship from recent toppers, and a focus on developing essential intellectual skills.
          </p>
        </div>
        <div className=" md:w-1/2 flex justify-center">
          <Image src={about} alt="about" className="top_image" />
        </div>
      </div>
    </div>
    </section>
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
              Our
            </span>
            <br />
            <span className="gradient-text text-[7rem]">
              Mission!
            </span>
          </Heading>
        </div>
        <div className="flex justify-center items-center h-full  ml-4 mr-4 mt-4 md:mt-8">
          <Image
            src={mission}
            alt="mission"
            className='mission'
          />
        </div>
        </section>

<Different/>
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
              The Leadlly
            </span>
            <br />
            <span className="gradient-text text-[7rem]">
              Team
            </span>
          </Heading>
        </div>

        <div className='team'>
          <p>Our group of passionate educators, technologists, and supporters of student achievement believes education can significantly impact people's lives, working tirelessly to help students reach their full potential.</p>
        </div>
        </section>
        </div>
</>
  )
}

