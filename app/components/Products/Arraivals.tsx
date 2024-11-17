import React from 'react'
import {  ButtonView, ContainerButtonView, ContainerCardArraivals, ContainerTitleArraivals, ProductsSection, TitleArraivals } from './Produtcs.Style'
import Card from '../Card/Card'

function Arraivals() {
  return (
    <>
    <ProductsSection>
      <ContainerTitleArraivals>
        <TitleArraivals>
           NEW ARRIVALS
        </TitleArraivals>
      </ContainerTitleArraivals>
      <ContainerCardArraivals>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </ContainerCardArraivals>
      <ContainerButtonView>
        <ButtonView>
             View All
        </ButtonView>
      </ContainerButtonView>
    </ProductsSection>
    </>
  )
}

export default Arraivals