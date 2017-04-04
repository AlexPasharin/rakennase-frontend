import React from 'react'

function Exercise(props){

  const {time, sport} = props

  return(
    <div>
      <time dateTime = {time}>{time}</time>
      <span>{sport}</span>
    </div>
  )
}

export default Exercise
