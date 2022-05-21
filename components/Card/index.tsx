import React from "react"
import Container from "./styles"

export interface CardInterface {
  children: JSX.Element | JSX.Element[] | React.ReactNode
}

function Card({ children }: CardInterface) {
  return <Container>{children}</Container>
}

export default Card
