'use client';

import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from './registry';
import { theme } from './styles/globals';
import { GlobalStyle } from './styles/globals';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
