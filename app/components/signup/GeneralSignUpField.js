import React from 'react'

import UsernameSignUpField from './UsernameSignUpField'
import EmailSignUpField from './EmailSignUpField'
import PasswordSignUpField from './PasswordSignUpField'
import PasswordAgainSignUpField from './PasswordAgainSignUpField'

function GeneralSignUpField(props){

  switch (props.type) {
    case 'username':
      return <UsernameSignUpField {...props} />
    case 'email':
      return <EmailSignUpField {...props} />
    case 'password':
      return <PasswordSignUpField {...props} />
    case 'passwordAgain':
      return <PasswordAgainSignUpField {...props} />

    default: return null

  }
}

export default GeneralSignUpField
