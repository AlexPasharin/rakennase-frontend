import React from 'react'

function UserGreeting(props){
  return (<h1>{props.dict.greeting + ', ' + props.username}</h1>)
}

export default UserGreeting
