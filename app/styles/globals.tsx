'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Integral CF';
    src: url('/fonts/lntegralCF-Regular.woff') format('woff');
    
    font-style: normal;
  }
  body,html {
    width:100%;
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    background-color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
    
  }
`;

export const theme = {
  colors: {
    background: '#FFFFFF',
    primary: '#000000',
    secondary: '#F2F0F1',
    teriary: '#F0F0F0',
  },
  fonts: {
    primary: 'Integral CF',
    secondary: 'Satoshi',
  },
  text: {
    title: '2rem',
    subtitle: '1.5rem',
    description: '0.8rem',
  },
  size: {
    nav: {
      width: '100%',
      height: '100px',
    },
    navSection:{
       width: '100%',
      height: '38px'
    },
    button: {
      width: '210px',
      height: '52px',
    },
    card: {
      width: '296px',
      height: '298px',
    },
    section: {
      width: '1239px',
      height: '886px',
    },
  },
};
