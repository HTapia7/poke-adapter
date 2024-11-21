import { getPokemon } from "../libs/pokemonAPI";
import Image from "next/image";

export default async function PokemonPage({ params }) {
  const { pokemonName } = await params;
  const pokemonObject = await getPokemon(pokemonName);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="w-full max-w-4xl p-8 bg-gray-100 rounded-lg shadow-md">
        <div className="flex items-center mb-6 space-x-6">
          <Image
            src={pokemonObject.sprites.front_default}
            width={200}
            height={200}
            priority
            alt={`Picture of ${pokemonName}`}
            className="border border-gray-300 rounded-lg"
          />
          <div className="space-y-2">
            <h1 className="text-4xl font-bold capitalize">{pokemonObject.name}</h1>
            <p className="text-gray-700">ID: {pokemonObject.id}</p>
            <p className="text-gray-700">Base Experience: {pokemonObject.base_experience}</p>
            <p className="text-gray-700">Height: {pokemonObject.height} inches</p>
            <p className="text-gray-700">Weight: {pokemonObject.weight} pounds</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="mb-4 text-2xl font-semibold">Types</h2>
          <ul className="flex space-x-4">
            {pokemonObject.types.map((typeInfo) => (
              <li
                key={typeInfo.slot}
                className="px-4 py-1 text-white capitalize bg-blue-500 rounded-full"
              >
                {typeInfo.type.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="mb-4 text-2xl font-semibold">Stats</h2>
          <ul className="grid grid-cols-2 gap-4">
            {pokemonObject.stats.map((statInfo, index) => (
              <li
                key={index}
                className="p-4 bg-white border border-gray-200 rounded-lg shadow-md"
              >
                <span className="font-medium capitalize">{statInfo.stat.name}:</span>{" "}
                <span className="font-bold text-blue-600">{statInfo.base_stat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
