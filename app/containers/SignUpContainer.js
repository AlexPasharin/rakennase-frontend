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

    const onEmailChange = event => {
      this.setState({
          email: event.target.value
      })
    }


    const onPasswordChange = event => {
      this.setState({
          password: event.target.value
      })
    }


    const onPasswordAgainChange = event => {
      this.setState({
          passwordAgain: event.target.value
      })
    }

    const showErrorOnUsername = () => {}
    const errorOnEmail = !email.match(/.+\@.+\..+[^\.]$/)

    const passwordWhiteSpace = !password.match(/\S/)
    const passwordTooShort = password.length < 10
    const passwordTooLong = password.length > 255

    const passwordsDontMatch = password !== passwordAgain

    return(
      <SignUpForm
        dict={this.props.dict}
        username={username}
        email={email}
        password={password}
        passwordAgain={passwordAgain}
        onUsernameChange={onUsernameChange}
        onEmailChange={onEmailChange}
        onPasswordChange={onPasswordChange}
        onPasswordAgainChange={onPasswordAgainChange}
        showErrorOnUsername={showErrorOnUsername()}
        errorOnEmail={errorOnEmail}
        passwordWhiteSpace={passwordWhiteSpace}
        passwordTooShort={passwordTooShort}
        passwordTooLong={passwordTooLong}
        errorOnPasswordAgain={passwordsDontMatch}
      />
    )
  }

}

export default SignUpContainer
