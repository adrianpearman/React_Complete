import React from 'react'

const Option = (props) => (
    <div>
      <li>
        {props.value}
        <button onClick={() => {props.deleteOption(props.value)}}>
          Remove
        </button>
      </li>
    </div>
)

export default Option
