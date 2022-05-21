import styled from "styled-components"
import theme from "../../theme"

const Container = styled.div`
  background-color: ${theme.colors.secondary};
  border-radius: 10px;
  width: 47.77%;
  padding: 35px;

  @media (max-width: 1800px) {
    width: 80%;
  }
`

export default Container
