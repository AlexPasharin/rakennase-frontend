import React from 'react'
import ReactDom from 'react-dom'
import moment from 'moment'

import Header from './components/Header'
import Frontpage from './components/Frontpage'
import LoginContainer from './containers/LoginContainer'
import SignUpFormContainer from './containers/SignUpFormContainer'
import CalendarContainer from './containers/CalendarContainer'

import fi from './intl/fi'
import en from './intl/en'

global.jQuery = global.$ = require('jquery')

global.rootUrl = "http://www.rakennase.com/"

require('./css/General.css')

require('bootstrap')


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip()
    $('body').css('padding-top', parseInt($('#nav_bar').css("height"))+10)
})

$(window).resize(function () {
    $('body').css('padding-top', parseInt($('#nav_bar').css("height"))+10)
})

class App extends React.Component{
  constructor() {
    super()
    const today = moment()
    this.state = {
      today,
      username: 'alex',
      userId: 13,
      lang: 'us',
      mode: 'frontpage',
      userExercises: [],
      chosenDayExercises: {day: today, exercises: []},
      showCalendar: false
    }

    this.onLangChange = newLang => {
      this.setState({lang: newLang})
    }

    this.onModeChange = newMode => {
      this.setState({mode: newMode})
    }

    this.onLogin = (username, userId) => {
      this.setState({username, userId}, () => this.onModeChange('calendar'))
    }

    this.onDayChange = (day, callback) => {
      let dayExercises = this.state.userExercises.find(obj => obj.date === day.format("DD.MM.YYYY"))
      dayExercises = dayExercises ? dayExercises.exercises : []

      this.setState({chosenDayExercises: {day, exercises: dayExercises}}, callback)
    }

    this.onUserExercisesChange = (exercises, callback) =>
      this.setState({userExercises: exercises}, callback)

    this.unhideCalendar = () => this.setState({showCalendar: true})

    this.addExercise = (sport, time) => {
      this.addExerciseInTheState(sport, time)
    }

    this.removeExercise = (index, exerciseId) => {
      const removeFromTheState = () => this.removeExerciseFromTheState(index)

      $.ajax({
        method: 'POST',
        url: rootUrl + "deleteExercise",
        data: "userId=" + this.state.userId + "&exerciseId=" + exerciseId,
        dataType: 'json',

        success: function(result){
            if(result.success === '1'){removeFromTheState()}
            else{/*console.log("something's wrong")*/}
        }
      })
    }

    this.changeExerciseTime = (index, newTime, exerciseId) => {
      const changeInTheState = () => this.changeExerciseTimeInTheState(index, newTime)
      const date = this.state.chosenDayExercises.day.format("DD.MM.YYYY")

      $.ajax({
        method: 'POST',
        url: rootUrl + "updateExerciseTime",
        data: "userId=" + this.state.userId + "&exerciseId=" + exerciseId + "&time=" + newTime + "&date=" + date,
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

  }

  render() {
    const {username, userId, mode, lang, userExercises, today, chosenDayExercises, showCalendar} = this.state
    const dict = (this.state.lang === 'us') ? en : fi

    return(
      <div>
        <Header
          mode = {mode}
          dict = {dict}
          onLangChange = {this.onLangChange}
          onModeChange = {this.onModeChange}
          onUserExercisesChange = {this.onUserExercisesChange}
        />
        {mode === 'frontpage' &&
          <Frontpage />
        }
        {mode === 'login' &&
          <LoginContainer
            dict = {dict}
            onModeChange = {this.onModeChange}
            onLogin = {this.onLogin}
          />
        }
        { mode === 'signup' &&
          <SignUpFormContainer
            dict = {dict}
            onModeChange = {this.onModeChange}
            onLogin = {this.onLogin}
          />
        }
        { mode === 'calendar' && !showCalendar &&
          <h1>{'LOADING...'}</h1>
        }
        { mode === 'calendar' &&
          <CalendarContainer
            show = {showCalendar}
            username = {username}
            userId = {userId}
            lang = {lang}
            dict = {dict}
            today = {today}
            userExercises = {userExercises}
            chosenDayExercises = {chosenDayExercises}
            onUserExercisesChange = {this.onUserExercisesChange}
            onDayChange = {this.onDayChange}
            unhideCalendar = {this.unhideCalendar}
            addExercise={this.addExercise}
            changeExerciseTime = {this.changeExerciseTime}
            removeExercise = {this.removeExercise}
          />
        }
      </div>
    )
  }

  addExerciseInTheState(sport, time){
    const newExercises = this.state.chosenDayExercises.exercises.slice()

    for(var i = 0; i < newExercises.length; i++){
      if(newExercises[i].time > time){
        break
      }
    }
    newExercises.splice(i, 0, {sport, time, exerciseId: Math.floor(Math.random() * 100)})

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

  removeExerciseFromTheState(index){
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

  changeExerciseTimeInTheState(index, newTime){
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

ReactDom.render(
  <App/>,
  document.getElementById('root')
)
