import React from 'react'

require("../css/Header.css")

function Header(props){

  const {mode, dict, onLangChange} = props

  const onLanguageChange = newLang => {
      return (e) => {
        e.preventDefault()
        onLangChange(newLang)
      }
  }

  var Button

  switch(mode){
    case('login'):
        Button = <li className="signup_nav_btn" id="signup_nav_header"><a href="#"><span className="glyphicon glyphicon-user"></span>{dict.signup}</a></li>
        break
    case('calendar'):
        Button = <li id="logout_nav_btn"><a href="#"><span className="glyphicon glyphicon-log-out"></span>{dict.logout}</a></li>
        break
    case('signup'):
        Button = <li id="login_nav_btn"><a href="#"><span className="glyphicon glyphicon-log-in"></span>{dict.login}</a></li>
        break
    default:
        Button = null
  }


  return(
    <nav className="navbar navbar-default navbar-fixed-top" id="nav_bar">
    <div className="container-fluid" >
        <div className="navbar-header">

            <button type="button" className="navbar-toggle" id="toggle_button" data-toggle="collapse" data-target="#tocollapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>

            <a className="navbar-brand"><span>{'Rakenna se!'}</span></a>

        </div>

        <div className="collapse navbar-collapse" id="tocollapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#" onClick = {onLanguageChange('fi')}>
                  {'fi'}
                </a>
              </li>
              <li>
                <a href="#" onClick = {onLanguageChange('us')}>
                  {'en'}
                </a>
              </li>
              {Button}
            </ul>
        </div>

      </div>
    </nav>
  )
}

export default Header
