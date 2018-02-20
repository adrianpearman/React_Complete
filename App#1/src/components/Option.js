import React from 'react'

const Option = (props) => {
  return(
    <div>
      <li>
        {props.value}
        <button onClick={() => {props.deleteOption(props.value)}}>
          Remove
        </button>
      </li>
    </div>
  )
}

export default Option
