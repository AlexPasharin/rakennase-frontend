import React from 'react'

import SignUpField from './SignUpField'

function UsernameSignUpField(props){
    const {dict, value, error, onChange, onFocus, assertError} = props

    const onBlur = ()  => {
      if(value.length < 3) assertError('usernameTooShort')
      else if(value.length > 30) assertError('usernameTooLong')
      else if(!value.match(/^[a-zA-ZäöåÄÖÅ0-9_]+$/)) assertError('usernameNotValid')
      else checkUsernameExists()
    }

    const checkUsernameExists = () => {
      const usernameExists = () => assertError('usernameExists')

      $.ajax({
          method: 'POST',
          url: rootUrl + "isUser",
          dataType: 'json',
          data: "username=" + value,

          success: function(result){
            if(result.taken === '1') usernameExists()
          }
      })
    }

    return (
      <SignUpField
        controlId={"sign_up_username_wrapper"}
        type={"text"}
        value={value}
        dict={dict}
        error={error}
        label={"username"}
        autoFocus={true}
        placeholder={"writeUsername"}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    )
}

export default UsernameSignUpField
