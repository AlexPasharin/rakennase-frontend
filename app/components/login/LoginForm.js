import React from 'react'

import Button from 'react-bootstrap/lib/Button'
import Checkbox from 'react-bootstrap/lib/Checkbox'
import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'

require('../../css/Login.css')

class LoginForm extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      username: 'alex',
      password: 'salainensalasana'
    }
  }

  render(){
    const {dict, onModeChange} = this.props

    const onUsernameChange = event => {
      this.setState({
          username: event.target.value
      })
    }

    const onPasswordChange = event => {
      this.setState({
          password: event.target.value
      })
    }

    const onLogin= () => {
      onModeChange('calendar')
    }

    return (
      <Grid id = "login_wrapper">
        <Row>
          <Col md={6}>
            <form className="form-horizontal" role="form">

              <LoginFormField
                controlId="login_user_name"
                type={"text"}
                labelText={dict.username}
                value = {this.state.username}
                onChange = {onUsernameChange}
                autoFocus = {true}
              />

              <LoginFormField
                controlId="login_password"
                type={"password"}
                labelText={dict.password}
                value = {this.state.password}
                onChange = {onPasswordChange}
                autoFocus = {false}
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
                  <span id="signup_on_login_nav_btn" onClick={() => onModeChange('signup')}>{dict.signup}</span>
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
}

function LoginFormField(props){

  const {controlId, labelText, value, onChange, autoFocus, type} = props

    return(
      <FormGroup controlId={controlId}>
        <Col sm={2}>
          <ControlLabel>{labelText}</ControlLabel>
        </Col>
        <Col sm={10}>
          <FormControl
            type={type}
            value = {value}
            onChange = {onChange}
            autoFocus = {autoFocus}
          />
        </Col>
      </FormGroup>
    )
}

export default LoginForm
