import React from 'react'
import ReactDom from 'react-dom'
import moment from 'moment'

import Header from './components/Header'
import Frontpage from './components/frontpage/Frontpage'
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
    $('document').on('blur', '.changeTimeButton', function () {
        console.log("yes")
        $('.update_field').focus()
    })

})

$(window).resize(function () {
    $('body').css('padding-top', parseInt($('#nav_bar').css("height"))+10)
})

class App extends React.Component{
  constructor() {
    super()
    const today = moment()
    this.state = {
      today,
      username: 'alex',
      userId: 13,
      lang: 'fi',
      mode: 'frontpage',
      showCalendar: false
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
    
    this.unhideCalendar = () => this.setState({showCalendar: true})
  }

  render() {
    const {username, userId, mode, lang, today, showCalendar} = this.state
    const dict = (this.state.lang === 'us') ? en : fi

    return(
      <div>
        <Header
          mode = {mode}
          dict = {dict}
          lang = {lang}
          onLangChange = {this.onLangChange}
          onModeChange = {this.onModeChange}
        />
        {mode === 'frontpage' &&
          <Frontpage dict = {dict}/>
        }
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
        { mode === 'calendar' && !showCalendar &&
          <h1>{'LOADING...'}</h1>
        }
        { mode === 'calendar' &&
          <CalendarContainer
            show = {showCalendar}
            username = {username}
            userId = {userId}
            lang = {lang}
            dict = {dict}
            today = {today}
            unhideCalendar = {this.unhideCalendar}
          />
        }
      </div>
    )
  }
}

ReactDom.render(
  <App/>,
  document.getElementById('root')
)
