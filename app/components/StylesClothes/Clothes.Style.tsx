import styled from "styled-components";

export const ClothesContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  height: ${({ theme }) => theme.size.section.height};
  width: ${({ theme }) => theme.size.section.width};
  border-radius: 30px;
  border: none;
`;

export const ClothesContainerSub1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 1200px;
  flex-wrap: wrap;

  img {
    border-radius: 20px;
  }
`;
