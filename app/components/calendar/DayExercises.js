import React from 'react'
import Col from 'react-bootstrap/lib/Col'
import Grid from 'react-bootstrap/lib/Grid'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import OverLayTrigger from 'react-bootstrap/lib/OverLayTrigger'
import Panel from 'react-bootstrap/lib/Panel'
import PanelExercise from './PanelExercise'
import Tooltip from 'react-bootstrap/lib/Tooltip'

import ExerciseAddContainer from '../../containers/ExerciseAddContainer'
import {weekDay, timeTaken} from './utils'

function DayExercises(props) {

  const day = props.exercises.day
  const weekday = props.dict.weekdaysFull[weekDay(day, props.lang)]
  const dayFormatted = day.format("DD.MM.YYYY")
  const exercises = props.exercises.exercises

  const prevTooltip = (
    <Tooltip id="prevDayTooltip">
      {'prev day'}
    </Tooltip>
  )

  const nextTooltip = (
    <Tooltip id="nextDayTooltip">
      {'next day'}
    </Tooltip>
  )

  const programDayText = props.dict.dayProgram + ': '
  const dayText = weekday + ' ' + dayFormatted

  const title = (
    <div className = "text-center">
      <OverLayTrigger placement = "top" overlay = {prevTooltip}>
        <Glyphicon glyph = "arrow-left" onClick = {props.onPrevDay}/>
      </OverLayTrigger>
      <div className = "dayProgramHeaderText">
        <Col sm = {6}>{programDayText}</Col>
        <Col sm = {6}></Col>{dayText}</Col>
      </div>
      <OverLayTrigger placement = "top" overlay = {nextTooltip}>
        <Glyphicon glyph = "arrow-right" onClick = {props.onNextDay} />
      </OverLayTrigger>
    <span className="pull-right clickable" onClick = {() => $('#dayExercises').slideUp()}>
      <i className="fa fa-times"></i>
    </span>
    </div>
  )

  return (
    <Panel id = "dayExercises" header = {title}>
          <Col sm ={5} xs={12}>
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
          </Col>
          <Col sm = {6} xs={12}>
        <ExerciseAddContainer
          dict={props.dict}
          exercises = {exercises}
          addExercise={props.addExercise} />
        </Col>
    </Panel>
  )
}

export default DayExercises
