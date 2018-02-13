

class IndecisionApp extends React.Component{
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleRandomPick = this.handleRandomPick.bind(this)
    this.state = {
      title: 'Indecison App',
      subTitle: 'Put your life in the hands of a computer',
      options: []
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
    this.setState(() => {
      return{
        options: []
      }
    })
  }

  render(){
    return(
      <div>
        <Header title={this.state.title} subTitle={this.state.subTitle}/>
        <Action handleRandomPick={this.handleRandomPick} hasOptions={this.state.options.length > 0} options={this.state.options}/>
        <Options options={this.state.options} deleteOptionsHandle={this.handleDeleteOptions}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    )
  }
}

class Header extends React.Component{
  render(){
    return(
       <div>
         <h1>{this.props.title}</h1>
         <h2>{this.props.subTitle}</h2>
       </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return(
      <div>
        <button onClick={this.props.handleRandomPick} disabled={!this.props.hasOptions}>
          What Should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component{
  render(){
    let options = this.props.options.map((option) => { return <Option key={option} value={option}/>})
    return(
      <div>
        <button onClick={this.props.deleteOptionsHandle}>Clear Option</button>
        <h3>Current Options:</h3>
        <p>Options available: {this.props.options.length}</p>
        <ol>
          {options}
        </ol>
      </div>
    )
  }
}

class Option extends React.Component{
  render(){
    return(
      <li>{this.props.value}</li>
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

    this.setState(() => {
      return {
        error: error
      }
    })

    // Setting input to a null value
    event.target.elements.option.value = ''
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

// --------------------------------

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
