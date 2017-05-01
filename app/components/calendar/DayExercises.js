import React from 'react'

import Panel from 'react-bootstrap/lib/Panel'

import {weekDay} from './utils'

function DayExercises(props) {

  const day = props.exercises.day
  const weekday = props.dict.weekdaysFull[weekDay(day, props.lang)]
  const dayFormatted = day.format("DD.MM.YYYY")
  const exercises = props.exercises.exercises

  return (
    <Panel id = "dayExercises">
      <span className="pull-right clickable" onClick = {() => $('#dayExercises').slideUp()}>
        <i className="fa fa-times"></i>
      </span>
      <div>
        {props.dict.dayProgram}
        {' ' + weekday}
        {' ' + dayFormatted}
      </div>
      {exercises.length === 0 ?
        <p>{props.dict.emptyProgram}</p> :
        exercises.map(exercise => <p key={exercise.exerciseId}>{exercise.time + ' ' + exercise.sport}</p>
      )}
    </Panel>
  )
}

export default DayExercises
