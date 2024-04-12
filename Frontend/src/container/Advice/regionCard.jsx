import React from "react";

const RegionCard = ({ region, bgColor, setCrops }) => {
  const handleCardClick = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_API_ENDPOINT}/crops/getCropsByRegion/${region}`
    );
    console.log(response);
    const crops = await response.json();
    console.log(crops);
    if (crops.status === "success") setCrops(crops.data);
  };

  return (
    <div
      style={{
        width: "300px",
        height: "175px",
        background: bgColor,
        margin: "auto",
        textAlign: "center",
        borderRadius: "20px",
        cursor: "pointer",
      }}
      onClick={handleCardClick}
    >
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          fontSize: "35px",
          opacity: "0.5",
        }}
      >
        {region}
      </p>
    </div>
  );
};

export default RegionCard;
