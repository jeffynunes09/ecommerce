import React from "react";
import {
  ButtonHeader,
  ContainerButtonHeader,
  ContainerDescriptionHeader,
  ContainerHeader,
  ContainerInfoHeader,
  ContainerMarcas,
  ContainerTitle,
  DescriptionHeader,
  HeaderStyle,
  Info,
  InfoHeader,
  TitleHeader,
  TitleInfo,
} from "./Header.style";

function Header() {
  return (
    <>
      <HeaderStyle>
        <ContainerHeader>
          <ContainerTitle>
            <TitleHeader>FIND CLOTHES THAT MATCHES YOUR STYLE</TitleHeader>
          </ContainerTitle>
          <ContainerDescriptionHeader>
            <DescriptionHeader>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </DescriptionHeader>
          </ContainerDescriptionHeader>
          <ContainerButtonHeader>
            <ButtonHeader>Shop Now</ButtonHeader>
          </ContainerButtonHeader>
          <ContainerInfoHeader>
            <InfoHeader>
              <TitleInfo>200+</TitleInfo>
              <Info>International Brands</Info>
            </InfoHeader>

            <InfoHeader>
              <TitleInfo>200+</TitleInfo>
              <Info>International Brands</Info>
            </InfoHeader>
            <InfoHeader>
              <TitleInfo>200+</TitleInfo>
              <Info>International Brands</Info>
            </InfoHeader>
          </ContainerInfoHeader>
        </ContainerHeader>
      </HeaderStyle>
      <ContainerMarcas>
        <p>Gucci</p>
        <p>Prada</p>
        <p>Versace</p>
        <p>Calvin Klein</p>
        <p>Zara</p>
      </ContainerMarcas>
    </>
  );
}

export default Header;
