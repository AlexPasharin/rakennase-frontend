import React from 'react'
import moment from 'moment'

import CalendarHeader from './CalendarHeader'
import DayExercises from './DayExercises'
import Month from './Month'
import UserGreeting from '../UserGreeting'

require("../../css/Calendar.css")

class Calendar extends React.Component{

  render(){
    const {month, year, onDayChange, chosenDayExercises, rows, username, userExercises, lang, dict, onPrevMonth, onNextMonth, onPrevDay, onNextDay, addExercise, changeExerciseTime, removeExercise, show, showDayExercises} = this.props

    return(
      <div id="calendar_wrapper" className = {show ? 'ready' : 'loading'}>
        <UserGreeting username = {username} dict = {dict}/>
        <DayExercises
          show = {showDayExercises}
          lang = {lang}
          dict = {dict}
          exercises = {chosenDayExercises}
          addExercise={addExercise}
          changeExerciseTime = {changeExerciseTime}
          removeExercise = {removeExercise}
          onPrevDay = {onPrevDay}
          onNextDay = {onNextDay}
        />
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
          onDayChange={onDayChange}
        />
      </div>
    )}
}

export default Calendar
