import React from 'react'

import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavItem from 'react-bootstrap/lib/NavItem'

function Header(props){

  const {mode, dict, onLangChange, onModeChange, onUserExercisesChange} = props

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
              {buttonFactory()}
              <NavItem onClick = {changeLanguage('fi')}>{'FI'}</NavItem>
              <NavItem onClick = {changeLanguage('us')}>{'EN'}</NavItem>
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
      case('signup'):
          return <NavItem onClick = {changeMode('login')}><Glyphicon glyph="log-in"/>{' ' + dict.login}</NavItem>
      default:
          return null
    }
  }

}

export default Header
