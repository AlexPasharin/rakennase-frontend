import React from 'react'

require("../../css/Day.css")


function DayBox(props){

  /*
      type - day if wrapper for a day square, weekday if wrapper for
   */

  return(
    <a href = "#"
       id = {props.date}
       className = {props.type + "-box list-group-item"}
       onClick = {props.onClick}
      >
      {props.children}
    </a>
  )
}


export default DayBox
