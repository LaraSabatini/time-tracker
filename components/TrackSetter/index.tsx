/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect, useState } from "react"
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
  const {
    startedAt,
    setStartedAt,
    timer,
    setTimer,
    setWindowSize,
    setHistoryList,
    historyList,
    newItem,
    setNewItem,
  } = useContext(TrackerContext)

  // DETECT WINDOW CHANGES
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      if (document.body.clientWidth <= 1342) {
        setWindowSize(document.body.clientWidth)
      } else {
        setWindowSize("1366")
      }
    })
  }

  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [paused, setPaused] = useState<boolean>(false)

  const now = new Date()
  let totalSeconds = parseInt(timer.slice(6, 8), 10)

  const countUpTimer = () => {
    totalSeconds += 1
    let hour: string | number = Math.floor(totalSeconds / 3600)
    let minute: string | number = Math.floor((totalSeconds - hour * 3600) / 60)
    let seconds: string | number = totalSeconds - (hour * 3600 + minute * 60)
    if (hour < 10) hour = `0${hour}`
    if (minute < 10) minute = `0${minute}`
    if (seconds < 10) seconds = `0${seconds}`
    setTimer(`${hour}:${minute}:${seconds}`)
  }

  const hours = now.getHours() <= 9 ? `0${now.getHours()}` : `${now.getHours()}`
  const minutes =
    now.getMinutes() <= 9 ? `0${now.getMinutes()}` : `${now.getMinutes()}`
  const seconds =
    now.getSeconds() <= 9 ? `0${now.getSeconds()}` : `${now.getSeconds()}`

  const startTimer = () => {
    setIsRunning(true)
    setStartedAt(`${hours}:${minutes}:${seconds}`)
    setNewItem({ ...newItem, start_time: `${hours}:${minutes}:${seconds}` })
  }

  const cleanStates = () => {
    setNewItem({
      id: 0,
      description: "",
      start_time: "",
      end_time: "",
      duration: "",
    })
    setTimer("00:00:00")
    setStartedAt("00:00:00")
  }

  const stopTimer = () => {
    setIsRunning(false)
    const durationArray = timer.split(":")
    let duration: string

    if (durationArray[0] !== "00") {
      duration = `${durationArray[0]} hours`
    } else if (durationArray[1] !== "00") {
      duration = `${durationArray[1]} minutes`
    } else {
      duration = `${durationArray[2]} seconds`
    }

    const newHistory = {
      ...newItem,
      id: historyList.length,
      end_time: `${hours}:${minutes}:${seconds}`,
      duration,
      description: newItem.description === "" ? "-" : newItem.description,
    }
    setHistoryList([newHistory, ...historyList])

    cleanStates()
  }

  const pauseTimer = () => {
    setPaused(!paused)
    setIsRunning(!isRunning)
  }

  let interval: any
  useEffect(() => {
    if (isRunning) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      interval = setInterval(() => {
        if (!paused) {
          countUpTimer()
        }
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning, paused])

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
              value={newItem.description}
              onChange={e =>
                setNewItem({
                  ...newItem,
                  description: e.target.value,
                })
              }
            />
          </Input>
        </InputContainer>
        <ButtonContainer>
          <Button
            disabled={startedAt !== "00:00:00"}
            onClick={startTimer}
            active
            type="button"
          >
            Start
          </Button>
          <Button
            onClick={pauseTimer}
            disabled={startedAt === "00:00:00"}
            type="button"
          >
            {paused ? "Return" : "Pause"}
          </Button>
          <Button
            onClick={stopTimer}
            disabled={startedAt === "00:00:00"}
            type="button"
          >
            Stop
          </Button>
        </ButtonContainer>
      </Content>
    </Card>
  )
}

export default TrackerSetter
