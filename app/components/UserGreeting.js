import React from 'react'

function UserGreeting(props){

  const greeting = (props.lang === 'us') ? 'Welcome' :  'Tervetuloa'

  return (
    <h1>
      {greeting + ', ' + props.username}
    </h1>
  )
}

export default UserGreeting
