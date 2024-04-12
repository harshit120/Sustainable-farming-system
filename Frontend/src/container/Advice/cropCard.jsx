import React from "react";

const CropCard = ({ crop, setAdvice }) => {
  const handleCardClick = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_API_ENDPOINT}/advices/getAdvice/${crop.name}`
    );
    console.log(response);
    const advice = await response.json();
    console.log(advice);
    if (advice.status === "success") setAdvice(advice.data[0]);
  };

  return (
    <div
      style={{
        width: "200px",
        height: "125px",
        background: "orange",
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
          fontSize: "25px",
          opacity: "0.5",
        }}
      >
        {crop.name}
      </p>
    </div>
  );
};

export default CropCard;
