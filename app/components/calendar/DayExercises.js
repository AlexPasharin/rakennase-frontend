import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Panel from 'react-bootstrap/lib/Panel'
import PanelExercise from './PanelExercise'
import ExerciseAddContainer from '../../containers/ExerciseAddContainer'

import {weekDay, timeTaken} from './utils'

function DayExercises(props) {

  const day = props.exercises.day
  const weekday = props.dict.weekdaysFull[weekDay(day, props.lang)]
  const dayFormatted = day.format("DD.MM.YYYY")
  const exercises = props.exercises.exercises

  const title = (
    <h1>
      {props.dict.dayProgram + ': ' + weekday + ' ' + dayFormatted}
      <span className="pull-right clickable" onClick = {() => $('#dayExercises').slideUp()}>
        <i className="fa fa-times"></i>
      </span>
    </h1>
  )

  return (
    <Panel id = "dayExercises" header = {title}>
      <Grid>
          {exercises.length === 0 ?
            <p>{props.dict.emptyProgram}</p> :
            exercises.map((exercise, index) =>
              <PanelExercise
                key={exercise.exerciseId}
                time={exercise.time}
                sport={exercise.sport}
                dict={props.dict}
                changeExerciseTime={newTime => props.changeExerciseTime(index, newTime, exercise.exerciseId)}
                removeExercise={() => props.removeExercise(index, exercise.exerciseId)}
                timeTaken={time => timeTaken(exercises, time, index)}
              />
          )}
      </Grid>
        <ExerciseAddContainer
          dict={props.dict}
          exercises = {exercises}
          addExercise={props.addExercise} />
    </Panel>
  )
}

export default DayExercises
