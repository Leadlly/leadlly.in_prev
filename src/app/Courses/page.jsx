"use client"
import React, { useState,useEffect,useRef  } from 'react';
import CardImage from "../../imgs/coourcecard.svg";
import Image from 'next/image';
import Link from 'next/link';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { Eye, EyeOff, Lock, User,close } from "lucide-react";
import Profileinfro from '@/Components/ProfileInfo/Profileinfro';

export default function Courses() {
    const [focus, setFocus] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [Fillinfo,setFillinfo]=useState(false)
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const emailRef = useRef(null);
  const openfill = () => {setFillinfo(true)
    setShowSignup(false)
  }
  const openLogin = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);
  const openSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };
  const closeSignup = () => {setShowSignup(false)
  setShowLogin(true)
  };
  useEffect(() => {
    // Check if the ref is assigned before trying to access its properties
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  return (
    <div className='m-[60px]'>
      <div className='flex justify-between gap-5'>
        <div className='shadow-md border-1 max-w-[33.%] rounded-xl p-[15px]'>
          <div>
            <Image src={CardImage} className='mb-[15px]' />
            <h1>Cource Title</h1>
            <p>Cource Discription</p>
          </div>
          <button onClick={openLogin} className='mt-[15px] text-[12px] rounded-md bg-blue-800 p-[10px] text-white flex items-center'>Buy Now</button>
        </div>

        <div className='shadow-md border-1 max-w-[33.%] rounded-xl p-[15px]'>
          <div>
            <Image src={CardImage} className='mb-[15px]' />
            <h1>Cource Title</h1>
            <p>Cource Discription</p>
          </div>
          <button onClick={openLogin} className='mt-[15px] text-[12px] rounded-md bg-blue-800 p-[10px] text-white flex items-center'>Buy Now</button>
        </div>

        <div className='shadow-md border-1 max-w-[33.%] rounded-xl p-[15px]'>
          <div>
            <Image src={CardImage} className='mb-[15px]' />
            <h1>Cource Title</h1>
            <p>Cource Discription</p>
          </div>
          <button onClick={openLogin} className='mt-[15px] text-[12px] rounded-md bg-blue-800 p-[10px] text-white flex items-center'>Buy Now</button>
        </div>
        {/* Repeat for other course cards */}
      </div>

      {/* Login Card */}
      {showLogin && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
        <div
            id="signin_page"
            className="border bg-white z-10 border-grey-light rounded-[24px]"
            style={{ boxShadow: "0px 0px 30px 10px rgba(165, 92, 255, 0.1)" }}>
            <div className="signin-box ">
              <div className="flex justify-center items-center flex-col my-[52px]">
                <h2 className="text-[52px] font-bold">Welcome</h2>
                <p className="text-[20px] font-normal">
                  We are glad to see you with us
                </p>
              </div>

              <form className="flex flex-col mx-[46px]">
                <div className="flex mb-[20px] items-center justify-start gap-[20px] border border-[#D9D8D8] text-[#7F7F7F] py-[8px] rounded-[9px]">
                  <User className='ml-[10px]'/>
                  <input
                    ref={emailRef}
                    className="focus:outline-none md:mr-[50px]"
                    type="email"
                    placeholder="Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required></input>
                </div>

                <div className="flex items-center justify-start gap-[20px] border border-[#D9D8D8] text-[#7F7F7F] py-[8px] rounded-[9px]">
                 <Eye className='ml-[10px]'/>
                  <input
                    className="focus:outline-none md:mr-[50px] "
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required></input>
                </div>

                <div className="flex justify-between mt-[17px] items-center flex-col md:flex-row lg:gap-[107px]">
                  <div className="flex gap-[10px] text-[18px]">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      className="w-[20px] h-[20px]"
                    />
                    <label className="text-[#7F7F7F]" htmlFor="rememberMe">
                      Remember Password
                    </label>
                  </div>
                  <Link
                    className="text-[#9654F4] text-[18px] font-normal"
                    href="#">
                    Forgot Password
                  </Link>
                </div>
                
                <div className="flex flex-col justify-center items-center">
                <Link href="#" className="w-full">
                  <button className="py-[14px] text-[18px] mt-[26px] font-semibold rounded-[9px] bg-[#9654F4] w-full text-center text-white">
                    Log In
                  </button>
                </Link>

                <div className="m-3 w-full">
                <GoogleOAuthProvider>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                    console.log(credentialResponse, "Current user")   
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
                useOneTap
                auto_select
                
              />
               </GoogleOAuthProvider>
              </div>
                </div>
              </form>
                      
              <button onClick={openSignup} className="text-[18px] font-normal text-[#9654F4] text-center mt-[17px] mb-[45px]">
                No account yet?SignUp
              </button>
            </div>
          </div>
        </div>
       
        
        
      )}

      {/* Signup Card */}
      {showSignup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div
            id="signin_page"
            className="bg-white border border-grey-light rounded-[24px]"
            style={{ boxShadow: "0px 0px 30px 10px rgba(165, 92, 255, 0.1)" }}
          >
            <div className="signin-box ">
              <div className="flex justify-center items-center flex-col mt-[43px] mb-[35px]">
                <h2 className="text-[36px] font-bold">Create an account</h2>
                <p className="text-[16px] items-center text-left max-w-[65%] font-normal">
                  Unlock your potential with expert guidance sign up for
                  mentorship today!
                </p>
              </div>
              <form className="flex flex-col mx-[46px]">
                <div className="flex mb-[20px] items-center justify-start gap-[20px] border border-[#D9D8D8] text-[#7F7F7F] py-[8px] rounded-[9px]">
                <User className='ml-[10px]'/>
                  <input
                    className="focus:outline-none md:mr-[50px]"
                    type="email"
                    placeholder="Enter Full Name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  ></input>
                </div>

                <div className="flex mb-[20px] items-center justify-start gap-[20px] border border-[#D9D8D8] text-[#7F7F7F] py-[8px] rounded-[9px]">
                <User className='ml-[10px]'/>
                  <input
                    className="focus:outline-none md:mr-[50px]"
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  ></input>
                </div>

                <div className="flex items-center justify-start gap-[20px] border border-[#D9D8D8] text-[#7F7F7F] py-[8px] rounded-[9px]">
                <Eye className='ml-[10px]'/>
                  <input
                    className="focus:outline-none md:mr-[50px] "
                    type="password"
                    placeholder="Create Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  ></input>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <button onClick={openfill} className="py-[14px] text-[18px] mt-[26px] font-semibold rounded-[9px] bg-[#9654F4] w-full text-center text-white">
                    Sign In
                  </button>
              

                <div className="m-3 w-full">
                  <GoogleOAuthProvider>
                  <GoogleLogin
                onSuccess={(credentialResponse) => {
                    console.log(credentialResponse, "Current user")   
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
                useOneTap
                auto_select
                
              />
                  </GoogleOAuthProvider>
              </div>
                </div>
              </form>  
              <button onClick={closeSignup} className="text-[18px] font-normal text-[#9654F4] text-center mt-[17px] mb-[45px]">
                Already have an account?Login
              </button>
            </div>
          </div>
        </div>
      )}

      {Fillinfo && (
        <Profileinfro Fillinfo={Fillinfo} setFillinfo={setFillinfo}/>
      )}
    </div>
  );
}
