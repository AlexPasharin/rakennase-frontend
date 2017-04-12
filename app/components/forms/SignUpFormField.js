import React from 'react'

import FormGroup from 'react-bootstrap/lib/FormGroup'
import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

class SignUpFormField extends React.Component{

  constructor(props){
    super(props)
    this.state = {error: false}
  }

  render(){
    const {controlId, labelText, value, onChange, showError, autoFocus, type, placeholder, errorMsn} = this.props

    const onFocus = () => this.setState({error: false})

    const onBlur = () => { if(showError) this.setState({error: true}) }

    return(
      <div>
        <FormGroup controlId={controlId}>
          <Col sm={2}>
            <ControlLabel>{labelText}</ControlLabel>
          </Col>
          <Col sm={10}>
            <FormControl
              type={type}
              value = {value}
              placeholder = {placeholder}
              onChange = {onChange}
              autoFocus = {autoFocus}
              onFocus = {onFocus}
              onBlur = {onBlur}
            />
          </Col>
        </FormGroup>
        { this.state.error &&
        <FormGroup className="signup_err_msn">
            <Col sm={10} smOffset={2}>
              {errorMsn}
            </Col>
        </FormGroup>
        }
      </div>
    )
  }
}

export default SignUpFormField
