import React from 'react'
import moment from 'moment'

import UserExercisesReciever from './UserExercisesReciever'

class CalendarContainer extends React.Component {

  constructor(props){
    super(props)

    const today = moment()
    this.state = {
      month: today.month(),
      year: today.year()
    }
  }

  render(){

    const {month, year} = this.state
    const {username, userId, lang, dict} = this.props
    const rows = this.prepareDays()

    const onPrevMonth = () => {
      var prevMonth = this.state.month - 1
      var prevYear = this.state.year

      if(prevMonth < 0){
        prevMonth = 11
        prevYear--
      }

      this.setState({month: prevMonth, year: prevYear})
    }

    const onNextMonth = () => {
      var nextMonth = this.state.month + 1
      var nextYear = this.state.year

      if(nextMonth > 11){
        nextMonth = 0
        nextYear++
      }

      this.setState({month: nextMonth, year: nextYear})
    }

    return(
        <UserExercisesReciever
          rows = {rows}
          firstDayInTheCalendar = {this.firstDayInTheCalendar}
          lastDayInTheCalendar = {this.lastDayInTheCalendar}
          month = {month}
          year = {year}
          username = {username}
          userId = {userId}
          lang = {lang}
          dict = {dict}
          onPrevMonth = {onPrevMonth}
          onNextMonth = {onNextMonth}
          userExercises = {this.props.userExercises}
          onUserExercisesChange = {this.props.onUserExercisesChange}
        />
    )
  }

  prepareDays(){

    const {month, year} = this.state
    const {lang} = this.props

    const firstDayOfTheMonth = moment({
      year: year,
      month: month,
      day: 1
    })

    var weekDay = (lang === 'us') ?  //weekday of the first date of month,
      firstDayOfTheMonth.day() + 1 :
      firstDayOfTheMonth.isoWeekday() //iso refers to european standars, week starts at Monday

    this.firstDayInTheCalendar = (lang === 'us') ?
      firstDayOfTheMonth.clone().startOf('week') :
      firstDayOfTheMonth.clone().startOf('week').add(1, 'days')

    var rows = []
    var row = []

    var day = this.firstDayInTheCalendar.clone()

    for(let i = 1; i < weekDay; i++){
      makeNewDay.call(this, false)
    }

    var amountOfDays = day.daysInMonth() // the amount of days in a current month

    for(let i = 0; i < amountOfDays; i++, weekDay++){
      if(weekDay > 7){
        rows.push(row)
        row = []
        weekDay = 1
      }
      makeNewDay.call(this, true)
    }

    for(let i = weekDay; i <= 7; i++){
      makeNewDay.call(this, false)
    }

    rows.push(row)
    this.lastDayInTheCalendar = day.subtract(1, 'days')

    return rows

    function makeNewDay(isThisMonth){
      let newDay = day.clone()
      let newDayObj = {
                    date: newDay,
                    thisMonth: isThisMonth
                   }
      row.push(newDayObj)
      day.add(1, 'days')
    }
  }

}

export default CalendarContainer
