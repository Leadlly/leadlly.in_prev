import { Heading } from '@chakra-ui/react';
import React from 'react';
import Carousel from './Carousel';

const ComponentName = () => {        
    return (

        <>
         <section className="overflow-hidden bg-gradient align-center hidden md:flex flex-col ">
        <div className="full rounded-xl bg-gradient-to-r bg-clip-text from-purple-600 to-[#5900d9] font-sans mt-[3rem] font-bold">
            <Heading
              className="text-center "
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
              }}
            >
              <span className="md:text-[2rem] lg:text-[35px]">
                Yes, we have
              </span>
              <br />
                  <span className="gradient-text text-[130px]">
                   Solution!
                  </span>
              </Heading>
              </div>
              <Carousel />
              </section>
        </>
      

    )
}
export default ComponentName;
