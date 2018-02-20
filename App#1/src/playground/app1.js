// Stateful Components
class IndecisionApp extends React.Component{
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleRandomPick = this.handleRandomPick.bind(this)
    this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this)
    this.state = {
      options: []
    }
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

  handleAddOption (option) {
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

  handleRandomPick(){
    const randNumber = Math.floor(Math.random()*this.state.options.length)
    alert(this.state.options[randNumber]);
  }

  handleDeleteOptions(){
    this.setState(() => ({ options: [] }))
  }

  handleDeleteSingleOption(optionToRemove){
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option
      })
    }))
  }

  render(){
    return(
      <div>
        <Header />
        <Action handleRandomPick={this.handleRandomPick} hasOptions={this.state.options.length > 0} options={this.state.options}/>
        <Options options={this.state.options} deleteOptionsHandle={this.handleDeleteOptions} deleteOption={this.handleDeleteSingleOption}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    )
  }
}


class AddOption extends React.Component{
  constructor(props){
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleAddOption (event) {
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

// Stateless Components
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

const Option = (props) => {
  return(
    <div>
      <li>
        {props.value}
        <button onClick={() => {props.deleteOption(props.value)}}>
          Remove
        </button>
      </li>
    </div>
  )
}

const Header = (props) => {
  return(
     <div>
       <h1>{props.title}</h1>
       <h2>{props.subTitle}</h2>
     </div>
  )
}

Header.defaultProps = {
  title: 'Indecison App',
  subTitle: 'Put your life in the hands of a computer'
}

const Action = (props) => {
  return(
    <div>
      <button onClick={props.handleRandomPick} disabled={!props.hasOptions}>
        What Should I do?
      </button>
    </div>
  )
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





ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
