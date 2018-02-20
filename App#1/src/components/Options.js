import React from 'react'
import Option from './Option'

const Options = (props) => {
  let options = props.options.map((option) => { return(
    <Option key={option} value={option} deleteOption={props.deleteOption}/>
  )})

  return(
    <div>
      <button onClick={props.deleteOptionsHandle}>Clear Option</button>
      <h3>Current Options:</h3>
      <p>Options available: {props.options.length}</p>
      <ol>
        {options}
      </ol>
    </div>
  )
}

export default Options
