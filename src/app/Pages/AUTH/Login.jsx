import React,{useEffect,useContext, useState} from "react";
import { Link,Navigate } from "react-router-dom";
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Stepper from "./components/Stepper";
import {Flex,Box,Spacer,Button, useColorModeValue,PinInput,PinInputField,HStack} from "@chakra-ui/react"
import axios from "axios";
import { server } from "@/app/page";

export default function Login() {
    const [formData, setFormData] = useState({
        
        email: '',
        password: '',
       
      });
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    
      const handleSubmit = async (e) => {
        e.preventDefault();
       
        if(!handleValidations()){
                return;
              }
             

        try {
          const { data } = await axios.post(
            `${server}/users/login`,
            JSON.stringify(formData),
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            },
          );
          console.log(data.message);
          
        } catch (error) {
          console.log(error)
         
        }
      };
      
    


      const handleSubmit2 = async (e) => {
        
        e.preventDefault();
        if(!handleValidations()){
          return;
        }
    
        try {
          const response = await fetch('http://localhost:5000/api/v1/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          
         
        } 
        catch (error) {
          console.log(error)
        
        }
      };


      
      


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
        } 
         
        return true;
      }
    

  return (
    <div>
      <>
          
          <Flex w={"100vw"} h={"100vh"}  justifyContent={"center"}><Box w={{base:"90%",sm:"70%",md:"50%", lg:"40%"}} m={"auto"}>
            <div className="flex justify-center font-mono sm:text-4xl text-xl text-indigo-300">Login to your account</div> 
          <form onSubmit={handleSubmit}>
          
            
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
             
             
              
              <Flex my={10} alignItems={"center"} justifyContent={"center"}>
            <Button type="submit" w={"50%"} bgColor={"#7986CB"} colorScheme="white">Next</Button>
            </Flex>
          </form></Box></Flex>
          </>
    </div>
  )
}
