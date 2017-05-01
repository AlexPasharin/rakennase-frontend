import React from 'react'
import classNames from 'classnames'
import moment from 'moment'

import Badge from 'react-bootstrap/lib/Badge'

import DayBox from './DayBox'
import Exercise from './Exercise'

require("../../css/Day.css")

function Day(props){

  const {date, thisMonth, exercises} = props
  var isToday = moment().format("DD.MM.YYYY") === date.format("DD.MM.YYYY")

  function onClick(e){
      e.preventDefault()
      props.onClick()
      $('html,body').scrollTop(0) // jumps to the top of the page
      $('#dayExercises').slideDown()
  }

  return(
    <DayBox
      date = {date.format("DD.MM.YYYY")}
      onClick = {onClick}
    >
      <div className = {classNames("square", {
          "other-month": !thisMonth,
          "today": isToday
        })}>
        <Badge>{date.date()}</Badge>
        <div className = "content">
          {exercises.map(exercise => <Exercise time ={exercise.time} sport = {exercise.sport} key = {exercise.exerciseId}/>)}
        </div>
      </div>
    </DayBox>
  )

}

//{exercises.map(exercise => <Exercise time ={exercise.time} sport = {exercise.sport} key = {exercise.exerciseId}/>)}

export default Day;
