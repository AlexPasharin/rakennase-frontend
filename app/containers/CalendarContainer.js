import React from 'react'
import moment from 'moment'

import Calendar from '../components/calendar/Calendar'

class CalendarContainer extends React.Component {

  constructor(props){
    super(props)
    const today = props.today
    this.state = {
      month: today.month(),
      year: today.year(),
      userExercises: [],
      chosenDayExercises: {day: today, exercises: []},
      showDayExercises: true
    }

    this.onUserExercisesChange = (exercises, day, callback) => {
      this.setState({userExercises: exercises}, () => {
        console.log(day)
        if(day) this.onDayChange(day, callback)}
      )
    }

    this.onDayChange = (day, callback) => {
      let dayExercises = this.state.userExercises.find(obj => obj.date === day.format("DD.MM.YYYY"))
      dayExercises = dayExercises ? dayExercises.exercises : []

      this.setState({
        chosenDayExercises: {day, exercises: dayExercises},
        showDayExercises: true
      }, callback)
    }

    this.addExercise = (sport, time) => {
      if(!sport) return

      const userId = this.props.userId
      const chosenDayExercises = this.state.chosenDayExercises
      const date = chosenDayExercises.day.format('DD.MM.YYYY')
      const addInTheState = id => {this.addExerciseInTheState(sport, time, id)}

      const data = "userId=" + userId + "&exerciseName=" + sport + "&date=" + date + "&time=" + time
      console.log(data)

      $.ajax({
        method: 'POST',
        url: rootUrl + "saveExerciseSimple",
        data: data,
        dataType: 'json',

        success: function(result){
          console.log(result)
            if(result[0].hasOwnProperty('exerciseId')){
              addInTheState(sport, time, result[0].exerciseId)
            }
            else{/*console.log("something's wrong")*/}
        },
        error: function(){
          console.log("error")
        }
      })
    }

    this.removeExercise = (index, exerciseId) => {
      const removeFromTheState = () => this.removeExerciseFromTheState(index)

      $.ajax({
        method: 'POST',
        url: rootUrl + "deleteExercise",
        data: "userId=" + this.props.userId + "&exerciseId=" + exerciseId,
        dataType: 'json',

        success: function(result){
            if(result.success === '1'){removeFromTheState()}
            else{/*console.log("something's wrong")*/}
        }
      })
    }

    this.changeExerciseTime = (index, newTime, exerciseId) => {
      const changeInTheState = () => this.changeExerciseTimeInTheState(index, newTime)
      const date = this.state.chosenDayExercises.day.format('DD.MM.YYYY')

      $.ajax({
        method: 'POST',
        url: rootUrl + "updateExerciseTime",
        data: "userId=" + this.props.userId + "&exerciseId=" + exerciseId + "&time=" + newTime + "&date=" + date,
        dataType: 'json',

        success: function(result){
          if(result.success === '1'){
            changeInTheState()
          }else if(result.badTimeFormat){
            console.log("Anna aika muodossa HH:MM tai HH.MM")
          }else if(result.timeTaken){
            console.log("Sinulla on jo ohjelmaa tähän aikaan")
          }
        }
      })
    }


    this.addExerciseInTheState = (sport, time, id) => {
      const newExercises = this.state.chosenDayExercises.exercises.slice()

      for(var i = 0; i < newExercises.length; i++){
        if(newExercises[i].time > time){
          break
        }
      }
      newExercises.splice(i, 0, {sport, time, exerciseId: id})

      const day = this.state.chosenDayExercises.day
      const newUserExercises = this.state.userExercises.slice()
      let newDayExercises = newUserExercises.find(obj => obj.date === day.format("DD.MM.YYYY"))

       if(newDayExercises) Object.assign(newDayExercises, {exercises: newExercises})
       else{
         newDayExercises = {date: day.format("DD.MM.YYYY"), exercises: []}
         newUserExercises.push(newDayExercises)
       }

      this.setState(prevState => ({
        chosenDayExercises: Object.assign(prevState.chosenDayExercises, {exercises: newExercises}),
        userExercises: newUserExercises
      }))
    }

    this.removeExerciseFromTheState = (index) => {
      const newExercises = this.state.chosenDayExercises.exercises.slice()
      newExercises.splice(index, 1)

      const day = this.state.chosenDayExercises.day
      const newUserExercises = this.state.userExercises.slice()
      let newDayExercises = newUserExercises.find(obj => obj.date === day.format("DD.MM.YYYY"))
      Object.assign(newDayExercises, {exercises: newExercises})

      this.setState(prevState => ({
        chosenDayExercises: Object.assign(prevState.chosenDayExercises, {exercises: newExercises}),
        userExercises: newUserExercises
      }))
    }

    this.changeExerciseTimeInTheState = (index, newTime) => {
      const newExercises = this.state.chosenDayExercises.exercises.slice()
      const newExercise = Object.assign(newExercises[index], {time: newTime})
      newExercises.splice(index, 1)

      for(var i = 0; i < newExercises.length; i++){
        if(newExercises[i].time > newTime){
          break
        }
      }
      newExercises.splice(i, 0, newExercise)

      const day = this.state.chosenDayExercises.day
      const newUserExercises = this.state.userExercises.slice()
      let newDayExercises = newUserExercises.find(obj => obj.date === day.format("DD.MM.YYYY"))
      Object.assign(newDayExercises, {exercises: newExercises})

      this.setState(prevState => ({
        chosenDayExercises: Object.assign(prevState.chosenDayExercises, {exercises: newExercises}),
        userExercises: newUserExercises
      }))
    }
  }

