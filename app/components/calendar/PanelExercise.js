import React from 'react'

import Button from 'react-bootstrap/lib/Button'
import FormControl from 'react-bootstrap/lib/FormControl'

import {checkTime} from './utils'

class PanelExercise extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      updateMode: false,
      time: this.props.time
    }
  }

  render(){
    const {updateMode, time} = this.state
    const {sport, dict, changeExerciseTime, removeExercise, timeTaken} = this.props

    const onUpdateModeChange = newMode => {
      this.setState({updateMode: newMode})
    }

    const onTimeChange = event => {
      this.setState({time: event.target.value})
    }

    const updateTime = event => {
      const newTime = this.state.time

      if(newTime === false){
        console.log("Anna aika muodossa HH:MM tai HH.MM")
        return
      }
      if(newTime === this.props.time){
        onUpdateModeChange(false)
        return
      }
      if(timeTaken(newTime)){
        console.log("Sinulla on jo ohjelmaa tähän aikaan")
        return
      }
      onUpdateModeChange(false)
      changeExerciseTime(newTime)
    }

    return(
      <div>
        { updateMode ?
          <FormControl
            type = "text"
            value = {time}
            onChange = {onTimeChange}
          /> :
          <time dateTime = {time}>{time}</time>
        }
        <span>{sport}</span>
        { updateMode ?
          (<Button onClick = {updateTime}
           >
            {dict.ready}
          </Button>) :
          (<Button onClick = {() =>  onUpdateModeChange(true)}>
            {dict.changeExerciseTime}
          </Button>)
        }
        <Button onClick = {removeExercise}>
          {dict.remove}
        </Button>
      </div>
    )
  }
}

export default PanelExercise
