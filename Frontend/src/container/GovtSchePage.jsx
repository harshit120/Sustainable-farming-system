import React, { useState, useEffect } from 'react';
import GovtPage2 from './govtpage2';

const GovtSchePage = () => {
  const [policies, setPolicies] = useState([]);

  const fetchPolicies = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_API_ENDPOINT}/policies`);
      const data = await response.json();
      console.log(data);
      setPolicies(data.data.policies);
    } catch (error) {
      console.error('Error fetching fertilizers:', error);
    }
  };
  
  useEffect(() => {
    fetchPolicies();
  }, []);

  return (
    <div className='bg-[#ACD2AD]'>
      <h1 className="text-center text-4xl pt-4">Government Schemes</h1>
      <div>
        {policies.map((policy) => (
       <GovtPage2  policy={policy} />
        ))}
      </div>
    </div>
  );
}

export default GovtSchePage;
