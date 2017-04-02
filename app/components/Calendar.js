import React from 'react'
import moment from 'moment'
import OverLayTrigger from 'react-bootstrap/lib/OverLayTrigger'
import Tooltip from 'react-bootstrap/lib/Tooltip'

import UserGreeting from './UserGreeting'
import Month from './Month'

require("../css/Calendar.css")

const MONTHES_FINNISH = ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu']
const MONTHES_ENGLISH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

class Calendar extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      userExercises: []
    }
  }

  componentDidMount(){
    this.putUserExercises()
  }

  componentWillUpdate(){
    this.putUserExercises()
  }


  render(){
    const {month, year, username, userExercises, lang, onPrevMonth, onNextMonth} = this.props
    const rows = this.prepareDays()

    return(
      <div id="calendar_wrapper">
        <UserGreeting username = {username} lang = {lang}/>
        <CalendarHeader
          month = {month}
          year = {year}
          lang = {lang}
          onPrevMonth = {onPrevMonth}
          onNextMonth = {onNextMonth}
        />
        <Month
            rows = {rows}
            userExercises = {this.state.userExercises}
            lang = {lang}
        />
      </div>
    )
  }

  prepareDays(){

    const {month, year, lang} = this.props

    const firstDayOfTheMonth = moment({
      year: year,
      month: month,
      day: 1
    })

    var weekDay = (lang === 'us') ?  //weekday of the first date of month,
      firstDayOfTheMonth.day() :
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
      let dayExercises = this.state.userExercises.find(obj => obj.date === newDay.format("DD.MM.YYYY"))
      let newDayObj = {
                    date: newDay,
                    thisMonth: isThisMonth,
                    exercises: dayExercises ? dayExercises.exercises : []
                   }
      row.push(newDayObj)
      day.add(1, 'days')
    }
  }

  putUserExercises(){

    var rootUrl = "http://www.rakennase.com/"
    var userId = this.props.userId
    var dateFrom = this.firstDayInTheCalendar.format("DD.MM.YYYY")
    var dateTo = this.lastDayInTheCalendar.format("DD.MM.YYYY")


    var data = "userId=" + userId + "&dateFrom=" + dateFrom + "&dateTo=" + dateTo;
    var that = this

    $.ajax({
        method: 'POST',
        url: rootUrl + "getExercisesOfUser",
        data: data,
        dataType: 'json',

        success: function(result){

            if(result.badData){
                console.log("Virheellinen syötö");
            }else{
                that.setState({userExercises: result})
            }
        },

        error: function(){
            console.log("Yhteys epäonnistui");
        }
    })
  }
}

function CalendarHeader(props){

  const {month, year, lang, onPrevMonth, onNextMonth} = props

  const prevMonth = month === 0 ? 11 : month - 1
  const prevYear = month === 0 ? year - 1 : year
  const nextMonth = month === 11 ? 0 : month + 1
  const nextYear = month === 11 ? year + 1: year

  const MONTHES = (lang === 'us') ? MONTHES_ENGLISH : MONTHES_FINNISH

  const prevTooltip = (<Tooltip id = "prevMonthToolbar">
      {MONTHES[prevMonth] + ' ' + prevYear}
  </Tooltip>)

  const nextTooltip = (<Tooltip id = "nextMonthToolbar">
      {MONTHES[nextMonth] + ' ' + nextYear}
  </Tooltip>)

  return (
    <div id= "calendar-header" className = "row">

        <div className ="col-xs-3" id = "prev-month" onClick = {onPrevMonth}>
          <OverLayTrigger placement = "left" overlay = {prevTooltip}>
            <span id="prev_month_icon" className = "glyphicon glyphicon-chevron-left">
            </span>
          </OverLayTrigger>
        </div>

        <div id ="month-year" className = "col-xs-6" >
            {MONTHES[month] + ' ' + year}
        </div>

        <div className = "col-xs-3" id = "next-month" onClick = {onNextMonth}>
            <OverLayTrigger placement = "right" overlay = {nextTooltip}>
              <span id="next_month_icon" className = "glyphicon glyphicon-chevron-right"></span>
            </OverLayTrigger>
      </div>

    </div>
  )
}

export default Calendar
