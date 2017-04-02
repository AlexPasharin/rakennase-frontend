import React from 'react'
import moment from 'moment'

import Calendar from '../components/Calendar'

class CalendarContainer extends React.Component {

  constructor(props){
    super(props)

    const today = moment()
    this.state = {
                  month: today.month(),
                  year: today.year()
                }
  }

  onPrevMonth(){
    var prevMonth = this.state.month - 1
    var prevYear = this.state.year

    if(prevMonth < 0){
      prevMonth = 11
      prevYear--
    }

    this.setState({month: prevMonth, year: prevYear})
  }

  onNextMonth(){
    var nextMonth = this.state.month + 1
    var nextYear = this.state.year

    if(nextMonth > 11){
      nextMonth = 0
      nextYear++
    }

    this.setState({month: nextMonth, year: nextYear})
  }

  render(){

    const {month, year} = this.state
    const {username, userId, lang} = this.props

    return(
        <Calendar
          month = {month}
          year = {year}
          username = {username}
          userId = {userId}
          userExercises = {this.state.userExercises}
          lang = {lang}
          onPrevMonth = {this.onPrevMonth.bind(this)}
          onNextMonth = {this.onNextMonth.bind(this)}
        />
    )
  }
}

export default CalendarContainer
