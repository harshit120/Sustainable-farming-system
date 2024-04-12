import React, { useState } from "react";
import RegionCard from "./regionCard";
import CropCard from "./cropCard";

const Advice = () => {
  const [crops, setCrops] = useState(null);
  const [cropAdvice, setCropAdvice] = useState(null);

  const renderRegions = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <span>Click on the region where you want to grow your crops.</span>
        <RegionCard region={"North"} bgColor={"yellow"} setCrops={setCrops} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 0",
          }}
        >
          <RegionCard region={"East"} bgColor={"pink"}setCrops={setCrops} />
          <RegionCard region={"Central"} bgColor={"cyan"}setCrops={setCrops} />
          <RegionCard region={"West"} bgColor={"lightGreen"}setCrops={setCrops} />
        </div>
        <RegionCard region={"South"} bgColor={"orange"} />
      </div>
    );
  };

  const renderCrops = () => {
    return crops.length ? (
      <div>
        {crops.map((crop) => (
          <CropCard crop={crop} setAdvice={setCropAdvice}/>
        ))}
      </div>
    ) : (
      <span>No crop found for the given region!</span>
    );
  };

  const renderAdvice = () => {
    return (
      <div className="flex flex-col  ">
        <h1 className="text-4xl mb-4">{cropAdvice.crop_name}</h1>
        <p>{cropAdvice.general_advice}</p>
      </div>
    );
  };

  const renderContent = () => {
    if (cropAdvice) return renderAdvice();
    else if (crops) return renderCrops();
    else return renderRegions();
  };

  return (
    <div>
      <h1 style={{ width: "100%", textAlign: "center" }}>Advice</h1>
      {renderContent()}
    </div>
  );
};

export default Advice;
