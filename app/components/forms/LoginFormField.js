import React from 'react'

import FormGroup from 'react-bootstrap/lib/FormGroup'
import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

function LoginFormField(props){

  const {controlId, labelText, value, onChange, autoFocus, type, onFocus, placeholder} = props

    return(
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
          />
        </Col>
      </FormGroup>
    )
}

export default LoginFormField
