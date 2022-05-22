import styled from "styled-components"
import theme from "../../theme"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 39px;
  gap: 30px;
`

const CardTitle = styled.h3`
  font-family: ${theme.fonts.primary};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.m};
  line-height: 19px;
  color: ${theme.colors.black};
  margin: 0 0 -20px -70%;
`

export { Container, CardTitle }
