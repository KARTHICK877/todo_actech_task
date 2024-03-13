import React from 'react'

function Task(props) {
  return (
    <div>
      {props.name}
      <button onClick={props.onClick}>press me</button>
    </div>
  )
}

export default Task