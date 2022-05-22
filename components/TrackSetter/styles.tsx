import styled, { css } from "styled-components"
import theme from "../../theme"

const Title = styled.p`
  font-family: ${theme.fonts.primary};
  b {
    font-weight: ${theme.fontWeights.bold};
  }
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.m};
  line-height: 19px;
  color: ${theme.colors.black};
  margin: 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  width: 90%;
  margin: 0 auto;
`

const CardHeader = styled.div`
  display: flex;
  gap: 46px;
  align-items: center;
`

const Input = styled.div`
  display: flex;
  align-items: center;
  padding: 13px;
  background: white;
  border-radius: 10px;
  gap: 10px;
  border: 1px solid ${theme.colors.inputs};
  input {
    width: 100%;
    border: none;
    outline: none;
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fontWeights.medium};
    font-size: ${theme.fontSizes.m};
    line-height: 19px;
    letter-spacing: 0.2px;
    ::placeholder {
      color: ${theme.colors.placeholders};
    }
  }
`

const InputContainer = styled.div`
  label {
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fontWeights.normal};
    font-size: ${theme.fontSizes.s};
    line-height: 16px;
    color: ${theme.colors.black};
  }
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: flex-end;
`

const Button = styled.button<{ active?: boolean; disabled?: boolean }>`
  line-height: 19px;
  letter-spacing: 0.46px;
  font-family: ${theme.fonts.primary};
  font-weight: ${theme.fontWeights.medium};
  font-size: ${theme.fontSizes.m};
  color: ${theme.colors.primary};

  border: 1px solid ${theme.colors.primary};
  border-radius: 10px;
  cursor: pointer;
  padding: 8px 22px;
  ${props =>
    props.active &&
    css`
      background-color: ${theme.colors.primary};
      color: white;
    `}

  ${props =>
    props.disabled &&
    css`
      opacity: 0.3;
      cursor: auto;
    `}
`

export {
  Title,
  CardHeader,
  Input,
  InputContainer,
  Content,
  ButtonContainer,
  Button,
}
