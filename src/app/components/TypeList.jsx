"use client";
import React, { useEffect, useState } from "react";
import { getType } from "../libs/pokemonAPI";

const TypeList = () => {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const allTypes = await getType();
        if (allTypes && Array.isArray(allTypes.results)) {
          setTypes(allTypes.results);
        } else {
          setError("Unexpected response structure");
        }
      } catch (error) {
        setError("Failed to load types. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchTypes();
  }, []);

  if (loading) {
    return (
      <div className="p-4">
        <p className="text-gray-500">Loading types...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
        {types.map((type) => (
          <div
            key={type.name}
            className="p-4 text-center transition-all duration-300 bg-gray-100 border rounded-md shadow-sm hover:bg-blue-500 hover:text-white hover:scale-105"
          >
            <h3 className="text-lg font-bold capitalize">{type.name}</h3>
          </div>
        ))}
    </div>
  );
};

export default TypeList;
