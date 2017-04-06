import React from 'react'

import Jumbotron from 'react-bootstrap/lib/Jumbotron'

function DayExercises(props) {

  return (
    <Jumbotron>
      {props.exercises.day.format("DD.MM.YYYY")}
      {props.exercises.exercises.map(exercise =>
        <p>{exercise.time}</p>
      )}
    </Jumbotron>
  )
}

export default DayExercises
