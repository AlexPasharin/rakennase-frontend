import React from 'react'

import LoginForm from '../components/forms/LoginForm'

class LoginContainer extends React.Component{

  constructor(props){
    super(props)
    
    this.state = {
      usernameInput: 'alex',
      passwordInput: 'salainensalasana',
      error: false
    }
  }

  render(){

    const {dict, onModeChange, onLogin} = this.props

    const onUsernameChange = event => {
      this.setState({
          usernameInput: event.target.value
      })
    }

    const onPasswordChange = event => {
      this.setState({
          passwordInput: event.target.value
      })
    }

    const onFocus = () => {
      this.setState({error: false})
    }

    const onError = () => {
      this.setState({error: true})
    }

    const onLoginClick = (e) => {
      e.preventDefault()

      const usernameInput = this.state.usernameInput
      const passwordInput = this.state.passwordInput

      $.ajax({
            method: 'POST',
            url: rootUrl + "login",
            data: "username=" + usernameInput + "&password=" + passwordInput,
            dataType: 'json',
            success: function(result){
                console.log(result)
                if(result.login === '1'){
                    onLogin(usernameInput, result.userId)
                    onModeChange('calendar')
                }else{
                    onError()
                }
            }
        })

    }

    const onSignUp = () => onModeChange('signup')

    return(
      <LoginForm
        username={this.state.usernameInput}
        password={this.state.passwordInput}
        error={this.state.error}
        dict={dict}
        onUsernameChange={onUsernameChange}
        onPasswordChange={onPasswordChange}
        onFocus={onFocus}
        onLogin={onLoginClick}
        onSignUp={onSignUp}
      />
    )
  }

}

export default LoginContainer
