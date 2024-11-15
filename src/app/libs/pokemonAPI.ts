import axios from "axios"

const basePokemonApi = "https://pokeapi.co/api/v2/"

// get all pokemon
export async function getAllPokemon() {
  try {
      const response = await axios.get(basePokemonApi + "pokemon?limit=100000&offset=0");
      return response.data.results;
  } catch (error) {
      console.error("Error fetching all Pokémon:", error);
      throw error;
  }
};

// get pokemon by name
export async function getPokemon(name: string) {
  try {
      const response = await axios.get(basePokemonApi + "pokemon/" + name);
      return response.data;
  } catch (error) {
      console.error(`Error fetching Pokémon ${name}:`, error);
      throw error;
  }
};

// Get Pokémon ability
export async function getAbility(abilityName: string) {
  try {
    const response = await axios.get(`${basePokemonApi}ability/${abilityName}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ability data for "${abilityName}":`, error);
    throw error;
  }
};

// Get Pokémon type
export async function getType(typeName: string) {
  try {
    const response = await axios.get(`${basePokemonApi}type/${typeName}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching type data for "${typeName}":`, error);
    throw error;
  }
};

// Get all generation 
export async function allGeneration(number: number) {
  try {
    const response = await axios.get(`${basePokemonApi}generation/${number}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching generation data for generation ${number}:`, error);
    throw new Error(`Failed to fetch generation data for generation ${number}`);
  }
}
