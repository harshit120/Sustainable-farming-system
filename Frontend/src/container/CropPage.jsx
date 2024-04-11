import React, { useState, useEffect } from "react";
import axios from "axios";
import workInProgress from "../assets/workInProgress.jpg";
import { hover } from "@testing-library/user-event/dist/hover";
import Croppage2 from "./croppage2";

const CropPage = () => {
  const [crops, setCrops] = useState([
    {
      name: "crop name",
      description: `crop descriaption 
  Crop diversity stands as the cornerstone of agricultural resilience and sustainability. Beyond just ensuring food security, diverse crops bolster ecosystems, fortify against pests and diseases, and promote soil health. Embracing a rich variety of crops not only secures a diverse diet for communities but also mitigates risks associated with climate change. By fostering diverse agricultural landscapes, we safeguard heritage varieties, preserve cultural practices, and empower farmers with adaptable solutions. Each crop, with its unique traits and adaptations, contributes to the intricate web of life that sustains our planet, paving the way for a more resilient and fruitful future in agriculture`,
      best_season: "Fall",
      suitable_regions: ["Region C", "Region D"],
    },
  ]);

  useEffect(() => {
    // Define a function to fetch crops from the backend
    const fetchCrops = async () => {
      try {
        // Make a GET request to fetch all crops
        const response = await axios.get("/api/crops"); // Assuming your backend route is '/api/crops'
        // Update state with the fetched crops
        setCrops(response.data);
      } catch (error) {
        console.error("Error fetching crops:", error);
      }
    };

    // Call the fetchCrops function when the component mounts
    fetchCrops();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts


  const fetchCrops = async () => {
    console.log("log");
    try {
      const response = await fetch("http://localhost:3000/api/v1/crops");
      const data = await response.json();
      console.log(data);
      setCrops(data.data.crops);
    } catch (error) {
      console.error('Error fetching fertilizers:', error);
    }
  };
  
  useEffect(() => {
    fetchCrops();
  }, []);
  return (
    <div className="bg-[#ACD2AD]">
      <h1 className="text-center text-4xl pt-4 ">Crops </h1>
      <div>
      {crops.map((crop, index) => {
        return (
   <Croppage2  crop={crop} />
        );
      })}
      </div>
    </div>
  );
};

export default CropPage;
