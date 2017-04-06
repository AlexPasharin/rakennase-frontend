import React from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';

import Header from './components/Header'
import LoginForm from './components/login/LoginForm'
import CalendarContainer from './containers/CalendarContainer'

import fi from './intl/fi'
import en from './intl/en'

require('./css/General.css')


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip()
    $('body').css('padding-top', parseInt($('#nav_bar').css("height"))+10)
})

$(window).resize(function () {
    $('body').css('padding-top', parseInt($('#nav_bar').css("height"))+10)
})

class App extends React.Component{

  constructor() {
    super()
    this.state = {lang: 'us', mode: 'login', userExercises: []}

    this.onLangChange = newLang => {
      this.setState({lang: newLang})
    }

    this.onModeChange = newMode => {
      this.setState({mode: newMode})
    }
  }

  render() {
    var dict = (this.state.lang === 'us') ? en : fi

    const onUserExercisesChange = exercises => this.setState({userExercises: exercises})


    return(
      <div>
        <Header
          mode = {this.state.mode}
          dict = {dict}
          onLangChange = {this.onLangChange}
          onModeChange = {this.onModeChange}
          onUserExercisesChange = {onUserExercisesChange}
        />
        {this.state.mode === 'login' &&
          <LoginForm
            dict = {dict}
            onModeChange = {this.onModeChange}
          />
        }
        { this.state.mode === 'calendar' &&
          <CalendarContainer
            username = {'alex'}
            userId= {13}
            lang = {this.state.lang}
            dict = {dict}
            userExercises = {this.state.userExercises}
            onUserExercisesChange = {onUserExercisesChange}
          />
        }
      </div>
    )

  }
}

ReactDom.render(
  <App/>,
  document.getElementById('root')
);
