import React from 'react'

function DeveloperBox(props){
  const {dict, developer} = props
  const {name, textIndex} = developer
  const textProp = 'developer' + textIndex + 'Text'
  const text = dict[textProp] ?
                dict[textProp] :
                'Lorem ipsum dolor sit amet, adipiscing elit Aenean commodo ligula eget.'
  const photoSrc = developer.photoSrc || 'http://pingendo.github.io/pingendo-bootstrap/assets/user_placeholder.png'

  return(
    <div>
    <div className="col-md-2">
        <img src={photoSrc} className="img-circle img-responsive" />
    </div>
    <div className="col-md-4">
        <h3 className="text-left">{name}</h3>
        <p className="text-left">{text}</p>
    </div>
    </div>
  )
}

export default DeveloperBox
