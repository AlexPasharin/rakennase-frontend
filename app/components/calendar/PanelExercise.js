import React from 'react'

import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col'
import FormControl from 'react-bootstrap/lib/FormControl'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'

import {checkTime} from './utils'

class PanelExercise extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      updateMode: false,
      time: this.props.time.slice(), // copy of the string
      error: '',
      updateText: true
    }
  }

  render(){
    const {updateMode, time, error, updateText} = this.state
    const {sport, dict, changeExerciseTime, removeExercise, timeTaken} = this.props

    const allowChangeTime = event => {
      $('.changeTimeButton').blur()
      this.setState({updateMode: true})
    }

    const onTimeChange = event => {
      this.setState({time: event.target.value})
    }

    const onFocus = () => {this.setState({updateText: true})}

    const updateTime = () => {
      this.setState({error: ''})
      const newTime = checkTime(this.state.time)

      if(newTime === false){
        this.setState({error: 'badTimeFormat', updateText: false})
        return
      }
      if(newTime === this.props.time){
        this.setState({updateMode: false, time: newTime})
        return
      }
      if(timeTaken(newTime)){
        this.setState({error: 'timeTaken', updateText: false})
        return
      }
      this.setState({updateMode: false, time: newTime})
      changeExerciseTime(newTime)
    }

    return(
      <div>
      <Row>
        <Col sm = {4} xs = {5} className = "panel_exercise_line">
          { updateMode ?
            <FormControl
              className = {error && !updateText ? 'update_field error_msn': 'update_field'}
              type = "text"
              value = {time}
              onChange = {onTimeChange}
              onFocus = {onFocus}
              autoFocus
            /> :
            <time dateTime = {time}>{time}</time>
          }
          <span>{sport}</span>
          </Col>
        <Col sm = {6} xs = {7} className = "panel_exercise_line">
        { updateMode ?
          (<Button onClick = {updateTime}
           >
            {dict.ready}
          </Button>) :
          (<Button className = "changeTimeButton" onClick = {allowChangeTime}>
            {dict.changeExerciseTime}
          </Button>)
        }

          <Button onClick = {removeExercise}>
            {dict.remove}
          </Button>
        </Col>
        </Row>
        {error === 'badTimeFormat' &&
          <span className="error_msn">{dict.badTimeFormat}</span>
        }
        {error === 'timeTaken' &&
          <span className="error_msn">{dict.timeTaken}</span>
        }
        </div>

    )
  }
}

export default PanelExercise
