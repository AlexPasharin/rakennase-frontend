import React from 'react'

import FormGroup from 'react-bootstrap/lib/FormGroup'
import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

function SignUpField(props){

    const {dict, type, controlId, label, value, error, autoFocus, placeholder, onChange, onFocus, onBlur} = props

    return(
      <div>
        <FormGroup controlId={controlId}>
          <Col sm={2}>
            <ControlLabel>{dict[label]}</ControlLabel>
          </Col>
          <Col sm={10}>
            <FormControl
              type={type}
              value = {value}
              placeholder = {dict[placeholder]}
              onChange = {onChange}
              autoFocus = {autoFocus}
              onFocus = {onFocus}
              onBlur = {onBlur}
            />
          </Col>
        </FormGroup>
        { error &&
        <FormGroup className="signup_err_msn">
            <Col sm={10} smOffset={2}>
              {dict[error]}
            </Col>
        </FormGroup>
        }
      </div>
    )
}

export default SignUpField
