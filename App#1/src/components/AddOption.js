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
        {this.state.error ? <p>{this.state.error}</p> : null}
        <form onSubmit={this.handleAddOption}>
          <input name='option' type='text'/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}


export default AddOption
