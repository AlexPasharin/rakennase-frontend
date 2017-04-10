import React from 'react'

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'

import FormField from './FormField'

require('../../css/SignUp.css')

function SignUpForm(props){

  const{dict, username, email, password, passwordAgain} = props
  const{onUsernameChange, onUsernameFocus} = props
  const{onEmailChange, onEmailFocus} = props
  const{onPasswordChange, onPasswordFocus} = props
  const{onPasswordAgainChange, onPasswordAgainFocus} = props

  return(
    <Grid id = "signup_wrapper">
      <Row>
        <form className="form-horizontal" role="form">

        <FormField
          controlId="sign_up_username_wrapper"
          type={"text"}
          labelText={dict.username}
          value = {username}
          onChange = {onUsernameChange}
          autoFocus = {true}
          onFocus = {onUsernameFocus}
          placeholder = {dict.writeUsername}
        />

        <FormField
          controlId="sign_up_email_wrapper"
          type={"emal"}
          labelText={dict.email}
          value = {email}
          onChange = {onEmailChange}
          autoFocus = {false}
          onFocus = {onEmailFocus}
          placeholder = {dict.writeEmail}
        />

        <FormField
          controlId="sign_up_password_wrapper"
          type={"password"}
          labelText={dict.password}
          value = {password}
          onChange = {onPasswordChange}
          autoFocus = {false}
          onFocus = {onPasswordFocus}
          placeholder = {dict.writePassword}
        />

        <FormField
          controlId="sign_up_password_again_wrapper"
          type={"password"}
          labelText={dict.passwordAgain}
          value = {passwordAgain}
          onChange = {onPasswordAgainChange}
          autoFocus = {false}
          onFocus = {onPasswordAgainFocus}
          placeholder = {dict.writePasswordAgain}
        />

        </form>
      </Row>
    </Grid>
  )

}

export default SignUpForm
