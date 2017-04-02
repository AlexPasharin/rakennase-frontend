import React from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';
import Day from './components/Day';
import Weekday from './components/Weekday';
import WeekdaysRow from './components/WeekdaysRow';
import CalendarRow from './components/CalendarRow';
import Month from './components/Month';
import Calendar from './components/Calendar';
import CalendarContainer from './containers/CalendarContainer'

var lang = 'fin';

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});


const App = React.createClass({

  render: function(){

    return(
      <CalendarContainer
        username = {'alex'}
        userId= {13}
        lang = {lang}
      />
    )

  }
})

ReactDom.render(
  <App/>,
  document.getElementById('root')
);
