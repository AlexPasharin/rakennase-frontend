import React from 'react'

import ExerciseAdd from '../components/calendar/ExerciseAdd'

class ExerciseAddContainer extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      exercise: '',
      time: ''
    }

  }

  render(){

    const{exercise, time} = this.state
    const {dict} = this.props

    const onExerciseChange = event => {
      this.setState({exercise: event.target.value})
    }

    const onTimeChange = event => {
      this.setState({time: event.target.value})
    }

    const onSubmit = () => {
      this.props.addExercise(exercise, time)
    }

    return (
      <ExerciseAdd
        dict={dict}
        exercise={exercise}
        time={time}
        onExerciseChange={onExerciseChange}
        onTimeChange={onTimeChange}
        onSubmit={onSubmit}
      />)
  }


}

export default ExerciseAddContainer
