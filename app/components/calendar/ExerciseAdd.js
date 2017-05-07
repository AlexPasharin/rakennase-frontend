import React from 'react'

import Button from 'react-bootstrap/lib/Button'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Grid from 'react-bootstrap/lib/Grid'
import Panel from 'react-bootstrap/lib/Panel'
import PanelExercise from './PanelExercise'
import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import Row from 'react-bootstrap/lib/Row'

function ExerciseAdd(props){

  const {dict, exercise, time, emptyExercise, badTimeFormat, timeTaken, onExerciseChange, onTimeChange, onSubmit} = props

    const onFocus = () => {}

    const exerciseErrorText = emptyExercise ? dict.emptyExercise : ''

    let errorText = ''
    if(badTimeFormat) errorText = dict.badTimeFormat
    else if(timeTaken) errorText = dict.timeTaken

  return(
    <Grid>
      <h1>{dict.addExercise}</h1>

    <Row>
      <FormGroup>
        <Col sm={2}>
          <ControlLabel>{dict.exerciseName}</ControlLabel>
        </Col>
        <Col sm={5}>
          <FormControl
            className = {emptyExercise ? 'error_msn' : ''}
            type={'text'}
            value = {exercise}
            placeholder = {dict.exerciseExample}
            onChange = {onExerciseChange}
            autoFocus = {true}
            onFocus = {onFocus}
          />
        </Col>
      </FormGroup>
      <Col sm={5} >
        <span className = "error_msn">
          {exerciseErrorText}
        </span>
      </Col>
          </Row>

          <Row>
      <FormGroup>
        <Col sm={2}>
          <ControlLabel>{dict.exerciseTime}</ControlLabel>
        </Col>
        <Col sm={5} >
          <FormControl
            className = {(badTimeFormat || timeTaken) ? 'error_msn' : ''}
            type={'text'}
            value = {time}
            placeholder = {dict.timeExample}
            onChange = {onTimeChange}
            autoFocus = {false}
            onFocus = {onFocus}
          />
        </Col>
      </FormGroup>
      <Col sm={5} >
        <span className = "error_msn">
          {errorText}
        </span>
      </Col>

          </Row>

      <Button bsStyle="default" onClick={onSubmit}>{dict.submitExercise}</Button>
      </Grid>
  )

}

export default ExerciseAdd
