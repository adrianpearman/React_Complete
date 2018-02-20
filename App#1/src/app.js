import validator from 'validator';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render(){
    return(
      <div>
        <h1>WEBPACK</h1>
      </div>
    )
  }
}

// const template = React.createElement('h1', {}, 'test')

ReactDOM.render(<App />, document.getElementById('app'))
// ReactDOM.render(template, document.getElementById('app'))

console.log(validator.isEmail('adrianpearman12@gmail.com'))
