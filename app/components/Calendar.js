import React from 'react';
import Month from './Month';

require("../css/Calendar.css");

const MONTHES = ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'];

function Calendar(props){

  const {month, year, lang} = props;

    return(
      <div id="calendar_wrapper">
        <h1>{'Tervetuloa, '}
            <span id="user_name">{props.username}</span>
        </h1>

        <div id= "calendar-header" className = "row">
              <div className ="col-xs-3" id = "prev-month">
                  <span id="next_month_icon" className = "glyphicon glyphicon-chevron-left" data-toggle="tooltip" title = ""></span>
              </div>

              <div id ="month-year" className = "col-xs-6" >
                  {MONTHES[props.month] + ' ' + props.year}
              </div>

              <div className = "col-xs-3" id = "next-month">
                  <span id="next_month_icon" className = "glyphicon glyphicon-chevron-right" data-toggle="tooltip" title = ""></span>
              </div>

          </div>

          <Month month = {month} year = {year} lang = {lang}/>
      </div>
    );

}

export default Calendar;
