import React,{useEffect,useContext, useState} from "react";

import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Stepper from "./components/Stepper";
import {Flex,Box,Spacer,Button, useColorModeValue,PinInput,PinInputField,HStack} from "@chakra-ui/react"
import axios from "axios";
import { server } from "@/app/page";
import {useSignup} from "../../hooks/useSignup";


export default function Signup() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword:''
      });
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const [currentLevel, setCurrentLevel] = useState(1);
      const steps = [
         'Contact Info' ,
        'OTP Verification' ,
        'Other Details' 
      ];
      
      // const handleSubmit = async (e) => {
      //   e.preventDefault();
        
      //   if(!handleValidations()){
      //           return;
      //         }
      //         setCurrentLevel((prevLevel) => prevLevel + 1);

      //   try {
      //     const { data } = await axios.post(
      //       `${server}/users/register`,
      //       JSON.stringify(formData),
      //       {
      //         headers: {
      //           "Content-Type": "application/json",
      //         },
      //         withCredentials: true,
      //       },
      //     );
      //     console.log(data.message);
        
      //   } catch (error) {
      //     console.log(error)
        
      //   }
      // };
      
    const {Signup,isLoading,error}=useSignup()


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!handleValidations()){
          return;
        }
        

        await Signup(formData).then(
          setCurrentLevel((prevLevel) => prevLevel + 1))
        
    
        if(error){
          toast.error(error,toastOptions)
        }
        

      }

  

      
      


      const toastOptions = {position: "bottom-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark"}
      const handleValidations = () => {
        const { password, confirmPassword,name } = formData;
        if(name.length < 3){
          toast.error("Name should be greater than 3 characters",toastOptions);
          return false;
        }
       else if(password.length < 8){
          toast.error("Password should be greater than 8 characters",toastOptions);
          return false;
        } else if (password !== confirmPassword) {
          toast.error("Password and Confirm Password should be same",toastOptions);
          return false;
        }
         
        return true;
      }
    


  const renderForm = () => {
    switch (currentLevel) {
      case 1:
        return (
          <>
          
          <Flex w={"100vw"} h={"40vh"}  justifyContent={"center"}><Box w={{base:"90%",sm:"70%",md:"50%", lg:"40%"}} m={"auto"}>
          <form onSubmit={handleSubmit}>
          <Box my={5}>
            <label htmlFor="name" className="block  text-md font-medium leading-6 text-indigo-300">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value = {formData.name}
                  onChange = {handleChange}
                  required
                  className="block w-full rounded-md  py-1.5 px-2  text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              
              </div>
              
              </Box>
            <Box my={5}>
            <label htmlFor="email" className="block  text-md font-medium leading-6 text-indigo-300">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value = {formData.email}
                  onChange = {handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              
              </div>
              </Box>
              
              <Box my={5}>
              <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-md font-medium leading-6 text-indigo-300">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value = {formData.password}
                  onChange = {handleChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                 </div>
              </div>
              </Box>
             
              <Box my={5}>
              <div className="flex items-center justify-between">
                <label htmlFor="confirmPassword" className="block text-md font-medium leading-6 text-indigo-300">
                  Confirm Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value = {formData.confirmPassword}
                  onChange = {handleChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              </Box>
              
              <Flex my={10} alignItems={"center"} justifyContent={"center"}>
            <Button disabled={isLoading} type="submit" w={"50%"} bgColor={"#7986CB"} colorScheme="white">Next</Button>
            </Flex>
          </form></Box></Flex>
          </>
        );
      case 2:
        return (<>
          
          <form onSubmit={handleSubmit}>
          <Flex my={10} h={"20vh"} direction={"column"} alignItems={"center"} justifyContent={"center"}>
            
          <Spacer/>
            <HStack  w={"30vw"}justifyContent={"center"}>
              <PinInput size={"lg"}>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
            
            <Spacer/>
            <Button type="submit" w={"50%"} bgColor={"#7986CB"} colorScheme="white">Next</Button>
            </Flex>
            
          </form></>
        );
      case 3:
        return (<>
        
          <form onSubmit={handleSubmit}>
            <label>
             
              
            </label>
            <Flex my={10} alignItems={"center"} justifyContent={"center"}>
            <Button type="submit" w={"50%"} bgColor={"#7986CB"} colorScheme="white">Next</Button>
            </Flex>
          </form>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box h={"100vh"} >
      <Flex direction={"column"} alignItems={"center"} justifyContent={"center"}  h ={"80vh"} w={"100%"}>
      <Box w={{base:"90%",sm:"70%",md:"50%", lg:"40%"}}>
      <Stepper currentLevel={currentLevel-1} />
      </Box>
      <Box mt={5} >
      <label  className="block text-xl font-medium leading-6 text-indigo-300">
                  
      {steps[currentLevel-1]}</label>
      </Box>


      
      {renderForm()}
      </Flex>
      <ToastContainer/>
      </Box>
      
    
  );
};

