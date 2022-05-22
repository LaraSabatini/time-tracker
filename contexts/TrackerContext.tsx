/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from "react"

export const TrackerContext = createContext({
  historyList: null,
  setHistoryList: null,
  startedAt: null,
  setStartedAt: null,
  timer: null,
  setTimer: null,
  windowSize: null,
  setWindowSize: null,
  newItem: null,
  setNewItem: null,
})

function TrackerContextProvider({ children }: any) {
  const [historyList, setHistoryList] = useState<
    {
      id: number
      description: string
      start_time: string
      end_time: string
      duration: string
    }[]
  >([])

  const [startedAt, setStartedAt] = useState<string>("00:00:00")
  const [timer, setTimer] = useState<string>("00:00:00")

  const [windowSize, setWindowSize] = useState<string>("1366")

  const [newItem, setNewItem] = useState<{
    id: number
    description: string
    start_time: string
    end_time: string
    duration: string
  }>({
    id: 0,
    description: "",
    start_time: "",
    end_time: "",
    duration: "",
  })

  return (
    <TrackerContext.Provider
      value={{
        historyList,
        setHistoryList,
        startedAt,
        setStartedAt,
        timer,
        setTimer,
        windowSize,
        setWindowSize,
        newItem,
        setNewItem,
      }}
    >
      {children}
    </TrackerContext.Provider>
  )
}

export default TrackerContextProvider
