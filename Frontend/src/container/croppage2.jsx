import React, { useState, useEffect } from "react";
import workInProgress from "../assets/workInProgress.jpg";

const Croppage2 = ({crop}) => {
  // Your code here
  const [showMore, setShowMore] = useState(false);

  return (
    <div
    key={crop._id}
    className="flex flex-row  items-center px-[6%] space-x-[100px] mt-16 shadow-lg py-4 w-[70vw] mx-auto rounded-[20px] shadow-slate-500 bg-white"
  >
    <img
      src={workInProgress}
      className="w-[300px] h-[300px]  rounded-3xl "
      alt=""
      srcset=""
    />
    <div className="flex flex-col  ">
      <h1 className="text-4xl mb-4">{crop.name}</h1>
      <p>
        {crop.description}{" "}
        {showMore == false ? (
          <span
            onClick={() => {
              setShowMore(true);
            }}
            className="hover:cursor-pointer text-blue-800"
          >
            Read More
          </span>
        ) : null}
      </p>
      {showMore == true ? (
        <>
          <p className="mb-3">
            <strong>Suitable Regions:</strong>{" "}
            {crop.suitable_regions.join(", ")}
          </p>
          <p className="mb-3">
            <strong>Best Season:</strong> {crop.best_season}
          </p>
          <p className="mb-3">
            <strong>Soil Requirements:</strong> {crop.soil_requirements}
          </p>
          <p className="mb-3">
            <strong>Watering Needs:</strong> {crop.watering_needs}
          </p>
          <p className="mb-3">
            <strong>Pest Management:</strong> {crop.pest_management}
          </p>
          <p className="mb-3">
            <strong>Disease Management:</strong>{" "}
            {crop.disease_management}
          </p>
          <p className="mb-3">
            <strong>Yield Expectation:</strong> {crop.yield_expectation}
          </p>
          
          <p className="mb-3">
            <strong>Harvesting Period:</strong> {crop.harvesting_period}{" "}
           
          </p>
          <p className="mb-3">
            <strong>Pricing</strong> {crop.price}  
          </p>
          <p
              onClick={() => {
                setShowMore(false);
              }}
              className="hover:cursor-pointer text-blue-800 text-[18px] mt-4"
            >
              Read less
            </p>
        </>
      ) : null}
    </div>
  </div>
  );
};

export default Croppage2;
