import React from 'react'
import { ContainerLinks, ContainerNavMenu, ContainerSearchBar, Links, Logo, NavbarStyle, NavSection, SearchBar, Title } from './Nav.style'
import { CgShoppingCart } from "react-icons/cg";
import { FaRegCircleUser } from "react-icons/fa6";
function Navbar() {
  return (
    <>
    <NavSection>
   
    </NavSection>
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
         <CgShoppingCart />
         <FaRegCircleUser />
         </ContainerSearchBar>
      </ContainerNavMenu>
    </NavbarStyle>

    </>
  )
}

export default Navbar