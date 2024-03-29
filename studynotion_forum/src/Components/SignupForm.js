import React from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import { useState } from "react";
import {toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm=({setIsLoggedIn})=>{

const navigate= useNavigate();

const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
})
function changeHandler(event){
    setFormData((prevData)=>{
        return {...prevData,[event.target.name]:event.target.value}
    })
}

function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    if(formData.password!==formData.confirmPassword){
    toast.error("Password do not Match");
    return ;
    }
    setIsLoggedIn=true;
    toast.success("Account Created Successfully");
    navigate("/dashboard");
  }

const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
const [accountType ,setAccountType] = useState("student");

    return (
        <div>
        <div className="flex bg-richblack-800 gap-z-1 my-6 rounded-full max-w-max p-1 ">
            <button 
            className={`${accountType==="student" ? 
            "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200"}`}
            onClick={()=>setAccountType("student")}>Student</button>
            <button 
            className={`${accountType==="instructor" ? 
            "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200"}`}
            onClick={()=>setAccountType("instructor")}>Instructor</button>
        </div>

        <form onSubmit={submitHandler}>
        <div className="flex gap-4 mt-[10px]" >
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name<sup className="text-pink-200">*</sup></p>
                <input
                required
                type="text"
                name="firstName"
                onChange={changeHandler}
                placeholder="Enter FirstName"
                value={formData.firstName}
                className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />
                
            </label>
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name<sup className="text-pink-200">*</sup></p>
                <input
                required
                type="text"
                name="lastName"
                onChange={changeHandler}
                placeholder="Enter LastName"
                value={formData.lastName}
                className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />
                
  
            </label>
        </div>
        <div className="mt-[20px]"><label className="w-full mt-[10px]">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address<sup className="text-pink-200">*</sup></p>
                <input
                required
                type="email"
                name="email"
                onChange={changeHandler}
                placeholder="Enter Email Address"
                value={formData.email}
                className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />
                
  
            </label>
            </div>
            

            <div className="flex gap-x-4  mt-[10px]">
            <label className="relative w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password<sup className="text-pink-200">*</sup></p>
                <input
                required
                type={showPassword ? ("text"):("password")}
                name="password"
                onChange={changeHandler}
                placeholder="Enter Password"
                value={formData.password}
                className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />
    
                <span 
                className="absolute right-3 top-[38px] cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible  fontSize={24} fill="#AFB2BF"/> : <AiOutlineEye  fontSize={24} fill="#AFB2BF"/>}
            </span>
            </label>

            <label className="relative w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password<sup className="text-pink-200">*</sup></p>
                <input
                required
                type={showConfirmPassword ? ("text"):("password")}
                name="confirmPassword"
                onChange={changeHandler}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />
    
                <span 
                className="absolute right-3 top-[38px] cursor-pointer"
                onClick={() => setShowConfirmPassword((prev) => !prev)}>
            {showConfirmPassword ? <AiOutlineEyeInvisible   fontSize={24} fill="#AFB2BF"/> : <AiOutlineEye   fontSize={24} fill="#AFB2BF"/>}
            </span>
            </label>
            </div>
            <button className="bg-yellow-50 rounded-[8px] text-richblack-900 px-[12px] py-[8px] mt-6 w-full">Create Account</button>


        </form>

        </div>
    )
}

export default SignupForm ; 