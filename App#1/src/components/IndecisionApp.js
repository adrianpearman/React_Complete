import React, { Component} from 'react'

// Stateful Components
import AddOption from './AddOption'

// Stateless Components
import Action from './Action'
import Header from './Header'
import Options from './Options'
import OptionModal from './OptionModal'

class IndecisionApp extends Component{
  state = {
    options: [],
    selectedOption: undefined
  }

  handleAddOption = (option) =>  {
    if (!option) {
        return 'Please enter an option'
    } else if (this.state.options.indexOf(option) > -1) {
        return 'This option is already added'
    }

    // Adding the option value to the list of options
    this.setState((prevState) => {
      return{
        options: prevState.options.concat(option)
      }
    })
  }

  handleRandomPick = () => {
    const randNumber = Math.floor(Math.random()*this.state.options.length)
    const randOption = this.state.options[randNumber]
    this.setState(() => ({ selectedOption: randOption}))
  }

  clearSelectedModal = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteSingleOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option
      })
    }))
  }

  componentDidMount(){
    // verifies whether the data submitted is valid JSON
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)

      if (options) {
        this.setState(() => ({ options: options }))
      }
    } catch (e) {
      // does nothing if there is an error
    }
  }

  // saves the current state to local storage
  componentDidUpdate(prevProps, prevState){
    if (prevState.options.length !== this.state.options.length ) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem("options", json)
    }
  }


  render(){
    return(
      <div className='container__background'>
        <Header />
        <div className='container'>
          <Action handleRandomPick={this.handleRandomPick} hasOptions={this.state.options.length > 0} options={this.state.options}/>
          <div className='widget'>
            <Options options={this.state.options} deleteOptionsHandle={this.handleDeleteOptions} deleteOption={this.handleDeleteSingleOption}/>
            <AddOption handleAddOption={this.handleAddOption}/>
          </div>
        </div>
        <OptionModal
          selectedOption = {this.state.selectedOption}
          closeModal= {this.clearSelectedModal}
        />
      </div>
    )
  }
}

export default IndecisionApp
