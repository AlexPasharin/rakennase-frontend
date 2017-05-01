import React from 'react'
import moment from 'moment'

import CalendarHeader from './CalendarHeader'
import DayExercises from './DayExercises'
import Month from './Month'
import UserGreeting from '../UserGreeting'

require("../../css/Calendar.css")

class Calendar extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      chosenDayExercises: null
    }

    this.onChosenDay = (day) => {
      return () => {
        let dayExercises = this.props.userExercises.find(obj => obj.date === day.format("DD.MM.YYYY"))
        dayExercises = dayExercises ? dayExercises.exercises : []

        this.setState({chosenDayExercises:
          {
            day: day,
            exercises: dayExercises
          }
        })}
    }
  }

  render(){
    const {month, year, rows, username, userExercises, lang, dict, onPrevMonth, onNextMonth} = this.props

    return(
      <div id="calendar_wrapper">
        <UserGreeting username = {username} dict = {dict}/>
        {this.state.chosenDayExercises &&
          <DayExercises
            lang = {lang}
            dict = {dict}
            exercises = {this.state.chosenDayExercises}
          />
        }
        <CalendarHeader
          month = {month}
          year = {year}
          dict = {dict}
          onPrevMonth = {onPrevMonth}
          onNextMonth = {onNextMonth}
        />
        <Month
          rows = {rows}
          userExercises = {userExercises}
          dict = {dict}
          onChosenDay = {this.onChosenDay}
        />
      </div>
    )

  }


}

export default Calendar
