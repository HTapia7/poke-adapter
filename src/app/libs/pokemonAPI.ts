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
}

// get pokemon by name
export async function getPokemon(name: string) {
  try {
      const response = await axios.get(basePokemonApi + "pokemon/" + name);
      return response.data;
  } catch (error) {
      console.error(`Error fetching Pokémon ${name}:`, error);
      throw error;
  }
}


export async function getAbility(name: string) {
  try {
      const response = await axios.get(basePokemonApi + "ability/" + name);
      return response.data;
  } catch (error) {
      console.error(`Error fetching Pokémon ${name}:`, error);
      throw error;
  }
}

