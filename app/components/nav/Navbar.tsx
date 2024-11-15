import React from 'react'
import { ContainerLinks, ContainerNavMenu, ContainerSearchBar, Links, Logo, NavbarStyle, NavSection, SearchBar, Title } from './Nav.style'

function Navbar() {
  return (
    <>
    <NavSection/>
    <NavbarStyle>
      <ContainerNavMenu>
        <Logo>
          <Title>SHOP.CO</Title>
        </Logo>
          <ContainerLinks>
             <Links>Shop</Links>
             <Links>On Sales</Links>
             <Links>New Arrivals</Links>
             <Links>Brands</Links>
          </ContainerLinks>
         <ContainerSearchBar>
            <SearchBar placeholder='Search for products...'></SearchBar>
         </ContainerSearchBar>
      </ContainerNavMenu>
    </NavbarStyle>

    </>
  )
}

export default Navbar