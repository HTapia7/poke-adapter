"use client"
import { useState } from 'react';
import axios from 'axios';

function Searchbar() {
  const [inputValue, setInputValue] = useState('');
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = (event) => {
    event.preventDefault();
    if (!inputValue) return;

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${inputValue.toLowerCase()}`)
      .then((response) => {
        setPokemonList((prevList) => [
          ...prevList,
          response.data,
        ]);
        setError(null);
      })
      .catch(() => {
        setError("Pokémon not found. Please try another name.");
      });
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form className="max-w-md mx-auto p-5 w-full" onSubmit={handleSearch}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Pokémon..."
          value={inputValue}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div>
        {pokemonList.map((pokemon, index) => (
          <div key={index} className="mt-4 border p-4 rounded bg-gray-100">
            <p><strong>Name:</strong> {pokemon.name}</p>
            <p><strong>ID:</strong> {pokemon.id}</p>
            <p><strong>Base Experience:</strong> {pokemon.base_experience}</p>
            <p><strong>Height:</strong> {pokemon.height}</p>
            <p><strong>Weight:</strong> {pokemon.weight}</p>
          </div>
        ))}
      </div>
    </form>
  );
}

export default Searchbar;
