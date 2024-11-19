import { styled } from "styled-components";

export const HeaderStyle = styled.div`
  background-image: url("/assets/header.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 90vh;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const ContainerStars = styled.div`
  font-size: ${({ theme }) => theme.text.variable1};
`;
export const ContainerStar1 = styled.div`
  position: absolute;
  left: 1100px;
  top: 250px;
  font-size: ${({ theme }) => theme.text.variable2};
`;
export const ContainerStar2 = styled.div`
  position: absolute;
  left: 900px;
  top: 550px;
  font-size: ${({ theme }) => theme.text.variable1};
`;

export const ContainerHeader = styled.div`
  width: 596px;
  height: 470px;
  margin-left: 200px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TitleHeader = styled.h1`
  width: 487px;
  height: 176px;
  margin-left: 117px;
  margin-top: 220px;
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: 64px;

  display: flex;
  align-items: center;

  color: #000000;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const ContainerDescriptionHeader = styled.div``;
export const DescriptionHeader = styled.p`
  /* Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style. */

  position: absolute;
  width: 460px;
  height: 34px;
  margin-left: 99px;
  margin-top: 40px;

  font-family: "Satoshi";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: rgba(0, 0, 0, 0.6);
`;
export const ContainerButtonHeader = styled.div``;
export const ButtonHeader = styled.button`
  /* Frame 14 */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 54px;
  gap: 12px;

  position: relative;
  width: 177px;
  height: 53px;
  margin-left: 99px;
  margin-top: 140px;
  color: ${({ theme }) => theme.colors.secondary};
  background: #000000;
  border-radius: 62px;
`;

export const ContainerInfoHeader = styled.div`
  width: 596px;
  height: 74px;
  display: flex;
  gap: 25px;
  margin-top: 36px;
  margin-left: 99px;
`;
export const InfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid #acacaca9;
  padding-right: 25px;
`;

export const TitleInfo = styled.h3`
  font-size: ${({ theme }) => theme.text.subtitle};
  margin-bottom: -5px;
`;

export const Info = styled.h3`
  font-size: ${({ theme }) => theme.text.description};

  color: rgba(0, 0, 0, 0.6);
`;

export const ContainerMarcas = styled.div`
  width: 100%;
  height: 122px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.text.variable1};
  gap: 80px;
`;
