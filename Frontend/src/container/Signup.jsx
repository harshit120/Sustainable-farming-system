import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import bgimage from "../assets/bgimage.jpg"

const SignupForm = () => {
  const [accountType, setAccountType] = useState("student");

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
   
    email: "",
    region: "",
    landSize: "",
    password: "",
   
  });

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  const [showPassword, setShowPassword] = useState({
    createPassword: false,
    confirmPassword: false,
  });

  const handleClick = (buttonName) => {
    setShowPassword({
      ...showPassword,
      [buttonName]: !showPassword[buttonName],
    });
  };

  const submitHandler = async(event) => {
    event.preventDefault();
    if (formData.createPassword != formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const response = await fetch("http://localhost:3000/api/v1/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData) ,
    });

    const finalData = {
      ...formData,
      accountType
    }


    toast.success("Account Create Successfull");

    navigate("/fertilizerPage");
  }

  return (
    <div>
      <img src={bgimage} alt="" srcset="" className="absolute -z-50 w-[100vw] h-[91.3vh]" />
    <div className="w-[400px] m-auto bg-[#57A35B] px-[30px] relative top-24 py-[30px] ">
      {/* Button Group */}
      <div className="">
<p className="text-center font-semibold text-4xl mb-[40px]">Krishiurjaa</p>
       
      </div>

      {/* Form */}
      <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
        <div className="flex gap-x-4">
          <label className="w-full">
            {/* <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
               Name<sup className="text-pink-200">*</sup>
            </p> */}
            <input
              className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
              required
              type="text"
              name="username"
              id="firstName"
              onChange={changeHandler}
              value={formData.username}
              placeholder="Enter your name"
            />
          </label>

          
        </div>

        <label className="w-full">
          {/* <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
            Email Address<sup className="text-pink-200">*</sup>
          </p> */}
          <input
            className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
            required
            type="email"
            name="email"
            id="email"
            value={formData.email}
            placeholder="Enter email address"
            onChange={changeHandler}
          />
        </label>

        <label className="w-full">
          {/* <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
            Region<sup className="text-pink-200">*</sup>
          </p> */}
          <input
            className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
            required
            type="text"
            name="region"
            id="region"
            value={formData.region}
            placeholder="Enter your Region"
            onChange={changeHandler}
          />
        </label>

        <label className="w-full">
          {/* <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
          landSize<sup className="text-pink-200">*</sup>
          </p> */}
          <input
            className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
            required
            type="number"
            name="landSize"
            id="landSize"
            value={formData.landSize}
            placeholder="Enter your landSize in acres"
            onChange={changeHandler}
          />
        </label>

        {/* <label className="w-full">
          <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
          createdAt<sup className="text-pink-200">*</sup>
          </p>
          <input
            className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
            required
            type="date"
            name="createdAt"
            id="createdAt"
            value={formData.createdAt}
            placeholder="enter date of creation"
            onChange={changeHandler}
          />
        </label> */}

        <div className="flex gap-x-4">
          <label className="w-full relative">
            {/* <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p> */}
            <input
              className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
              required
              type={showPassword.createPassword ? "text" : "password"}
              name="password"
              id="createPassword"
              onChange={changeHandler}
              value={formData.password}
              placeholder="Enter Password"
            />

            <span
              className="absolute top-[13px] right-3 z-10 cursor-pointer"
              onClick={() => handleClick("createPassword")}
            >
              {showPassword.createPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </label>

          
        </div>

        <button className="bg-yellow-50 text-richblack-900 font-semibold px-[12px] rounded-[8px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
     <div className="text-center mt-2 ">
    <p>Already have an Account </p> 
    <NavLink to="/loginin"  ><p className="text-blue-800">login in </p></NavLink>
    </div>
   
    </div>
    </div>
  );
};

export default SignupForm;
