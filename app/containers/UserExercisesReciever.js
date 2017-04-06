import React from 'react'

import Calendar from '../components/calendar/Calendar'

class UserExercisesReciever extends React.Component{

  componentDidMount(){
    this.putUserExercises()
  }

  componentWillUpdate(){
    this.putUserExercises()
  }

  render(){

    const {rows, month, year, username, userId, lang, dict, onPrevMonth, onNextMonth} = this.props

    return (
      <Calendar
        rows = {rows}
        month = {month}
        year = {year}
        username = {username}
        userId = {userId}
        lang = {lang}
        dict = {dict}
        userExercises = {this.props.userExercises}
        onPrevMonth = {onPrevMonth}
        onNextMonth = {onNextMonth}
      />
    )
  }

  putUserExercises(){

    const {userId, firstDayInTheCalendar, lastDayInTheCalendar, onUserExercisesChange} = this.props

    var rootUrl = "http://www.rakennase.com/"
    var dateFrom = firstDayInTheCalendar.format("DD.MM.YYYY")
    var dateTo = lastDayInTheCalendar.format("DD.MM.YYYY")


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
                onUserExercisesChange(result)
            }
        },

        error: function(){
            console.log("Yhteys epäonnistui");
        }
    })
  }

}

export default UserExercisesReciever
