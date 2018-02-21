import React from 'react'
import Option from './Option'

const Options = (props) => {
  let options = props.options.map((option, index) => { return(
    <Option
      key={option}
      value={option}
      deleteOption={props.deleteOption}
      index={index + 1}
    />
  )})

  return(
    <div>
      <div className='widget-header'>
        <h3 className='widget-header__title'>Current Options:</h3>
        {props.options.length > 0 ? <h3 className='widget-header__title'>Options available: {props.options.length}</h3> : null}
        <button
          className='button button--link'
          onClick={props.deleteOptionsHandle}>
          {props.options.length > 0 ? 'Clear Options' : 'No Options Available'}
        </button>
      </div>
      {props.options.length > 0 ? null : <p className='widget__message'>Please add an option</p>}
      {options}
    </div>
  )
}

export default Options
