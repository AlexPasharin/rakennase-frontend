import React from 'react'

import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'

import GeneralSignUpField from '../components/signup/GeneralSignUpField'
import SignUpButton from '../components/signup/SignUpButton'
import SignUpCheckbox from '../components/signup/SignUpCheckbox'


require('../css/SignUp.css')

const types = ['username', 'email', 'password', 'passwordAgain']

class SignUpFormContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = initState()

    this.onTermsChanged = () => {
      this.setState({
        values: Object.assign(this.state.values, {termsAccepted: !this.state.values.termsAccepted})
      })
    }
  }


  render(){
    const {dict, onModeChange, onLogin} = this.props
    const {values, errors, termsAccepted} = this.state
    const assertValue = this.assertValue.bind(this)
    const assertError = this.assertError.bind(this)
    const onFocus = this.onFocus.bind(this)

    return(
      <Grid id = "signup_wrapper">
        <Row>
          <form className="form-horizontal" role="form">
          { types.map( (type, index) =>
              <GeneralSignUpField
                key = {type}
                type = {type}
                dict = {dict}
                value = {values[type]}
                error = {errors[type]}
                prevError = {index > 0 ? errors[types[index - 1]] : ''}
                onChange = {assertValue(type)}
                onFocus = {onFocus(type)}
                assertError = {assertError(type)}
                refValue = {type === 'passwordAgain' ? values.password : ''}
              />
            )}

            <SignUpCheckbox
              dict = {dict}
              checked = {termsAccepted}
              onChange = {this.onTermsChanged}
              error = {errors.termsAccepted}
            />

            <SignUpButton
              dict = {dict}
              state = {this.state}
              assertError = {assertError}
              onLogin  = {onLogin}
              onModeChange = {onModeChange}
            />
        </form>
        </Row>
      </Grid>
    )
  }

  assertValue(target){
    return (
      (event) => {
        const obj = {}
        obj[target] = event.target.value
        this.setState({
          values: Object.assign(this.state.values, obj)
        })
    })
  }

  assertError(target){
    return (
      (error) => {
        const obj = {}
        obj[target] = error
        this.setState({
          errors: Object.assign(this.state.errors, obj)
        })
    })
  }

  onFocus(target){
    return () => this.assertError(target)('')
  }
}

function initState(){
  const state = {values: {}, errors: {}}

  for(var prop in state){
    types.forEach((type) => {state[prop][type] = ''})
  }

  state.values.termsAccepted = false
  state.errors.termsAccepted = ''

  return state
}


export default SignUpFormContainer
