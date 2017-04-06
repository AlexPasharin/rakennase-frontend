import React from 'react';
import moment from 'moment';
import WeekdaysRow from './WeekdaysRow';
import CalendarRow from './CalendarRow';


require("../../css/Calendar.css");

class Month extends React.Component{

  render(){
    return (
      <div id = {'month'}>
        <WeekdaysRow dict = {this.props.dict}/>
        {this.props.rows.map((row, index) =>
          <CalendarRow
            days = {row}
            key = {index}
            userExercises = {this.props.userExercises}
            onChosenDay = {this.props.onChosenDay}
          />
        )}
      </div>
    )
  }
}

function generateExercise(exercise){
    return $("<div id ='exer" + exercise.exerciseId + "'><time datetime = '" + exercise.time + "'>" + exercise.time + "</time>" + "<span>" + exercise.sport + "</span></div>");
}

//PropTypes???

export default Month;
