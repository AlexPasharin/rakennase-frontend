import React from 'react';
import Weekday from './Weekday'

// change to diff.languages later!


function WeekdaysRow(props){

  const WEEKDAYS = (props.lang === 'us') ?
                    ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'] :
                    ['MA', 'TI', 'KE', 'TO', 'PE', 'LA', 'SU'];

  // const row = WEEKDAYS.map((weekday) => {
  //       return (
  //         <Weekday name = {weekday} key = {weekday}/>
  //       )
  //   }); // you can't use ; in jsx, see below!

  return(
    <div className = "list-group">
      {WEEKDAYS.map((weekday) => {
            return (
              <Weekday name = {weekday} key = {weekday}/>
            )
        })
      }
    </div>
  )

}


export default WeekdaysRow;
