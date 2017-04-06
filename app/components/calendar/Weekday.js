import React from 'react'

import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'

import DayBox from './DayBox'

require("../../css/Day.css");

function Weekday(props){
  return(
    <ListGroupItem className = "weekday-box">
      <span className = "text-xs-center">
        {props.name}
      </span>
    </ListGroupItem>
  )
}

export default Weekday
