import React from 'react';
import Day from './Day';
import moment from 'moment';

function CalendarRow(props){

  return (
    <div className = "row list-group">
      {props.days.map((day, index) =>
        <Day date = {day.date} thisMonth = {day.thisMonth} exercises = {day.exercises} key = {index}/>
      )}
    </div>
  );

}

export default CalendarRow;
