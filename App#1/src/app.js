import validator from 'validator';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'

// console.log(validator.isEmail('adrianpearman12@gmail.com'))

class App extends Component {
  render(){
    return(
      <IndecisionApp />
    )
  }
}


// Using Local Storage
// localStorage.setItem('name'. 'Adrian')
// localStorage.getItem('name')
// localStorage.remove('name')
// .clear
// let json = JSON.stringify({ age: 26})
// JSON.parse(json)
// parseInt()
// isNaN()
// --------------------------------


ReactDOM.render(<App />, document.getElementById('app'))
