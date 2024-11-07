import { getPokemon } from "../libs/pokemonAPI";
import Image from "next/image";

export default async function pokemonPage({ params }){
  const { pokemonName } = await params;

  const pokemonObject = await getPokemon(pokemonName);
    console.log(pokemonObject)

  return (
      <>
        <h1>{pokemonObject.id}</h1>
        <h1 className="text 4-xl">{pokemonName}</h1>
        <Image
          src={pokemonObject.sprites.front_default}
          width="200"
          height="200"
          alt= {"picture of " + pokemonName}
          />
          <h1>{pokemonObject.base_experience}</h1>
          <h1>{pokemonObject.height + " inches"}</h1>

      </> 
  )
}