import { getPokemon } from "../libs/pokemonAPI";
import Image from "next/image";

export default async function PokemonPage({ params }) {
  const { pokemonName } = await params;
  const pokemonObject = await getPokemon(pokemonName);

  return (
    <>
      <h1>{pokemonObject.id}</h1>
      <h1 className="text-4xl">{pokemonName}</h1>
      <Image
        src={pokemonObject.sprites.front_default}
        width={200}
        height={200}
        priority
        alt={`picture of ${pokemonName}`}
      />
      <h1>Base Experience: {pokemonObject.base_experience}</h1>
      <h1>Height: {pokemonObject.height} inches</h1>
      <h1>Weight: {pokemonObject.weight} pounds</h1>
      <h2>Types:</h2>
      <ul>
        {pokemonObject.types.map((typeInfo) => (
          <li key={typeInfo.slot}>{typeInfo.type.name}</li>
        ))}
      </ul>
      <ul>
        {pokemonObject.types.map((typeInfo) => (
          <li key={typeInfo.slot}>{typeInfo.type.name}</li>
        ))}
      </ul>

      <h2>Stats:</h2>
      <ul>
        {pokemonObject.stats.map((statInfo, index) => (
          <li key={index}>
            {statInfo.stat.name}: {statInfo.base_stat}
          </li>
        ))}
      </ul>
    </>
  );
}
