import React from 'react'

import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavItem from 'react-bootstrap/lib/NavItem'

function Header(props){

  const {mode, dict, lang, onLangChange, onModeChange, onUserExercisesChange} = props

  const changeLanguage = newLang => {return () => onLangChange(newLang)}

  const changeMode = newMode => {return () => onModeChange(newMode)}

  return(
    <Navbar fixedTop collapseOnSelect id="nav_bar">
        <Navbar.Header>
            <Navbar.Toggle/>
            <Navbar.Brand>
              <span id="brand" onClick={changeMode('frontpage')}>{'Rakenna se!'}</span>
            </Navbar.Brand>
        </Navbar.Header>

        <Navbar.Collapse>
            <Nav pullRight>
              {(mode === 'login' || mode === 'frontpage') &&
              <NavItem onClick = {changeMode('signup')}><Glyphicon glyph="user"/>{' ' + dict.signup}</NavItem>
              }
              {(mode === 'signup' || mode === 'frontpage') &&
              <NavItem onClick = {changeMode('login')}><Glyphicon glyph="log-in"/>{' ' + dict.login}</NavItem>
              }
              {mode === 'calendar' &&
              <NavItem onClick = {() => {
                            onUserExercisesChange([])
                            onModeChange('frontpage')
                          }}>
                <Glyphicon glyph="log-out"/>{' ' + dict.logout}
              </NavItem>
              }
              {lang === 'us' &&
              <NavItem onClick = {changeLanguage('fi')}>{'FI'}</NavItem>
              }
              {lang === 'fi' &&
              <NavItem onClick = {changeLanguage('us')}>{'EN'}</NavItem>
              }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )

  function buttonFactory(){
    switch(mode){
      case('login'):
          return <NavItem onClick = {changeMode('signup')}><Glyphicon glyph="user"/>{' ' + dict.signup}</NavItem>
      case('calendar'):
          return <NavItem
                    onClick = {() => {
                      onUserExercisesChange([])
                      onModeChange('login')
                    }}>
                    <Glyphicon glyph="log-out"/>{' ' + dict.logout}</NavItem>
      case('frontpage'):
        return (
          <div>
          <NavItem onClick = {changeMode('login')}><Glyphicon glyph="log-in"/>{' ' + dict.login}</NavItem>
          <NavItem onClick = {changeMode('signup')}><Glyphicon glyph="user"/>{' ' + dict.signup}</NavItem>
          </div>
        )
      case('signup'):
          return <NavItem onClick = {changeMode('login')}><Glyphicon glyph="log-in"/>{' ' + dict.login}</NavItem>
      default:
          return null
    }
  }

}

export default Header
