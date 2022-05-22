import React, { useContext } from "react"
import { TrackerContext } from "../../contexts/TrackerContext"
import Card from "../Card"
import {
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
} from "./styles"

function History() {
  const { historyList, windowSize } = useContext(TrackerContext)
  return (
    <Card>
      <Table>
        {windowSize === "1366" ? (
          <>
            <TableHeader>
              <TableTitle desktop>Description</TableTitle>
              <Info>
                <TableTitle desktop>Start Time</TableTitle>
                <TableTitle desktop>End Time</TableTitle>
                <TableTitle desktop>Duration</TableTitle>
              </Info>
            </TableHeader>
            <Items>
              {historyList.length > 0 &&
                historyList.map(
                  (item: {
                    id: number
                    description: string
                    start_time: string
                    end_time: string
                    duration: string
                  }) => (
                    <Row className="row" key={item.id}>
                      <Item>{item.description}</Item>
                      <Info>
                        <Item>{item.start_time}</Item>
                        <Item>{item.end_time}</Item>
                        <Item>{item.duration}</Item>
                      </Info>
                    </Row>
                  ),
                )}
            </Items>
          </>
        ) : (
          <MobileContainer>
            {historyList.length > 0 &&
              historyList.map(
                (item: {
                  id: number
                  description: string
                  start_time: string
                  end_time: string
                  duration: string
                }) => (
                  <Information className="row" key={item.id}>
                    <TableTitle>Description</TableTitle>
                    <Item>{item.description}</Item>
                    <TimeInfo>
                      <div>
                        <TableTitle>Start Time</TableTitle>
                        <Item>{item.start_time}</Item>
                      </div>
                      <div>
                        <TableTitle>End Time</TableTitle>
                        <Item>{item.end_time}</Item>
                      </div>
                      <div>
                        <TableTitle>Duration</TableTitle>
                        <Item>{item.duration}</Item>
                      </div>
                    </TimeInfo>
                  </Information>
                ),
              )}
          </MobileContainer>
        )}
      </Table>
    </Card>
  )
}

export default History
