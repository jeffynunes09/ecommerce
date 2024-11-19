import React from "react";
import { ClothesContainer, ClothesContainerSub1 } from "./Clothes.Style";
import { TitleArraivals } from "../Products/Produtcs.Style";
import style2 from "../../../public/assets/style1.jpeg";
import style1 from "../../../public/assets/style2.jpeg";
import style3 from "../../../public/assets/style3.jpeg";
import style4 from "../../../public/assets/style4.jpeg";

import Image from "next/image";

function Clothes() {
  return (
    <ClothesContainer>
      <TitleArraivals>BROWSE BY DRESS STYLE</TitleArraivals>
      <ClothesContainerSub1>
        <Image src={style1} alt="" width={407} height={289}></Image>
        <Image src={style2} alt="" width={684} height={289}></Image>
        <Image src={style3} alt="" width={684} height={289}></Image>
        <Image src={style4} alt="" width={407} height={289}></Image>
      </ClothesContainerSub1>
    </ClothesContainer>
  );
}

export default Clothes;
