import React from 'react'
import moment from 'moment'

import Calendar from '../components/calendar/Calendar'

class CalendarContainer extends React.Component {

  constructor(props){
    super(props)
    const today = props.today
    this.state = {
      month: today.month(),
      year: today.year()
    }
  }

  componentDidMount(){
    this.getUserExercises(() =>
      this.props.onDayChange(this.props.today, () =>
        this.props.unhideCalendar()
    ))
  }


  render(){

    const {month, year} = this.state
    const {today, username, userId, lang, dict, chosenDayExercises, onDayChange, show, unhideCalendar, removeExercise} = this.props
    const rows = this.prepareDays()

    const onPrevMonth = () => {
      var prevMonth = this.state.month - 1
      var prevYear = this.state.year

      if(prevMonth < 0){
        prevMonth = 11
        prevYear--
      }

      this.setState({month: prevMonth, year: prevYear}, this.getUserExercises)
    }

    const onNextMonth = () => {
      var nextMonth = this.state.month + 1
      var nextYear = this.state.year

      if(nextMonth > 11){
        nextMonth = 0
        nextYear++
      }

      this.setState({month: nextMonth, year: nextYear}, this.getUserExercises)
    }

    return(
        <Calendar
          firstDayInTheCalendar = {this.firstDayInTheCalendar}
          lastDayInTheCalendar = {this.lastDayInTheCalendar}
          month = {month}
          year = {year}
          rows = {rows}
          onPrevMonth = {onPrevMonth}
          onNextMonth = {onNextMonth}
          userExercises = {this.props.userExercises}
          getUserExercises = {this.getUserExercises}
          {...this.props}
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

  getUserExercises(callback){

    const {userId, onUserExercisesChange} = this.props

    const dateFrom = this.firstDayInTheCalendar.format("DD.MM.YYYY")
    const dateTo = this.lastDayInTheCalendar.format("DD.MM.YYYY")


    const data = "userId=" + userId + "&dateFrom=" + dateFrom + "&dateTo=" + dateTo
    console.log(data)
    console.log(rootUrl + "getExercisesOfUser")
    //const getUserExercises = () => getUserExercises(callback)

    $.ajax({
        method: 'POST',
        url: rootUrl + "getExercisesOfUser",
        data: data,
        dataType: 'json',
        success: function(result){
            if(result.badData){
                console.log("Virheellinen syötö")
            }else{
                onUserExercisesChange(result, callback)
            }
        },
        error: function(){
          console.log("Fail")
        }
    })

  }

}

export default CalendarContainer
