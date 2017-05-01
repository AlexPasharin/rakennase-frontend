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
            onDayChange = {this.props.onDayChange}
          />
        )}
      </div>
    )
  }
}

export default Month;
