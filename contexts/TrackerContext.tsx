/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from "react"

export const TrackerContext = createContext({
  taskList: null,
  setTaskList: null,
  startedAt: null,
  setStartedAt: null,
  timer: null,
  setTimer: null,
})

function TrackerContextProvider({ children }: any) {
  const [taskList, setTaskList] = useState<
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

  return (
    <TrackerContext.Provider
      value={{
        taskList,
        setTaskList,
        startedAt,
        setStartedAt,
        timer,
        setTimer,
      }}
    >
      {children}
    </TrackerContext.Provider>
  )
}

export default TrackerContextProvider
