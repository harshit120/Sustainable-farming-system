import React, { useState, useEffect } from "react";
import axios from "axios";
import workInProgress from "../assets/workInProgress.jpg";
import { hover } from "@testing-library/user-event/dist/hover";

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
  const [showMore, setShowMore] = useState(false);

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

  return (
    <div className="">
      <h1 className="text-center text-4xl mt-4">Crops </h1>
      <div>
      {crops.map((crop, index) => {
        return (
          <div
            key={crop._id}
            className="flex flex-row justify-around px-[10%] space-x-10 mt-16 shadow-lg py-4 w-[90vw] mx-auto shadow-slate-500"
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
                    className="hover:cursor-pointer"
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
                    <span
                      onClick={() => {
                        setShowMore(false);
                      }}
                      className="hover:cursor-pointer"
                    >
                      Read less
                    </span>
                  </p>
                </>
              ) : null}
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default CropPage;
