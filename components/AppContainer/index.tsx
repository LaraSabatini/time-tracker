import React from "react"
import TrackerContextProvider from "../../contexts/TrackerContext"
import TrackerSetter from "../TrackSetter"
import History from "../History"
import Container from "./styles"

function AppContainer() {
  return (
    <Container>
      <TrackerContextProvider>
        <TrackerSetter />
        <History />
      </TrackerContextProvider>
    </Container>
  )
}

export default AppContainer
