import React from 'react'

import Alert from 'react-bootstrap/lib/Alert'
import Button from 'react-bootstrap/lib/Button'
import Checkbox from 'react-bootstrap/lib/Checkbox'
import Col from 'react-bootstrap/lib/Col'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'

import FormField from './FormField'

require('../../css/Login.css')

function LoginForm(props){

    const{username, password, error, dict, onUsernameChange, onPasswordChange, onFocus, onLogin, onSignUp} = props

    return (
      <Grid id = "login_wrapper">
        <Row>
          <Col md={6}>
            { error &&
              <Alert bsStyle="danger">{dict.wrongLogin}</Alert>
            }
            <form className="form-horizontal" role="form">

              <FormField
                controlId="login_user_name"
                type={"text"}
                labelText={dict.username}
                value = {username}
                onChange = {onUsernameChange}
                autoFocus = {true}
                onFocus = {onFocus}
              />

              <FormField
                controlId="login_password"
                type={"password"}
                labelText={dict.password}
                value = {password}
                onChange = {onPasswordChange}
                autoFocus = {false}
                onFocus = {onFocus}
              />

              <FormGroup>
                <Col sm={10} smOffset={2}>
                  <Checkbox>{dict.rememberMe}</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col xs={4} smOffset={2}>
                  <Button bsStyle="info" id="login_btn" onClick={onLogin}>{dict.login}</Button>
                </Col>
                <Col xs={3} smOffset={3}>
                  <span id="signup_on_login_nav_btn" onClick={onSignUp}>{dict.signup}</span>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col xs={10} smOffset={2}>
                  <span id="forgot_password">{dict.forgotPassword}</span>
                </Col>
              </FormGroup>

            </form>
          </Col>
        </Row>
      </Grid>
    )
}

export default LoginForm
