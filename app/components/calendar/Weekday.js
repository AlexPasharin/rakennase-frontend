import React from 'react';
import DayBox from './DayBox'

require("../../css/Day.css");

function Weekday(props){

  return(
    <DayBox
      type = "weekday"
      onClick = {e => preventDefault(e)}
      >
      <span className = "text-xs-center">
        {props.name}
      </span>
    </DayBox>
  )

}


export default Weekday;
