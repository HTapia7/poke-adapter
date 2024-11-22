"use client";
import React, { useState, useEffect } from "react";
import { getGeneration } from "../libs/pokemonAPI"; 

const GenerationList = () => {
  const [generations, setGenerations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenerations = async () => {
      try {
        const allGenerations = await getGeneration(); 
        setGenerations(allGenerations);
      } catch (error) {
        console.error("Error fetching generations:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchGenerations(); 
  }, []);

  if (loading) {
    return <p>Loading generations...</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {generations.map((generation, index) => (
        <div key={index} className="p-4 border rounded-md shadow-sm">
          <h3 className="text-lg font-bold text-white">{generation.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default GenerationList;
