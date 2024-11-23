"use client";
import React, { useEffect, useState } from "react";
import { getType, getOneType } from "../libs/pokemonAPI";

const typeColors = {
  normal: "bg-gray-400",
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400",
  ice: "bg-cyan-300",
  fighting: "bg-orange-600",
  poison: "bg-purple-500",
  ground: "bg-yellow-600",
  flying: "bg-indigo-300",
  psychic: "bg-pink-500",
  bug: "bg-lime-500",
  rock: "bg-gray-600",
  ghost: "bg-indigo-900",
  dark: "bg-gray-800",
  dragon: "bg-indigo-500",
  steel: "bg-gray-500",
  fairy: "bg-pink-300",
};

const TypeList = () => {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTypeData, setSelectedTypeData] = useState(null);
  const [typeLoading, setTypeLoading] = useState(false);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const allTypes = await getType();
        setTypes(allTypes.results);
      } catch (err) {
        setError("Failed to load types. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchTypes();
  }, []);

  const handleTypeClick = async (typeName) => {
    setTypeLoading(true);
    try {
      const data = await getOneType(typeName);
      setSelectedTypeData(data);
    } catch (err) {
      console.error("Failed to fetch type details:", err);
    } finally {
      setTypeLoading(false);
    }
  };

  if (loading) {
    return <p>Loading types...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {types.map((type) => (
          <div
            key={type.name}
            onClick={() => handleTypeClick(type.name)}
            className={`p-4 text-center rounded-md cursor-pointer shadow-md ${
              typeColors[type.name] || "bg-gray-300"
            }`}
          >
            <p className="text-white capitalize">{type.name}</p>
          </div>
        ))}
      </div>

      {typeLoading && <p>Loading type details...</p>}
      {selectedTypeData && (
        <div className="p-4 mt-4 bg-gray-100 rounded-md">
          <h2 className="text-xl font-bold capitalize">
            Type: {selectedTypeData.name}
          </h2>
          <h3 className="mt-2 font-semibold">Damage Relations:</h3>
          <div className="mt-2">

            <div className="mb-4">
              <p className="font-bold">Double Damage From:</p>
              <ul>
                {selectedTypeData.damage_relations.double_damage_from.map((type) => (
                  <li
                    key={type.name}
                    className={`inline-block m-1 px-2 py-1 rounded text-white capitalize ${
                      typeColors[type.name] || "bg-gray-300"
                    }`}
                  >
                    {type.name}
                  </li>
                ))}
              </ul>
              <p className="mt-2 font-bold">Double Damage To:</p>
              <ul>
                {selectedTypeData.damage_relations.double_damage_to.map((type) => (
                  <li
                    key={type.name}
                    className={`inline-block m-1 px-2 py-1 rounded text-white capitalize ${
                      typeColors[type.name] || "bg-gray-300"
                    }`}
                  >
                    {type.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <p className="font-bold">Half Damage From:</p>
              <ul>
                {selectedTypeData.damage_relations.half_damage_from.map((type) => (
                  <li
                    key={type.name}
                    className={`inline-block m-1 px-2 py-1 rounded text-white capitalize ${
                      typeColors[type.name] || "bg-gray-300"
                    }`}
                  >
                    {type.name}
                  </li>
                ))}
              </ul>
              <p className="mt-2 font-bold">Half Damage To:</p>
              <ul>
                {selectedTypeData.damage_relations.half_damage_to.map((type) => (
                  <li
                    key={type.name}
                    className={`inline-block m-1 px-2 py-1 rounded text-white capitalize ${
                      typeColors[type.name] || "bg-gray-300"
                    }`}
                  >
                    {type.name}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-bold">No Damage From:</p>
              <ul>
                {selectedTypeData.damage_relations.no_damage_from.map((type) => (
                  <li
                    key={type.name}
                    className={`inline-block m-1 px-2 py-1 rounded text-white capitalize ${
                      typeColors[type.name] || "bg-gray-300"
                    }`}
                  >
                    {type.name}
                  </li>
                ))}
              </ul>
              <p className="mt-2 font-bold">No Damage To:</p>
              <ul>
                {selectedTypeData.damage_relations.no_damage_to.map((type) => (
                  <li
                    key={type.name}
                    className={`inline-block m-1 px-2 py-1 rounded text-white capitalize ${
                      typeColors[type.name] || "bg-gray-300"
                    }`}
                  >
                    {type.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TypeList;
