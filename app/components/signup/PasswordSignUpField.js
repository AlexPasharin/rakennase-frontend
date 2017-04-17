import React from 'react'

import SignUpField from './SignUpField'

function PasswordSignUpField(props){
    const {dict, value, error, prevError, onChange, onFocus, assertError} = props

    const onBlur = ()  => {
      if(!prevError){
        if(/\s/.test(value)) assertError('passwordWhiteSpace')
        else if(value.length < 10) assertError('passwordTooShort')
        else if(value.length > 255) assertError('passwordTooLong')
      }
    }

    return (
      <SignUpField
        controlId={"sign_up_password_wrapper"}
        type={"password"}
        value={value}
        error={error}
        dict={dict}
        label={"password"}
        autoFocus={false}
        placeholder={"writePassword"}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    )
}

export default PasswordSignUpField