  componentDidMount(){
    this.getUserExercises(this.props.today, () => this.props.unhideCalendar())
  }


  render(){

    const {month, year, userExercises, chosenDayExercises, showDayExercises} = this.state
    const {today} = this.props
    const rows = this.prepareDays()

    const onPrevMonth = (day) => {
      var prevMonth = this.state.month - 1
      var prevYear = this.state.year

      if(prevMonth < 0){
        prevMonth = 11
        prevYear--
      }

      if(!day){
        $('#dayExercises').slideUp()
        $('html,body').scrollTop(0) // jumps to the top of the page
      }

      this.setState({month: prevMonth, year: prevYear}, () => this.getUserExercises(day))
    }

    const onNextMonth = (day) => {
      let nextMonth = this.state.month + 1
      let nextYear = this.state.year

      if(nextMonth > 11){
        nextMonth = 0
        nextYear++
      }

      if(!day){
        $('#dayExercises').slideUp()
        $('html,body').scrollTop(0) // jumps to the top of the page
      }

      this.setState({month: nextMonth, year: nextYear}, () => this.getUserExercises(day))
    }

    const onPrevDay = () => {
      const prevDay = this.state.chosenDayExercises.day.clone().subtract(1, 'days')
      const month = prevDay.month()

      if(month === this.state.month){
        this.onDayChange(prevDay)
      } else {
        onPrevMonth(prevDay)
      }
    }

    const onNextDay = () => {
      const nextDay = this.state.chosenDayExercises.day.clone().add(1, 'days')
      const month = nextDay.month()

      if(month === this.state.month){
        this.onDayChange(nextDay)
      } else {
        onNextMonth(nextDay)
      }
    }

    return(
        <Calendar
          firstDayInTheCalendar = {this.firstDayInTheCalendar}
          lastDayInTheCalendar = {this.lastDayInTheCalendar}
          month = {month}
          year = {year}
          rows = {rows}
          showDayExercises = {showDayExercises}
          onPrevMonth = {onPrevMonth}
          onNextMonth = {onNextMonth}
          onPrevDay = {onPrevDay}
          onNextDay = {onNextDay}
          onDayChange = {this.onDayChange}
          userExercises = {userExercises}
          chosenDayExercises = {chosenDayExercises}
          getUserExercises = {this.getUserExercises}
          addExercise={this.addExercise}
          changeExerciseTime = {this.changeExerciseTime}
          removeExercise = {this.removeExercise}
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

  getUserExercises(day, callback){
    const userId = this.props.userId
    const onUserExercisesChange = result => this.onUserExercisesChange(result, day, callback)
    const dateFrom = this.firstDayInTheCalendar.format("DD.MM.YYYY")
    const dateTo = this.lastDayInTheCalendar.format("DD.MM.YYYY")


    const data = "userId=" + userId + "&dateFrom=" + dateFrom + "&dateTo=" + dateTo
    console.log(data)
    console.log(rootUrl + "getExercisesOfUser")

    $.ajax({
        method: 'POST',
        url: rootUrl + "getExercisesOfUser",
        data: data,
        dataType: 'json',
        success: function(result){
            if(result.badData){
                console.log("Virheellinen syötö")
            }else{
                onUserExercisesChange(result, day)
            }
        },
        error: function(){
          console.log("Fail")
        }
    })

  }
}

export default CalendarContainer
