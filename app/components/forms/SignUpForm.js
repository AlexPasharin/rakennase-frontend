import React from 'react'

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'

import SignUpFormField from './SignUpFormField'

require('../../css/SignUp.css')

function SignUpForm(props){

  const{dict, username, email, password, passwordAgain} = props
  const{onUsernameChange, showErrorOnUsername} = props
  const{onEmailChange, errorOnEmail} = props
  const{onPasswordChange, passwordWhiteSpace, passwordTooShort, passwordTooLong} = props
  const{onPasswordAgainChange, errorOnPasswordAgain} = props

  const errorOnPassword = passwordWhiteSpace || passwordTooShort || passwordTooLong

  return(
    <Grid id = "signup_wrapper">
      <Row>
        <form className="form-horizontal" role="form">

        <SignUpFormField
          controlId="sign_up_username_wrapper"
          type={"text"}
          labelText={dict.username}
          value = {username}
          onChange = {onUsernameChange}
          autoFocus = {true}
          showError = {showErrorOnUsername}
          placeholder = {dict.writeUsername}
        />

      <SignUpFormField
          controlId="sign_up_email_wrapper"
          type={"emal"}
          labelText={dict.email}
          value = {email}
          onChange = {onEmailChange}
          autoFocus = {false}
          showError = {errorOnEmail}
          placeholder = {dict.writeEmail}
          errorMsn={dict.errorOnEmail}
        />

      <SignUpFormField
          controlId="sign_up_password_wrapper"
          type={"password"}
          labelText={dict.password}
          value = {password}
          onChange = {onPasswordChange}
          autoFocus = {false}
          showError = {errorOnPassword}
          placeholder = {dict.writePassword}
          errorMsn={passwordErrorMsn()}
        />

      <SignUpFormField
          controlId="sign_up_password_again_wrapper"
          type={"password"}
          labelText={dict.passwordAgain}
          value = {passwordAgain}
          onChange = {onPasswordAgainChange}
          autoFocus = {false}
          showError = {errorOnPasswordAgain && !errorOnPassword}
          placeholder = {dict.writePasswordAgain}
          errorMsn={dict.errorOnPasswordAgain}
        />

        </form>
      </Row>
    </Grid>
  )

  function passwordErrorMsn(){
    if(passwordWhiteSpace) return dict.passwordWhiteSpace
    if(passwordTooShort) return dict.passwordTooShort
    if(passwordTooLong) return dict.passwordTooLong
  }

}

export default SignUpForm
