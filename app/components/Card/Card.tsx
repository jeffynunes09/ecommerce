import React, { useState } from "react";
import { ContainerCard, ImgCard, PriceCard, TitleCard } from "./Card.Style";
import styled from "styled-components";
import Image from "next/image";
import camisa1 from "@/public/assets/camisa1.png";

// Estilo para as estrelas
const StarContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
`;

const Star = styled.svg<{ $isActive: boolean }>`
  width: 24px;
  height: 24px;
  cursor: pointer;
  fill: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.stars : theme.colors.gray};
`;

function Card() {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  return (
    <ContainerCard>
      <ImgCard>
        <Image src={camisa1} width={300} height={220} alt="" />
      </ImgCard>
      <TitleCard>T-SHIRT WITH TAPE DETAILS</TitleCard>

      <StarContainer>
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            $isActive={index < rating} // Usando a prop $isActive
            onClick={() => handleStarClick(index)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.568L24 9.423l-6 5.848 1.416 8.229L12 18.813l-7.416 4.687L6 15.271 0 9.423l8.332-1.268z" />
          </Star>
        ))}
      </StarContainer>
      <PriceCard>$120</PriceCard>
    </ContainerCard>
  );
}

export default Card;
