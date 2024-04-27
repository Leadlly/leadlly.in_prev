import React from 'react'
import  Typewriter from 'typewriter-effect'
export default function Courses() {
  return (
    <div className='h-[100vh]  flex bg-gradient-to-r bg-clip-text from-purple-700 via-indigo-300 to-blue-700 justify-center'>

        <h1 className=' w-auto text-[2.2rem] my-auto md:text-[10vw] text-transparent '><Typewriter
  options={{
    strings: ["COMING SOON..."],
    autoStart: true,
    loop: true,
  }}/></h1>
      
    </div>
  )
}
