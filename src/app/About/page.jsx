import React from 'react'
import features from "../../imgs/features.svg"
import teamwork from '../../imgs/teamwork.svg'
import explaination from '../../imgs/explaination.png'
import holding_hand from '../../imgs/holding_hand.png'
import object1 from '../../imgs/object1.png'
import Image from 'next/image'

export default function About() {
  return (
<>

    <div className='bg-[#fefbff] h-auto flex flex-col gap-[5vh] w-screen overflow-clip mt-[5vh]'>
      
      <Image className='opacity-60 absolute w-32 top-[200vh] md:top-[130vh]' src={object1}></Image>
      <Image className=' absolute opacity-60 w-32 top-[500vh] right-0 md:top-[270vh]' src={object1}></Image>
      <div className="flex md:flex-row flex-col">
      <div className="flex flex-col p-10 md:p-10 bg-[#f9f4fe] px-[6vw] rounded-2xl font-semibold  font-sans  text-[0.8rem] md:text-[1.2rem] w-[95vw] md:w-[60%] ml-[2%] justify-center"> At Leadlly, we're revolutionizing student success. We believe every student possesses the potential to excel, and our mission is to bridge the gap between that potential and academic achievement. We do this through a unique blend of cutting-edge technology, personalized mentorship from recent toppers, and a focus on developing essential intellectual skills. <br/>

<span className='font-extrabold text-purple-900'> <br />Our Mission:</span> "To empower students with a holistic learning experience that cultivates academic success, intellectual growth, and a resilient mindset." 
</div>
<div className='md:w-[38%]  w-[95vw]  flex flex-col justify-center h-auto'> <Image className='mt-5' src={holding_hand} alt="" /> </div>
</div>

      <div className="md:flex hidden w-[95vw] justify-between gap-[5vh] h-auto py-[5vh] m-1 mx-auto"> 


     


      <div className="flex flex-col p-5 font-sans bg-transparent rounded-2xl z-10 ring-2 ring-pink-100 ring-offset-2  drop-shadow-xl shadow-purple-200  text-1rem justify-center w-[60vw]">
        <h1 className=' text-[2.5rem] text-[#ffb35c] '>What Sets us Apart</h1><br />
        <p className='opacity-100 md:text-[0.9rem] lg:text-[1.1rem] text-neutral-950'> <span className='font-extrabold text-purple-950'>Seamless Tech Integration: <br /></span> Ditch the bulky binders and scattered notes! Our interactive planners keep you organized, focused, and in control of your academic journey. Set personalized goals, efficiently track assignments, and access a treasure trove of valuable learning materials – all within one user-friendly, digital hub. <br /><br />
<span className='font-extrabold text-purple-950'>Growth Meter: Visualize Your Success: <br /></span> Celebrate your achievements and stay motivated with our interactive growth meter. Track your grades, identify areas where you've excelled, and witness your academic progress unfold throughout the year. <br /><br />
<span className='font-extrabold text-purple-950'>Strategic Revision Tools: <br /></span> Don't waste time revising aimlessly. Our revision tracker helps you monitor progress, pinpoint areas needing improvement, and strategically allocate your revision time for maximum effectiveness.  <br /><br />
<span className='font-extrabold text-purple-950'>Your Big Brother/Sister in Learning:  Personalized Mentorship:<br /></span> Get matched with a dedicated mentor – a recent topper who's been through it all! They'll provide invaluable guidance, answer your questions, offer subject-specific support, and motivate you just like a trusted older sibling. <br /><br />
<span className='font-extrabold text-purple-950'>Learn from Your Mistakes: Interactive Error Book:<br /></span>  Go beyond rote memorization. Our interactive error book helps you identify and overcome common pitfalls specific to your learning style and subject matter. This personalized guide ensures you avoid repeating past mistakes and maximize your understanding. <br /><br />
<span className='font-extrabold text-purple-950'>Sharpen Your Thinking:  Intellectual Techniques Workshops:<br /></span> We empower you beyond content knowledge. Our engaging workshops equip you with essential intellectual techniques crucial for academic success and lifelong learning. Develop critical thinking skills, master problem-solving strategies, and discover effective study methods. These workshops unlock your true potential to approach learning strategically, independently, and with confidence.  </p>  
        
        </div>
        <div className='w-[35vw] flex flex-col justify-center h-auto'> <Image className='' src={explaination} alt="" /> </div>
       </div>



       <div className="md:flex bg-purple-50 hidden w-[100vw] justify-between px-[2.5vw] gap-[5vh] h-auto py-[5vh] mx-auto"> 
       <div className='w-[35vw] flex flex-col justify-end h-auto'> <Image className='' src={features} alt="" /> </div>
      <div className="flex flex-col p-5 font-sans bg-transparent rounded-2xl z-10 ring-2 ring-pink-100 ring-offset-2  drop-shadow-xl shadow-purple-200  text-1rem justify-center w-[45vw]">
        <h1 className=' text-[2.5rem] text-[#ffb35c] '>Why Choose Leadlly</h1>
        <p className='opacity-100 md:text-[0.9rem] font-sans lg:text-[1.1rem] text-black-950'> <span className='font-extrabold text-purple-950'>Expert-Curated Content: <br /></span> Gain access to a comprehensive library of learning materials, meticulously curated by subject matter experts, packed with valuable study tips and exam strategies. <br />
        <span className='font-extrabold text-purple-950'>Prioritizing Student Well-being: <br /></span> We understand the pressure students face. Our platform promotes healthy habits and provides resources to help you combat stress and maintain a positive mindset for optimal learning. <br/>
        <span className='font-extrabold text-purple-950'>Supportive Community: <br /></span> Connect with fellow students, share experiences, motivate each other on your academic journey, and build a network of like-minded individuals. <br/>
 </p>  
        
        </div>
      
       </div>

       <div className="md:flex hidden w-[95vw] justify-between gap-[5vh] h-auto py-[5vh] mx-auto"> 
      
      <div className="flex flex-col p-5 font-sans bg-transparent rounded-2xl z-10 ring-2 ring-pink-100 ring-offset-2  drop-shadow-xl shadow-purple-200  text-1rem justify-center w-[60vw]">
        <h1 className=' text-[2.5rem] text-[#ffb35c] '>The Leadlly Team:</h1>
        <p className='opacity-100 md:text-[0.9rem] lg:text-[1.1rem] text-neutral-950'>

We're a diverse team of passionate educators, technologists, and student success advocates. We believe in the power of education to transform lives, and we're driven by the desire to empower students, unlock their potential, and help them not just achieve academic success but also develop the intellectual skills and well-being to thrive in the ever-evolving world </p>  
        
        </div>
        <div className='w-[35vw] flex flex-col justify-end h-auto'> <Image className='' src={teamwork} alt="" /> </div>
       </div>



{/* phone  */}
<div className="md:hidden">

<div className="flex flex-col p-5 font-sans bg-transparent rounded-2xl z-10 ring-2 ring-pink-100 ring-offset-2  drop-shadow-xl shadow-purple-200 font-regular text-1rem justify-center w-[100vw]">
        <h1 className=' text-[2.5rem] text-[#ffb35c] '>What Sets us Apart</h1><br />
        <p className='opacity-100 md:text-[0.9rem] lg:text-[1.1rem] text-neutral-950'> <span className='font-extrabold text-purple-950'>Seamless Tech Integration: <br /></span> Ditch the bulky binders and scattered notes! Our interactive planners keep you organized, focused, and in control of your academic journey. Set personalized goals, efficiently track assignments, and access a treasure trove of valuable learning materials – all within one user-friendly, digital hub. <br /><br />
<span className='font-extrabold text-purple-950'>Growth Meter: Visualize Your Success: <br /></span> Celebrate your achievements and stay motivated with our interactive growth meter. Track your grades, identify areas where you've excelled, and witness your academic progress unfold throughout the year. <br /><br />
<span className='font-extrabold text-purple-950'>Strategic Revision Tools: <br /></span> Don't waste time revising aimlessly. Our revision tracker helps you monitor progress, pinpoint areas needing improvement, and strategically allocate your revision time for maximum effectiveness.  <br /><br />
<span className='font-extrabold text-purple-950'>Your Big Brother/Sister in Learning:  Personalized Mentorship:<br /></span> Get matched with a dedicated mentor – a recent topper who's been through it all! They'll provide invaluable guidance, answer your questions, offer subject-specific support, and motivate you just like a trusted older sibling. <br /><br />
<span className='font-extrabold text-purple-950'>Learn from Your Mistakes: Interactive Error Book:<br /></span> Go beyond rote memorization. Our interactive error book helps you identify and overcome common pitfalls specific to your learning style and subject matter. This personalized guide ensures you avoid repeating past mistakes and maximize your understanding. <br /><br />
<span className='font-extrabold text-purple-950'>Sharpen Your Thinking: Intellectual Techniques Workshops:<br /></span>  We empower you beyond content knowledge. Our engaging workshops equip you with essential intellectual techniques crucial for academic success and lifelong learning. Develop critical thinking skills, master problem-solving strategies, and discover effective study methods. These workshops unlock your true potential to approach learning strategically, independently, and with confidence.  </p>  
        
        </div>
        <div className='w-[100vw] flex flex-col justify-center h-auto'> <Image className='' src={explaination} alt="" /> </div>
       



       <div className="md:hidden flex-col bg-purple-50 flex w-[100vw] justify-between px-[2.5vw] gap-[5vh] h-auto py-[5vh] mx-auto"> 
       
      <div className="flex flex-col p-5 font-sans bg-transparent rounded-2xl z-10 ring-2 ring-pink-100 ring-offset-2  drop-shadow-xl shadow-purple-200  text-1rem justify-center w-[100vw]">
        <h1 className=' text-[2.5rem] text-[#ffb35c] '>Why Choose Leadlly</h1>
        <p className='opacity-100 md:text-[0.9rem] font-sans lg:text-[1.1rem] text-neutral-950'> <span className='font-extrabold text-purple-950'>Expert-Curated Content: <br /></span> Gain access to a comprehensive library of learning materials, meticulously curated by subject matter experts, packed with valuable study tips and exam strategies. <br />
        <span className='font-extrabold text-purple-950'>Prioritizing Student Well-being: <br /></span> We understand the pressure students face. Our platform promotes healthy habits and provides resources to help you combat stress and maintain a positive mindset for optimal learning. <br/>
        <span className='font-extrabold text-purple-950'>Supportive Community: <br /></span> Connect with fellow students, share experiences, motivate each other on your academic journey, and build a network of like-minded individuals. <br/>
 </p>  
        
        </div>
        <div className='w-[100vw] flex flex-col justify-end h-auto'> <Image className='' src={features} alt="" /> </div>
      
       </div>

       <div className="md:hidden flex flex-col w-[95vw] justify-between gap-[5vh] h-auto py-[5vh] mx-auto"> 
      
      <div className="flex flex-col p-5 font-sans bg-transparent rounded-2xl z-10 ring-2 ring-pink-100 ring-offset-2  drop-shadow-xl shadow-purple-200  text-1rem justify-center w-[95vw]">
        <h1 className=' text-[2.5rem] text-[#ffb35c] '>The Leadlly Team:</h1>
        <p className='opacity-100 md:text-[0.9rem] lg:text-[1.1rem] text-purple-950'>

We're a diverse team of passionate educators, technologists, and student success advocates. We believe in the power of education to transform lives, and we're driven by the desire to empower students, unlock their potential, and help them not just achieve academic success but also develop the intellectual skills and well-being to thrive in the ever-evolving world </p>  
        
        </div>
        <div className='w-[100vw] flex flex-col justify-end h-auto'> <Image className='' src={teamwork} alt="" /> </div>
       </div>


       </div></div>
    
    

</>
  )
}
