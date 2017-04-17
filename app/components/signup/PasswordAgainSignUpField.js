import React from 'react'

import SignUpField from './SignUpField'

function PasswordAgainSignUpField(props){
    const {dict, value, error, prevError, refValue, onChange, onFocus, assertError} = props

    const onBlur = ()  => {
      if(!prevError && value !== refValue) assertError('passwordsDontMatch')
    }

    return (
      <SignUpField
        controlId={"sign_up_password_again_wrapper"}
        type={"password"}
        value={value}
        error={error}
        dict={dict}
        label={"passwordAgain"}
        autoFocus={false}
        placeholder={"writePasswordAgain"}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    )
}

export default PasswordAgainSignUpField
