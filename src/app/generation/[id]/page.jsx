"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getOneGeneration } from "../../libs/pokemonAPI";

const GenerationDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Extract the dynamic route ID
  const [generation, setGeneration] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchGeneration = async () => {
      try {
        const data = await getOneGeneration(Number(id));
        setGeneration(data);
      } catch (err) {
        console.error("Error fetching generation details:", err);
        setError("Failed to load generation details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchGeneration();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          Loading generation details...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="container p-4 mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {generation.name}
      </h1>
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Explore Pokémon and details for {generation.name}.
      </p>
    </div>
  );
};

export default GenerationDetail;
