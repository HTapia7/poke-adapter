"use client";
import React, { useState, useEffect } from "react";
import { getOneGeneration , getPokemon} from "../libs/pokemonAPI";
import Link from "next/link";

const GenerationList = () => {
  const [generations, setGenerations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGeneration, setSelectedGeneration] = useState(null);

  useEffect(() => {
    const fetchGenerations = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/generation");
        const data = await response.json();
        setGenerations(data.results);
      } catch (err) {
        console.error("Error fetching generations:", err);
        setError("Failed to load generations. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchGenerations();
  }, []);

  const handleGenerationClick = async (id) => {
    try {
      const data = await getOneGeneration(id);
      setSelectedGeneration(data);
    } catch (err) {
      console.error(`Error fetching generation ${id}:`, err);
      setError("Failed to load generation details.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          Loading generations...
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {generations.map((generation) => {
          const generationId = generation.url.split("/").slice(-2, -1)[0];
          return (
            <button
              key={generation.name}
              onClick={() => handleGenerationClick(generationId)}
              className="p-4 transition-all border rounded-md shadow-sm bg-gray-50 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-blue-900"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {generation.name.replace("-", " ")}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                Click to explore {generation.name.replace("-", " ")}
              </p>
            </button>
          );
        })}
      </div>
      {selectedGeneration && (
        <div className="mt-12">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
              {selectedGeneration.main_region.name.toUpperCase()}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {selectedGeneration.pokemon_species.map((pokemon, index) => (
              <Link
                key={index}
                href={`/${pokemon.name}`}
                className="flex items-center justify-center p-4 transition-all bg-white border rounded-md shadow-md dark:bg-gray-800 hover:scale-105 hover:shadow-lg"
              >
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GenerationList;
