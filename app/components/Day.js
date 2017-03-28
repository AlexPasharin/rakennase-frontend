import React from 'react';
import moment from 'moment';
import DayBox from './DayBox'

require("../css/Day.css");

function Day(props){

  const day = props.date; // moment object representing the date
  const today = moment();

  const isToday = day.date()  === today.date() &&
                  day.month() === today.month() &&
                  day.year()  === today.year()

  var className = "square";

  if(day.month() !== props.calendarMonth){
    className += " other-month";
  }
  if(isToday){
    className += " today";
  }

  function onClick(e){
      e.preventDefault();
  }

  return(
    <DayBox
      type = "day"
      onClick = {onClick}
      >
      <div className = {className}>
        <span className = "badge">
            {day.date()}
        </span>
        <div className = "content">
        </div>
      </div>
    </DayBox>
  )

}


export default Day;
