import React from 'react'
import { ContainerCard, ImgCard, PriceCard, TitleCard } from './Card.Style'
import Image from 'next/image'
import camisa1 from "@/public/assets/camisa1.png"

function Card() {
  return (
    <ContainerCard>
      <ImgCard>
      <Image src={camisa1} width={300} height={220} alt=''/>
      </ImgCard>
      <TitleCard>T-SHIRT WITH TAPE DETAILS</TitleCard>
      <PriceCard>$120</PriceCard>
    </ContainerCard>
  )
}

export default Card