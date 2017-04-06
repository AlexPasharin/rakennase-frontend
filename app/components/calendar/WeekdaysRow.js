import React from 'react';

import ListGroup from 'react-bootstrap/lib/ListGroup'

import Weekday from './Weekday'

function WeekdaysRow(props){
  return(
    <ListGroup>
      {props.dict.weekdays.map(weekday => {
        return (
          <Weekday name = {weekday} key = {weekday}/>
        )
      })}
    </ListGroup>
  )
}

export default WeekdaysRow;
