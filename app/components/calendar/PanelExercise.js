import React from 'react'

import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col'
import FormControl from 'react-bootstrap/lib/FormControl'
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

    const updateTime = event => {
      this.setState({error: ''})
      const newTime = checkTime(this.state.time)

      if(newTime === false){
        this.setState({error: 'badTimeFormat', updateText: false})
        return
      }
      if(newTime === this.props.time){
        this.setState({updateMode: false})
        return
      }
      if(timeTaken(newTime)){
        this.setState({error: 'timeTaken', updateText: false})
        return
      }
      this.setState({updateMode: false})
      changeExerciseTime(newTime)
    }

    return(
      <Row>
        <Col sm={2}>
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
        </Col>
        <Col sm={2}>
          <span>{sport}</span>
        </Col>
        <Col sm={2}>
        { updateMode ?
          (<Button onClick = {updateTime}
           >
            {dict.ready}
          </Button>) :
          (<Button className = "changeTimeButton" onClick = {allowChangeTime}>
            {dict.changeExerciseTime}
          </Button>)
        }
        </Col>
        <Col sm={2}>
          <Button onClick = {removeExercise}>
            {dict.remove}
          </Button>
        </Col>
        <Col sm={4}>
          {error === 'badTimeFormat' &&
            <span className="error_msn">{dict.badTimeFormat}</span>
          }
          {error === 'timeTaken' &&
            <span className="error_msn">{dict.timeTaken}</span>
          }
        </Col>
      </Row>
    )
  }
}

export default PanelExercise
