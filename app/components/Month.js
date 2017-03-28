import React from 'react';
import moment from 'moment';
import WeekdaysRow from './WeekdaysRow';
import CalendarRow from './CalendarRow';


require("../css/Calendar.css");

function Month(props){

  const firstDayOfTheMonth = moment({
    year: props.year,
    month: props.month,
    day: 1
  }); //first day of the month to render

  const momentStartOfTheWeek = firstDayOfTheMonth.clone().startOf('week');

  const firstDayInTheCalendar = (props.lang === 'us') ?
                                momentStartOfTheWeek : momentStartOfTheWeek.clone().add(1, 'days');

  var dayVar = firstDayInTheCalendar.clone();
  var rows = [];

  do{
    rows.push(<CalendarRow date={dayVar} key = {dayVar} month = {props.month}/>);
    dayVar = dayVar.clone().add(7, 'days');
  } while(dayVar.month() === props.month);

  return (
    <div id = {'month'}>
      <WeekdaysRow lang = {props.lang}/>
      {rows}
    </div>
  );
}

//PropTypes???

export default Month;
