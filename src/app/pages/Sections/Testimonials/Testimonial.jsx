import React from 'react';
import {motion} from "framer-motion"
import { Avatar } from '@chakra-ui/react';
const ComponentName = () => {        
    return (
        <div ><div className='md:hidden mt-20 flex flex-col '>
           
             <h2 className="ml-5   md:ml-[8vw]  text-4xl font-bold font-sans text-[#5900D9] md:text-5xl">
          Lets hear from our<br/>
          <span className="text-purple-400"> Happy Learners...</span>
        </h2>
       <div className='flex flex-wrap flex-row w-full h-auto py-10 justify-center' >
        
       <div className='flex flex-col gap-8 justify-center '
       >
        <motion.div
        initial={{y:"50%" ,opacity:0}}
        whileInView={{y:"0% ",opacity:1}}
        transition={{duration:0.5 ,ease:"easeInOut"}}

         className=' flex flex-col ring-2 ring-pink-50 bg-[#f9f4fe] opacity-50    rounded-2xl ring-offset-2 shadow-lg shadow-purple-300 w-[90vw] p-5 m-5 md:w-[25vw]'>
             
            <h3 className='text-[1rem] text-indigo-950 font-sans p-1 mt-5'>
            Mahip bhaiya is a very good mentor, the way in which he guided me and the tasks that he gave me are very good. I saw improvement in my learning skills. Also tracker and error book ne bhi meri bahut help ki. Overall leadlly helped me a lot in my journey....
            </h3>
            <div className='flex w-full h-[auto] my-5'>
                <div className='flex flex-col w-[20vw] h-[20vw] rounded-[8vw] bg-[#f5ebff] text-center font-ultrabold text-white justify-center text-[2rem] ml-5 '>V</div>
            <p className='  text-[0.8rem] text-right font-sans ml-5 p-1 mt-5'>~ Vaibhav JEE Aspirant</p></div>
        </motion.div>
        <motion.div
        initial={{y:"50%" ,opacity:0}}
        whileInView={{y:"0% ",opacity:1}}
        transition={{duration:0.5,ease:"easeInOut"}}

         className='ring-2 ring-pink-50 bg-[#f9f4fe]  rounded-2xl ring-offset-2 shadow-lg shadow-purple-300 w-[90vw] p-5 m-5 md:w-[25vw]'>
           
            <h3 className='text-[1rem] text-indigo-950 font-sans p-1 mt-5'>My mentor was Manan Bhaiya, He is a very good guide. He use to talk in a friendly manner( never felt that I am talking to an elder).He use to motivate me even in bad situations( like getting low grades..).
After all, under his guidance I have seen good changes in my schedule and in myself ...</h3>
<div className='flex w-full h-[auto] my-5'>
                <div className='flex flex-col w-[25vw] h-[20vw] rounded-[8vw] bg-[#f5ebff] text-center font-ultrabold text-white justify-center text-[2rem] ml-5 '>BD</div>
            <p className='  text-[0.8rem] text-right ml-5 font-sans p-1 mt-5'>~ Bhavya Dubey NEET Aspirant</p></div>
        </motion.div>
      
       <motion.div
        initial={{y:"50%" ,opacity:0}}
        whileInView={{y:"0% ",opacity:1}}
        transition={{duration:0.5,ease:"easeInOut"}}

         className='ring-2 ring-pink-50 bg-[#f9f4fe] rounded-2xl ring-offset-2 shadow-lg shadow-purple-300 w-[90vw] p-5 m-5 md:w-[25vw]'>
            
            <h3 className='text-[1rem] text-indigo-950 font-sans p-1 mt-5'>Talking about revision tracker and planners both these things helped me a lot and nearly stopped all my procrastination and anxiousness. And my mentor was Saumya didi. She is really helpful and relatable. She never disappoint me in her responses and I've tried doing what she told me to do and it has helped significantly in my process of learning better.</h3>
            <div className='flex w-full h-[auto] my-5'>
                <div className='flex flex-col w-[20vw] h-[20vw] rounded-[8vw] bg-[#f5ebff] text-center font-ultrabold text-white justify-center text-[2rem] ml-5 '>A</div>
            <p className='  text-[0.8rem] ml-5 text-right font-sans p-1 mt-5'>~ Aadhya NEET Aspirant</p></div>

        </motion.div>
       
       <motion.div
        initial={{y:"50%" ,opacity:0}}
        whileInView={{y:"0% ",opacity:1}}
        transition={{duration:0.5,ease:"easeInOut"}}

         className='ring-2 ring-pink-50 bg-[#f9f4fe] rounded-2xl ring-offset-2 shadow-lg shadow-purple-300 w-[90vw] p-5 m-5 md:w-[25vw]'>
            
            <h3 className='text-[1rem] text-indigo-950 font-sans p-1 mt-5'>This mentorship program is very helpful to me .Techniques that are discussed during workshops were really helpful for me and also my mentor helped me to implement those techniques in my daily routine which helps me a lot. My mentor also provides me lot of study material and motivates me. I really appreciate this program.</h3>
            <div className='flex w-full h-[auto] my-5'>
                <div className='flex flex-col w-[20vw] h-[20vw] rounded-[8vw] bg-[#f5ebff] text-center font-ultrabold text-white justify-center text-[2rem] ml-5 '>V</div>
            <p className='  text-[0.8rem] ml-5 text-right font-sans p-1 mt-5'>~ Vishesh JEE Aspirant </p></div>
        </motion.div>
        <motion.div
        initial={{y:"50%" ,opacity:0}}
        whileInView={{y:"0% ",opacity:1}}
        transition={{duration:0.5,ease:"easeInOut"}}

         className='ring-2 ring-pink-50 bg-[#f9f4fe] rounded-2xl ring-offset-2 shadow-lg shadow-purple-300 w-[90vw] p-5 m-5 md:w-[25vw]'>
           
            <h3 className='text-[1rem] text-indigo-950 font-sans p-1 mt-5'>Leadlly seriously rocks! Their tips, support, and all that expert knowledge totally helped me level up. Thanks for being there every step of the way</h3>
            <div className='flex w-full h-[auto] my-5'>
                <div className='flex flex-col w-[25vw] h-[20vw] rounded-[8vw] bg-[#f5ebff] text-center font-ultrabold text-white justify-center text-[2rem] ml-5 '>KY</div>
            <p className='  text-[0.8rem] ml-5  text-right font-sans p-1 mt-5'>~ Krishna Yadav  Boards student</p></div>
        </motion.div></div>
       </div>
       </div>








       
             <h2 className="ml-5 hidden mb-5 mt-20 md:block md:ml-[8vw] text-4xl font-bold font-sans text-[#5900D9] md:text-5xl">
          Lets hear from our<br/>
          <span className="text-purple-400"> Happy Learners...</span>
        </h2>
       <div className='hidden md:flex overflow-hidden  flex-wrap flex-row w-screen h-auto py-10 justify-center' >
        
       <motion.div className='flex flex-col gap-8  justify-center '
       initial={{x:"-50%" ,opacity:0}}
       whileInView={{x:"0% ",opacity:1}}
       
       transition={{duration:0.5,ease:"easeInOut" }}>
        <div className='relative ring-2  bg-[#f9f4fe] ring-pink-50 rounded-2xl ring-offset-2 shadow-lg shadow-purple-300 w-[90vw] p-5 m-5 md:w-[25vw]'>
           
            <h3 className='text-[1rem] text-indigo-950 font-sans p-1 mt-5'>
            Mahip bhaiya is a very good mentor, the way in which he guided me and the tasks that he gave me are very good. I saw improvement in my learning skills. Also tracker and error book ne bhi meri bahut help ki. Overall leadlly helped me a lot in my journey....
            </h3>
            <div className='flex w-full h-[auto] my-5'>
                <div className='flex flex-col w-[6vw] h-[5vw] rounded-[8vw] bg-[#f5ebff] text-center font-ultrabold text-white justify-center text-[2rem] ml-5 '>V</div>
            <p className='  text-[0.8rem]  text-right font-sans p-1 ml-5 mt-5'>~ Vaibhav JEE Aspirant</p></div>
        </div>
        <div className='relative ring-2 bg-[#f9f4fe] ring-pink-50 rounded-2xl ring-offset-2 shadow-lg shadow-purple-300 w-[90vw] p-5 m-5 md:w-[25vw]'>
        
            <h3 className='text-[1rem] text-indigo-950 font-sans p-1 mt-5'>My mentor was Manan Bhaiya, He is a very good guide. He use to talk in a friendly manner( never felt that I am talking to an elder).He use to motivate me even in bad situations( like getting low grades..).
After all, under his guidance I have seen good changes in my schedule and in myself ...</h3>
<div className='flex w-full h-[auto] my-5'>
                <div className='flex flex-col w-[8vw] h-[5vw] rounded-[8vw] bg-[#f5ebff] text-center font-ultrabold text-white justify-center text-[2rem] ml-5 '>BD</div>
            <p className='  text-[0.8rem]  text-right font-sans p-1 ml-5 mt-5'>~ Bhavya Dubey NEET Aspirant</p></div>
        </div>
       </motion.div>
       <motion.div className='flex flex-col justify-center '
       initial={{y:"30%" ,opacity:0}}
       whileInView={{y:"0% ",opacity:1}}
       
       transition={{duration:0.4,ease:"easeInOut"}}>
       <div className='relative ring-2 bg-[#f9f4fe] ring-pink-50 rounded-2xl ring-offset-2 shadow-lg shadow-purple-300 w-[90vw] p-5 m-5 md:w-[25vw]'>
      
            <h3 className='text-[1rem] text-indigo-950 font-sans p-1 mt-5'>Talking about revision tracker and planners both these things helped me a lot and nearly stopped all my procrastination and anxiousness. And my mentor was Saumya didi. She is really helpful and relatable. She never disappoint me in her responses and I've tried doing what she told me to do and it has helped significantly in my process of learning better.</h3>
            <div className='flex w-full h-[auto] my-5'>
                <div className='flex flex-col w-[6vw] h-[5vw] rounded-[8vw] bg-[#f5ebff] text-center font-ultrabold text-white justify-center text-[2rem] ml-5 '>A</div>
            <p className='  text-[0.8rem]  text-right font-sans p-1 ml-5 mt-5'>~ Aadhya NEET Aspirant</p></div>
       </div>
        </motion.div>
        <motion.div className='flex flex-col gap-8 justify-center '
       initial={{x:"50%" ,opacity:0}}
       whileInView={{x:"0% ",opacity:1}}
       
       transition={{duration:0.5,ease:"easeInOut"}}>
       <div className='relative ring-2 bg-[#f9f4fe] ring-pink-50 rounded-2xl ring-offset-2 shadow-lg shadow-purple-300 w-[90vw] p-5 m-5 md:w-[25vw]'>
     
            <h3 className='text-[1rem] text-indigo-950 font-sans p-1 mt-5'>This mentorship program is very helpful to me .Techniques that are discussed during workshops were really helpful for me and also my mentor helped me to implement those techniques in my daily routine which helps me a lot. My mentor also provides me lot of study material and motivates me. I really appreciate this program.</h3>
            <div className='flex w-full h-[auto] my-5'>
                <div className='flex flex-col w-[6vw] h-[5vw] rounded-[8vw] bg-[#f5ebff] text-center font-ultrabold text-white justify-center text-[2rem] ml-5 '>V</div>
            <p className='  text-[0.8rem]  text-right font-sans p-1 ml-5 mt-5'>~ Vishesh JEE Aspirant </p></div>
          </div>
        <div className='relative ring-2 bg-[#f9f4fe] ring-pink-50 rounded-2xl ring-offset-2 shadow-lg shadow-purple-300 w-[90vw] p-5 m-5 md:w-[25vw]'>
        
            <h3 className='text-[1rem] text-indigo-950 font-sans p-1 mt-5'>Leadlly seriously rocks! Their tips, support, and all that expert knowledge totally helped me level up. Thanks for being there every step of the way</h3>
            <div className='flex w-full h-[auto] my-5'>
                <div className='flex flex-col w-[8vw] h-[5vw] rounded-[8vw] bg-[#f5ebff] text-center font-ultrabold text-white justify-center text-[2rem] ml-5 '>KY</div>
            <p className='  text-[0.8rem]  text-right font-sans p-1 ml-5 mt-5'>~ Krishna Yadav Boards student</p></div>
        </div></motion.div>
       </div>
       </div>
      

    )
}
export default ComponentName;
