import React from 'react';
import capitalizeFirstLetter from '../libs/capitalizeFirstLetter';
import Image from 'next/image';

const PokeCards = ({ name, imageUrl, pokedexNumber }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={`${pokedexNumber}`} className="flex items-center justify-center p-8 bg-gray-100 rounded-t-lg dark:bg-gray-700">
        <Image
          className="object-contain"
          src={imageUrl}
          alt={`${name} image`}
          width={200} 
          height={200} 
          priority={true}
          quality={100}
        />
      </a>
      
      <div className="px-5 py-5">
        <a href={`${pokedexNumber}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {capitalizeFirstLetter(name)}
          </h5>
        </a>
        
        <div className="flex items-center justify-between mt-5">
          <span className="text-3xl font-bold text-gray-900 dark:text-white"># {pokedexNumber}</span>
          
          <a
            href={`${pokedexNumber}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default PokeCards;
