import React from 'react';
import moment from 'moment';
import WeekdaysRow from './WeekdaysRow';
import CalendarRow from './CalendarRow';


require("../../css/Calendar.css");

function Month(props){

  return (
    <div id = {'month'}>
      <WeekdaysRow lang = {props.lang}/>
      {props.rows.map((row, index) => <CalendarRow days = {row} key = {index}/>)}
    </div>
  );
}

//PropTypes???

export default Month;
