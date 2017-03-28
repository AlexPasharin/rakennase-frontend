import React from 'react';
import Day from './Day';
import moment from 'moment';

function CalendarRow(props){

  var date = props.date;

  var week = [];
  for(let i = 0; i < 7; i++){
    week.push(<Day date = {date.clone()} key = {i} calendarMonth = {props.month}/>);
    date.add(1, 'days');
  }

  return (
    <div className = "row list-group">
      {week}
    </div>
  );

}

export default CalendarRow;
