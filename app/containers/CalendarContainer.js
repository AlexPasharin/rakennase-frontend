import React from 'react';

const rootUrl = "http://www.rakennase.com/";

const CalendarContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {userExercises : []};
  }

  componentDidMount(){

    let dateFrom = "27.01.2017";
    let dateTo = "02.03.2017";

  }

  render (){
    <Calendar />
  }

  putUserExercises(dateFrom, dateTo){

    var data = "userId=" + this.props.userId + "&dateFrom=" + dateFrom + "&dateTo=" + dateTo;

    $.ajax({
        method: 'POST',
        url: rootUrl + "getExercisesOfUser",
        data: data,
        dataType: 'json',

        success: function(result){
            if(result.badData){
                console.log("Virheellinen syötö");
            }else{
                //console.log(result);
                result.forEach(function(day){
                  //  console.log(day.date1);
                    var contentArea = $("[id='" + day.date + "']").find('.content');
                    day.exercises.forEach(function(exercise){
                        var newContent = generateExercise(exercise);
                        contentArea.append(newContent);
                    });
                });
            }
        },

        error: function(){
            console.log("Yhteys epäonnistui");
        }
    });


}
}
