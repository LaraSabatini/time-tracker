import styled, { css } from "styled-components"
import theme from "../../theme"

const Table = styled.div``

const TableTitle = styled.h5<{ desktop?: boolean }>`
  font-family: ${theme.fonts.primary};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.m};
  line-height: 19px;
  color: ${theme.colors.black};
  margin: 0;
  width: 155px;

  ${props =>
    !props.desktop &&
    css`
      font-size: ${theme.fontSizes.s};
      width: 100px;
    `}
`

const TableHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const Info = styled.div`
  display: flex;

  p {
    width: 155px;
  }
`

const Items = styled.div`
  padding-top: 11px;
  .row {
    border-bottom: 1px solid #c4c4c4;
  }
  & > div:last-child {
    border-bottom: 1px solid transparent;
  }
`

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 14px;
  padding-top: 17px;
`

const Item = styled.p`
  line-height: 16px;
  font-family: ${theme.fonts.primary};
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.s};
  color: ${theme.colors.black};
  margin: 0;
`

const Information = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: column;
`

const TimeInfo = styled.div`
  display: flex;

  margin-top: 10px;

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`

const MobileContainer = styled.div`
  .row {
    padding-bottom: 14px;
    border-bottom: 1px solid #c4c4c4;
    padding-top: 14px;
  }
  & > div:last-child {
    border-bottom: 1px solid transparent;
  }
`

export {
  Table,
  TableTitle,
  TableHeader,
  Info,
  Items,
  Row,
  Item,
  Information,
  TimeInfo,
  MobileContainer,
}
