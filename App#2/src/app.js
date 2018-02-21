import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

class App extends Component {
  render(){
    return(
      <div>
        <h1>hbcksbdck World</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
