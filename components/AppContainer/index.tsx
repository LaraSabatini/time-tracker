import React from "react"
import TrackerContextProvider from "../../contexts/TrackerContext"
import TrackerSetter from "../TrackSetter"
import Container from "./styles"

function AppContainer() {
  return (
    <Container>
      <TrackerContextProvider>
        <TrackerSetter />
      </TrackerContextProvider>
    </Container>
  )
}

export default AppContainer
