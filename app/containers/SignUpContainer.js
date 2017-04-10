import React from 'react'

import SignUpForm from '../components/forms/SignUpForm'

class SignUpContainer extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordAgain: ''
    }
  }

  render(){

    const{username, email, password, passwordAgain} = this.state

    const onUsernameChange = event => {
      this.setState({
          username: event.target.value
      })
    }

    const onUsernameFocus = () => {}

    const onEmailChange = event => {
      this.setState({
          email: event.target.value
      })
    }

    const onEmailFocus = () => {}

    const onPasswordChange = event => {
      this.setState({
          password: event.target.value
      })
    }

    const onPasswordFocus = () => {}

    const onPasswordAgainChange = event => {
      this.setState({
          passwordAgain: event.target.value
      })
    }

    const onPasswordAgainFocus = () => {}

    return(
      <SignUpForm
        dict={this.props.dict}
        username={username}
        email={email}
        password={password}
        passwordAgain={passwordAgain}
        onUsernameChange={onUsernameChange}
        onUsernameFocus={onUsernameFocus}
        onEmailChange={onEmailChange}
        onEmailFocus={onUsernameFocus}
        onPasswordChange={onPasswordChange}
        onPasswordFocus={onPasswordFocus}
        onPasswordAgainChange={onPasswordAgainChange}
        onPasswordAgainFocus={onPasswordAgainFocus}
      />
    )
  }

}

export default SignUpContainer
