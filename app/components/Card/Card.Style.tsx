import { styled } from "styled-components";

export const ContainerCard = styled.div`
  width: ${({ theme }) => theme.size.card.width};
  height: ${({ theme }) => theme.size.card.height};
`;

export const ImgCard = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: ${({ theme }) => theme.size.card.width};
  height: ${({ theme }) => theme.size.card.height};
  border-radius: 20px;
`;

export const TitleCard = styled.h2``;

export const PriceCard = styled.h3``;
