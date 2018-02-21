import React from 'react'

const Option = (props) => (
    <div className='option'>
      <p className='option__text'>{props.index} - {props.value}</p>
      <button
        className='button button--link'
        onClick={() => {props.deleteOption(props.value)}}>
        Remove
      </button>
    </div>
)

export default Option
