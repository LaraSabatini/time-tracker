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
  >([
    {
      id: 0,
      description: "Hacer el challenge de roswell studios",
      start_time: "05:09:50",
      end_time: "05:10:50",
      duration: "10 minutes",
    },
    {
      id: 1,
      description: "Went for a run outside with my dog buddy.",
      start_time: "05:09:50",
      end_time: "05:10:50",
      duration: "10 minutes",
    },
    {
      id: 2,
      description: "Went for a run",
      start_time: "05:09:50",
      end_time: "05:10:50",
      duration: "10 minutes",
    },
  ])

  const [startedAt, setStartedAt] = useState<string>("00:00:00")
  const [timer, setTimer] = useState<string>("00:00:00")

  const [windowSize, setWindowSize] = useState<string>("1366")

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
      }}
    >
      {children}
    </TrackerContext.Provider>
  )
}

export default TrackerContextProvider
