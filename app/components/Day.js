import React from 'react'
import moment from 'moment'
import DayBox from './DayBox'
import Exercise from './Exercise'

require("../css/Day.css");

function Day(props){

  const {date, thisMonth, exercises} = props

  var className = "square";

  if(!thisMonth){
    className += " other-month";
  }
  // if(isToday){
  //   className += " today";
  // }

  function onClick(e){
      e.preventDefault();
  }

  return(
    <DayBox
      date = {date.format("DD.MM.YYYY")}
      type = "day"
      onClick = {onClick}
      >
      <div className = {className}>
        <span className = "badge">
            {date.date()}
        </span>
        <div className = "content">
            {exercises.map(exercise => <Exercise time ={exercise.time} sport = {exercise.sport} key = {exercise.exerciseId}/>)}
        </div>
      </div>
    </DayBox>
  )

}

//

export default Day;
