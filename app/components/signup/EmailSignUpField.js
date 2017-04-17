import React from 'react'

import SignUpField from './SignUpField'

function EmailSignUpField(props){

    const {dict, value, error, prevError, onChange, onFocus, assertError} = props

    const onBlur = ()  => {
      if(!prevError && !value.match(/.+\@.+\..+[^\.]$/)) assertError('emailNotValid')
    }

    return (
      <SignUpField
        controlId={"sign_up_email_wrapper"}
        type={"email"}
        value={value}
        error={error}
        dict={dict}
        label={"email"}
        autoFocus={false}
        placeholder={"writeEmail"}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    )
}

export default EmailSignUpField
