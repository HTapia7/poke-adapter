import React from 'react'
import PokeballLogo from '../assets/pokeballtwo.webp'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
      <Image
        src={PokeballLogo}
        width={60}
        height={60}
        alt="Picture of Pikachu"
        priority={true}
        quality={100}
      />
  </div>
  )
}

export default Logo
