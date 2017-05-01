import React from 'react'

import Panel from 'react-bootstrap/lib/Panel'
import PanelExercise from './PanelExercise'

import {weekDay} from './utils'

function DayExercises(props) {

  const day = props.exercises.day
  const weekday = props.dict.weekdaysFull[weekDay(day, props.lang)]
  const dayFormatted = day.format("DD.MM.YYYY")
  const exercises = props.exercises.exercises

  const timeTaken = (time, index) => {
    for(var i = 0; i < exercises.length; i++){
      if(i !== index && exercises[i].time === time) return true
    }
    return false
  }

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
        exercises.map((exercise, index) =>
          <PanelExercise
            key={exercise.exerciseId}
            time={exercise.time}
            sport={exercise.sport}
            dict={props.dict}
            changeExerciseTime={(newTime) => props.changeExerciseTime(index, newTime, exercise.exerciseId)}
            removeExercise={() => props.removeExercise(index, exercise.exerciseId)}
            timeTaken={(time) => timeTaken(time, index)}
          />
      )}
    </Panel>
  )
}

export default DayExercises
