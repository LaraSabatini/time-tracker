/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from "react"
import { TrackerContext } from "../../contexts/TrackerContext"
import Card from "../Card"
import IconList from "../Icons/IconList"
import {
  Title,
  CardHeader,
  Input,
  InputContainer,
  Content,
  ButtonContainer,
  Button,
} from "./styles"

function TrackerSetter() {
  const { startedAt, timer } = useContext(TrackerContext)

  return (
    <Card>
      <Content>
        <CardHeader>
          <Title>
            <b>Started at:</b> {startedAt}
          </Title>
          <Title>
            <b>Timer:</b> {timer}
          </Title>
        </CardHeader>
        <InputContainer>
          <label htmlFor="description">Task Description:</label>
          <Input>
            <IconList />
            <input
              name="description"
              type="text"
              placeholder="Went for a run"
              autoComplete="off"
            />
          </Input>
        </InputContainer>
        <ButtonContainer>
          <Button active type="button">
            Start
          </Button>
          <Button type="button">Stop</Button>
        </ButtonContainer>
      </Content>
    </Card>
  )
}

export default TrackerSetter
