import React from 'react'

const Action = (props) => {
  return(
    <div>
      <button onClick={props.handleRandomPick} disabled={!props.hasOptions}>
        What Should I do?
      </button>
    </div>
  )
}

export default Action
