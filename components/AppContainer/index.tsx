import React from "react"
import TrackerContextProvider from "../../contexts/TrackerContext"
import TrackerSetter from "../TrackSetter"
import History from "../History"
import { Container, CardTitle } from "./styles"

function AppContainer() {
  return (
    <Container>
      <TrackerContextProvider>
        <TrackerSetter />
        <CardTitle>Previous tasks</CardTitle>
        <History />
      </TrackerContextProvider>
    </Container>
  )
}

export default AppContainer
