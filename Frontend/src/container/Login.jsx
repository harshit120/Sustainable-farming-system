import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-toastify";
import bgimage from "../assets/bgimage.jpg"

const LoginForm = (props) => {
    // const setIsLoggedIn = props.setIsLoggedIn;
    const navigate = useNavigate();
    
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function changeHandler(event) {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    const submitHandler = async(event) => {
        event.preventDefault();

        const response = await fetch(`${process.env.REACT_APP_BACKEND_API_ENDPOINT}/users/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify( formData),
          });
      
          const result = await response.json();
          console.log(result);
          if (result.status === "success") {
           
            navigate("/");
            toast.success("Login Success");
            // setIsLoggedIn(true);
          }
          else{
            toast.error(result.message);
          }        
    }

    return (
        <div>
             <img src={bgimage} alt="" srcset="" className="absolute -z-50 w-[1600px] h-[720px]" />
        <div className="bg-[#57A35B] w-[500px] m-auto py-2 pb-6  rounded-md relative top-44 ">
        <form
            onSubmit={submitHandler}
            className="flex flex-col  gap-y-4 mt-6 w-[400px] mx-10  "
        >
            <label htmlFor="" className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address
                    <sup className="text-pink-200">*</sup>
                </p>

                <input
                    type="email"
                    required
                    value={formData.email}
                    placeholder="Enter your email address"
                    onChange={changeHandler}
                    name="email"
                    className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />
            </label>

            <label htmlFor="" className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Password
                    <sup className="text-pink-200">*</sup>
                </p>

                <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    placeholder="Enter Password"
                    onChange={changeHandler}
                    name="password"
                    className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />

                <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-[38px] cursor-pointer "
                >
                    {showPassword ? (
                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                    ) : (
                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                    )}
                </span>

                {/* <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                        Forgot Password
                    </p>
                </Link> */}
            </label>

            <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-semibold text-richblack-900">
                Sign in
            </button>
        </form>
        </div>
        </div>
    );
};

export default LoginForm;
