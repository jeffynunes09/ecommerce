import styled from "styled-components";


export const ProductsSection = styled.div`

margin:0 auto;
width:${({theme}) => theme.size.section.width};
height:${({theme}) => theme.size.section.height};
background-color:${({theme}) => theme.colors.background};
display:flex;
flex-direction:column;
align-items:center;







`;


export const ContainerTitleArraivals = styled.div`

display:flex;
align-items:center;
justify-content:center;



`

export const TitleArraivals = styled.h1`

font-weight: 900;
font-size: 48px;
line-height: 48px;
margin-top:60px ;
display: flex;
align-items: center;

color: #000000;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const ContainerCardArraivals = styled.div`

display:flex;
margin-top:60px;
justify-content:center;
width:${({theme}) => theme.size.section.width};
height:${({theme}) => theme.size.section.height};
gap:20px;


`

export const ContainerButtonView = styled.div`



`

export const ButtonView =styled.button`



`