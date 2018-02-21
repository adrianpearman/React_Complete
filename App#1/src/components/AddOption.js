import React, { Component } from 'react'

class AddOption extends Component{
  state = {
    error: undefined
  }

  handleAddOption = (event) => {
    event.preventDefault()
    const option = event.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)

    this.setState(() => ({ error: error }))

    if (!error) {
      // Setting input to a null value
      event.target.elements.option.value = ''
    }
  }


  render() {
    return(
      <div>
        {this.state.error ? <p className='add-option-error'>{this.state.error}</p> : null}
      <form className='add-option' onSubmit={this.handleAddOption}>
          <input className='add-option__input' name='option' type='text'/>
          <button className='button'>Add Option</button>
        </form>
      </div>
    )
  }
}


export default AddOption
