"use client"

import Header from "./components/Header/Header";
import Navbar from "./components/nav/Navbar";
import Arraivals from "./components/Products/Arraivals";
import Clothes from "./components/StylesClothes/Clothes";



export default function Home() {
  return (
    <>
   <Navbar/> 
   <Header/> 
   <Arraivals/>
   <Clothes/>
    </>
  );
}
