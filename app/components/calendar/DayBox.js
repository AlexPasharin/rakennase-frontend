import React from 'react'

require("../../css/Day.css")

function DayBox(props){
  return(
    <a href = "#"
      id = {props.date}
      className = {"day-box list-group-item"}
      onClick = {props.onClick}
    >
      {props.children}
    </a>
  )
}


export default DayBox
