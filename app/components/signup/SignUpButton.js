import React from 'react'

import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col'
import FormGroup from 'react-bootstrap/lib/FormGroup'

function SignUpButton(props){

  const {dict, state, assertError, onLogin, onModeChange} = props
  const {values, errors} = state
  const {username, email, password, termsAccepted} = values

  const onRegister = e => {
    e.preventDefault()

    $.ajax({
      method: 'POST',
      url: rootUrl + "addUser",
      dataType: 'json',
      data: "username=" + username + "&email=" + email + "&password=" + password + "&accept=" + termsAccepted,

      success: function(result){
        if(result.success === '0'){
          showErrors(result)
        }else{
          onLogin(username, result.userId)
          onModeChange('calendar')
        }
      },
      error: function(){
        assertError('username')('connectionProblems')
      }
    })
  }

  return(
    <FormGroup>
      <Col sm={10} smOffset={2}>
        <Button
          bsStyle="info"
          id="sign_up_btn"
          onClick={onRegister}
          disabled={oneTrue(errors) || !termsAccepted}
        >
          {dict.signup}
        </Button>
      </Col>
    </FormGroup>
  )

  /* This will never fire if front is not corrupted or there are some errors on backend

   */
  function showErrors(result){
    if(result.usernameTaken === '1') assertError('username')('usernameTaken')
    if(result.usernameBad === '1') assertError('username')('usernameBad')
    if(result.emailBad === '1') assertError('email')('emailNotValid')
    if(result.passwordBad === '1') assertError('password')('passwordBad')
    if(result.acceptNot === '1') assertError('termsAccepted')('termsNotAccepted')
  }
}

function oneTrue(obj){
  for(var prop in obj) { if(obj[prop]) return true }

  return false
}



export default SignUpButton
