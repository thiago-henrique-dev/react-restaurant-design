import React from 'react'
import Navbar from '../Navbar'
import { HeroContainer, HeroContent, HeroH1, HeroP, HeroItems, HeroBtn } from "./HeroElement"

export default function Hero() {
  return (
    <>
    <HeroContainer>
        <Navbar/>
        <HeroContent>
            <HeroItems>
                <HeroH1>Greatest Pizza Ever</HeroH1>
                <HeroP>Ready in 60 seconds</HeroP>
                <HeroBtn>Place Older</HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
    </>
  )
}