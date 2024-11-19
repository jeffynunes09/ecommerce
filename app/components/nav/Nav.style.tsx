"use client";

import styled from "styled-components";

export const NavbarStyle = styled.div`
  z-index: 111;
  margin: 0;
  padding: 0;
  width: ${({ theme }) => theme.size.nav.width};
  height: ${({ theme }) => theme.size.nav.height};
  background-color: ${({ theme }) => theme.colors.terciary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 13px 7px -4px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 13px 7px -4px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 13px 7px -4px rgba(0, 0, 0, 0.5);
`;

export const ContainerNavMenu = styled.div`
  width: 1240px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavSection = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 30px;
  width: ${({ theme }) => theme.size.navSection};
`;

export const Logo = styled.div`
  width: 128px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 38px;
`;

export const ContainerLinks = styled.ul`
  width: 422px;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 20px;
`;
export const Links = styled.li`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.text.subtitle};
`;

export const SearchBar = styled.input`
  width: 609px;
  height: 48px;
  margin-right: 10px;
  border-radius: 50px;
  border: none;
  color: ${({ theme }) => theme.colors.terciary};
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.text.subtitle};
`;
export const ContainerSearchBar = styled.div`
  margin-left: 20px;
  width: 650px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.text.title};
  gap: 10px;
`;
