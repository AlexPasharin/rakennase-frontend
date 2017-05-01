import React from 'react'
import ReactDom from 'react-dom'
import moment from 'moment'

import Header from './components/Header'
import LoginContainer from './containers/LoginContainer'
import SignUpFormContainer from './containers/SignUpFormContainer'
import CalendarContainer from './containers/CalendarContainer'

import fi from './intl/fi'
import en from './intl/en'

global.jQuery = global.$ = require('jquery')

global.rootUrl = "http://www.rakennase.com/"


require('./css/General.css')

require('bootstrap')


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
    this.state = {
      username: 'alex',
      userId: 13,
      lang: 'us',
      mode: 'login',
      userExercises: []
    }

    this.onLangChange = newLang => {
      this.setState({lang: newLang})
    }

    this.onModeChange = newMode => {
      this.setState({mode: newMode})
    }

    this.onLogin = (username, userId) => {
      this.setState({username, userId}, () => this.onModeChange('calendar'))
    }

  }

  render() {
    const {username, userId, mode, lang, userExercises} = this.state
    const dict = (this.state.lang === 'us') ? en : fi

    const onUserExercisesChange = exercises => this.setState({userExercises: exercises})

    return(
      <div>
        <Header
          mode = {mode}
          dict = {dict}
          onLangChange = {this.onLangChange}
          onModeChange = {this.onModeChange}
          onUserExercisesChange = {onUserExercisesChange}
        />
        {mode === 'login' &&
          <LoginContainer
            dict = {dict}
            onModeChange = {this.onModeChange}
            onLogin = {this.onLogin}
          />
        }
        { mode === 'signup' &&
          <SignUpFormContainer
            dict = {dict}
            onModeChange = {this.onModeChange}
            onLogin = {this.onLogin}
          />
        }
        { mode === 'calendar' &&
          <CalendarContainer
            username = {username}
            userId= {userId}
            lang = {lang}
            dict = {dict}
            userExercises = {userExercises}
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
