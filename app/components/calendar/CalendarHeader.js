import React from 'react'

import Col from 'react-bootstrap/lib/Col'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import Grid from 'react-bootstrap/lib/Grid'
import OverLayTrigger from 'react-bootstrap/lib/OverLayTrigger'
import Row from 'react-bootstrap/lib/Row'
import Tooltip from 'react-bootstrap/lib/Tooltip'



function CalendarHeader(props){

  const {month, year, dict, onPrevMonth, onNextMonth} = props

  const prevMonth = month === 0 ? 11 : month - 1
  const prevYear = month === 0 ? year - 1 : year
  const nextMonth = month === 11 ? 0 : month + 1
  const nextYear = month === 11 ? year + 1: year

  const prevTooltip = (
    <Tooltip id = "prevMonthToolbar">
      {dict.monthes[prevMonth] + ' ' + prevYear}
    </Tooltip>
  )

  const nextTooltip = (
    <Tooltip id = "nextMonthToolbar">
      {dict.monthes[nextMonth] + ' ' + nextYear}
    </Tooltip>
  )

  return (
    <Grid>
      <Row id= "calendar-header">

        <Col xs={3} id = "prev-month" onClick = {(e) => onPrevMonth()}>
          <OverLayTrigger placement = "left" overlay = {prevTooltip}>
            <Glyphicon glyph = "chevron-left"/>
          </OverLayTrigger>
        </Col>

        <Col xs={6} id ="month-year">
          {dict.monthes[month] + ' ' + year}
        </Col>

        <Col xs={3} id = "next-month" onClick = {(e) => onNextMonth()}>
          <OverLayTrigger placement = "right" overlay = {nextTooltip}>
            <Glyphicon glyph = "chevron-right"/>
          </OverLayTrigger>
        </Col>

      </Row>
    </Grid>
  )
}

export default CalendarHeader
