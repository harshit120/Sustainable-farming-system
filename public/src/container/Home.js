import React from "react";
import Fertilizer from "./Fertilizer";
import GovtSche from "./GovtSche";
import Faq from "./Faq";
import Footer from "./Footer";
import Crop from "./Crop";
import image1 from "../assets/image1.jpg"
import logo1 from "../assets/logo1.png"
import { NavLink,Link } from 'react-router-dom';

// import Navbar from "./Navbar";
// import illustraion from "../assets/Illustration.png";
// import Downloadbutton from "./Downloadbutton";
const Home = () => {
  const style = `
    .fp{
        color: #000;
font-family: Inter;
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: 123.523%; /* 49.409px */


    }
    .herob{
    
        background: linear-gradient(101deg, rgba(0, 107, 127, 0.09) 33.55%, rgba(205, 200, 88, 0.12) 99.46%);
    }`;
  return (
    <>
      <style>{style}</style>
      
      <div className=" pb-[50px] bg-[#ACD2AD] ">
        <div className="flex flex-row pl-[81px] pr-[114px] space-x-[104px] ">
          <div className="flex flex-col  pt-[90px] flex-1">
           
            <div className="flex flex-row">
          <img src={logo1} className="w-[180px]" alt="" srcset="" />
          <span className="pt-[64px] fp relative -left-5">KrishiUrjaa</span>
          </div>
            <p className="text-5xl font-serif">
            Empowering Farmers 
            </p>
            <p className="text-[21px] mt-3 font-sans">
            Platform that provides a personalized crop guidance for optimal yield, resilience, and eco-friendly growth with the help of AI.
            </p>
       
          </div>
          <div className="pt-[74px]">
            <img src={image1} className="w-[500px] rounded-md" alt="" />

          </div>
        </div>

        <div className="pl-[81px]  py-[50px] ">
          {/* <Downloadbutton /> */}
        </div>
      </div>
      <Fertilizer/>
      <Crop/>
      <GovtSche/>
      <Faq/>
      <Footer/>
    </>
  );
};

export default Home;
