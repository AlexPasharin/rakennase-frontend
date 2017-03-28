import React from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';
import Day from './components/Day';
import Weekday from './components/Weekday';
import WeekdaysRow from './components/WeekdaysRow';
import CalendarRow from './components/CalendarRow';
import Month from './components/Month';
import Calendar from './components/Calendar';

var lang = 'fin';

const App = React.createClass({

  render: function(){

    const today = moment();


    return(
      <Calendar month = {today.month()} year = {today.year()} lang = {lang} username = {'Alex'}/>
    )

  }
})

ReactDom.render(
  <App/>,
  document.getElementById('root')
);
