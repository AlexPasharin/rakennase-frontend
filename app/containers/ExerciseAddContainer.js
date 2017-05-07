import React from 'react'

import ExerciseAdd from '../components/calendar/ExerciseAdd'
import {checkTime, timeTaken} from '../components/calendar/utils'

class ExerciseAddContainer extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      exercise: '',
      time: '',
      emptyExerciseError: false,
      badTimeFormatError: false,
      timeTakenError: false
    }
  }

  render(){

    const{exercise, time, emptyExerciseError, badTimeFormatError, timeTakenError} = this.state
    const {dict, exercises, addExercise} = this.props
    const error = emptyExerciseError || badTimeFormatError || timeTakenError

    const onExerciseChange = event => {
      this.setState({exercise: event.target.value, emptyExerciseError: false})
    }

    const onTimeChange = event => {
      this.setState({time: event.target.value, badTimeFormatError: false, timeTakenError: false})
    }

    const onSubmit = () => {
      if(!exercise){
        this.setState({emptyExerciseError: true})
      }

      const timeToSubmit = checkTime(time)

      if(!timeToSubmit){
        this.setState({badTimeFormatError: true})
      } else if(timeTaken(exercises, timeToSubmit)){
        this.setState({timeTakenError: true})
      }else {
        addExercise(exercise, timeToSubmit)
      }
    }

    return (
      <ExerciseAdd
        dict={dict}
        exercise={exercise}
        time={time}
        onExerciseChange={onExerciseChange}
        onTimeChange={onTimeChange}
        onSubmit={onSubmit}
        badTimeFormat={badTimeFormatError}
        timeTaken={timeTakenError}
        emptyExercise={emptyExerciseError}
      />)
  }


}

export default ExerciseAddContainer
