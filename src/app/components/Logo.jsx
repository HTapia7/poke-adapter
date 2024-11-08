import React from 'react'
import PokeballLogo from '../assets/pokeballtwo.webp'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
      <Image
        src={PokeballLogo}
        width={55}
        height={55}
        alt="Picture of Pikachu"
        priority={true}
      />
  </div>
  )
}

export default Logo
