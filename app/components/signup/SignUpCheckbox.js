import React from 'react'

import Checkbox from 'react-bootstrap/lib/Checkbox'
import Col from 'react-bootstrap/lib/Col'
import FormGroup from 'react-bootstrap/lib/FormGroup'

function SignUpCheckbox(props){

  const {dict, error, termsAccepted, onChange} = props

  return(
    <div>
      <FormGroup>
        <Col sm={10} smOffset={2}>
          <Checkbox
            checked = {termsAccepted}
            onChange = {onChange}
          >
            {dict.accept}
            {' '}
            <a href="http://www.rakennaxxx.com">{dict.terms}</a>
          </Checkbox>
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

export default SignUpCheckbox
