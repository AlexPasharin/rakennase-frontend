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

  const {dict, exercise, time, onExerciseChange, onTimeChange, onSubmit} = props

    const onFocus = () => {}

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
            type={'text'}
            value = {exercise}
            placeholder = {dict.exerciseExample}
            onChange = {onExerciseChange}
            autoFocus = {true}
            onFocus = {onFocus}
          />
        </Col>
      </FormGroup>
          </Row>

          <Row>
      <FormGroup>
        <Col sm={2}>
          <ControlLabel>{dict.exerciseTime}</ControlLabel>
        </Col>
        <Col sm={5} >
          <FormControl
            type={'text'}
            value = {time}
            placeholder = {dict.timeExample}
            onChange = {onTimeChange}
            autoFocus = {false}
            onFocus = {onFocus}
          />
        </Col>
      </FormGroup>

          </Row>

        <div className="form-group" id = "exercise_submit_error_msn"> </div>

      <Button bsStyle="default" onClick={onSubmit}>{dict.submitExercise}</Button>
      </Grid>
  )

}

export default ExerciseAdd
