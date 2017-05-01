import React from 'react'
import moment from 'moment'

import Day from './Day'

function CalendarRow(props){

  return (
    <div>
      {props.days.map((day, index) => {
        const dayExercises = props.userExercises.find(obj => obj.date === day.date.format("DD.MM.YYYY"))
        const exercises =  dayExercises ? dayExercises.exercises : []

          return(
            <Day
              date = {day.date}
              thisMonth = {day.thisMonth}
              exercises = {exercises}
              key = {index}
              onClick = {() => props.onDayChange(day.date)}
            />
          )
        }
      )}
    </div>
  )
}

export default CalendarRow;
