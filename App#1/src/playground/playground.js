// RENDERING OBJECTS EXAMPLE
const userName = 'Adrian Pearman'
let birthYear = 1991
let currentYear1 = new Date()
let currentYear = currentYear1.getFullYear()
let currentAge = currentYear - birthYear

let user = {
  name: 'Adrian Pearman',
  age: currentAge,
  location: 'Toronto, Ontario'
}

let getLocation = (location) => {
  if (location) {
    return <p>Location: {location}</p>
  }
}

const template2 = (
  <div>
    <h1>Name: {user.name ? user.name : 'Name not found'} </h1>
    {user.age && user.age > 18 ? <p>Age: {user.age}</p> : null}
    {getLocation(user.location)}
  </div>
)

ReactDOM.render(template2, appRoot)

// COUNTER EXAMPLE
// NON COMBILED VERSION
let count = 0
const addOne = () => {
  count++
  renderCouterApp()
}
const minusOne = () => {
  count--
  renderCouterApp()
}
const resetCount = () => {
  count = 0
  renderCouterApp()
}

const renderCouterApp = () => {
  const template3 = (
    <div>
      <h1>Count: {count}</h1>
      <button id='my-id' className='button' onClick={addOne}> +1 </button>
      <button id='my-id' className='button' onClick={minusOne}> -1 </button>
      <button id='my-id' className='button' onClick={resetCount}> Reset </button>
    </div>
  )
  ReactDOM.render(template3, appRoot)
}

renderCouterApp()

// firstName = (name) => name.split('')[0]
// const multiplier = {
//   numbers: [1,2,3,4,5,6,7],
//   multiplyBy () {
//     return this.numbers.forEach((number) => number * 2)
//   },
//   multiply(a){
//     return this.numbers.map((number) => number * a)
//   }
// }

// COMPILED VERSION
class Counter extends React.Component{
  constructor(props){
    super(props)
    this.increaseByOne = this.increaseByOne.bind(this)
    this.decreaseByOne = this.decreaseByOne.bind(this)
    this.resetCounter = this.resetCounter.bind(this)
    this.state = {
      counter: 0
    }
  }

  componentDidMount(){
    const stringCounter = localStorage.getItem('counter')
    const number = parseInt(stringCounter, 10)

    if (!isNaN(number)) {
      this.setState(() => ({ counter: number }))
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.counter !== this.state.counter) {
      const jsonCounter = JSON.stringify(this.state.counter)
      localStorage.setItem('counter', jsonCounter)
    }
  }

  increaseByOne(){
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }

  decreaseByOne(){
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1
      }
    })
  }

  resetCounter(){
    this.setState((prevState) => {
      return {
        counter: prevState.counter = 0
      }
    })
  }

  render(){
    return(
      <div>
        <h1>Count: {this.state.counter} </h1>
        <button onClick={this.increaseByOne}>+1</button>
        <button onClick={this.decreaseByOne}>-1</button>
        <button onClick={this.resetCounter}>Reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'))



// VISIBILITY EXAMPLE
// NON COMPILED VERSION
let visible = false
const visibleToggle = (event) => {
  event.preventDefault()

  // Refactored Method
  visible = !visible
  renderVisibility()

  // Longer Method
  // if (visible == false) {
  //   visible = true
  //   renderVisibility()
  // } else {
  //   visible = false
  //   renderVisibility()
  // }

}
const renderVisibility = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={visibleToggle}> {visible ?  'Hide Details' : 'Show Details'} </button>
      {visible ? <p>Here are some details</p> : null}
    </div>
  )
  ReactDOM.render(template, appRoot)
}
renderVisibility()

// COMPILED VERSION
class Visibility extends React.Component{
  constructor(props){
    super(props)
    this.visibleToggle = this.visibleToggle.bind(this)
    this.state = {
      visible: false
    }
  }

  visibleToggle(){
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      }
    })
  }

  render(){
    return(
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.visibleToggle}> {this.state.visible ?  'Hide Details' : 'Show Details'} </button>
        {this.state.visible ? <p>Here are some details</p> : null}
      </div>
    )
  }
}

ReactDOM.render(<Visibility /> , document.getElementById('app'))


// CLASS EXAMPLES
class Person {
  constructor(name, age){
    this.name = name || 'Name not provided'
    this.age = age || 0
  }
  getGreeting(){
    return `Hello! My name is ${this.name}!`
  }
  getDescription(){
    return `Hello my name is ${this.name} and I'm currently ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major){
    super(name, age)
    this.major = major || 'Undecided'
  }
  hasMajor(){
    return this.major
  }
  getDescription(){
    let description = super.getDescription()
    if (this.hasMajor()) {
      description += ` My major is ${this.major}`
    }
    return description
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation){
    super(name, age)
    this.homeLocation = homeLocation
  }
  getGreeting(){
    let description = super.getGreeting()
    if (this.homeLocation) {
      description += ` I'm currently visiting from ${this.homeLocation}`
    }
    return description
  }
}

const me = new Person('Adrian Pearman', 26)
const other = new Person()
const me2 = new Student('Adrian Pearman', 26, 'Human Resources')
const other2 = new Student()
const me3 = new Traveller('Adrian Pearman', 26, 'Bermuda')
const other3 = new Traveller()

console.log(me.getDescription());
console.log(other.getDescription());


// COMPLIED EXAMPLE
const app = {
  title: 'Another Title',
  subTitle: 'Another SubTitle',
  options: []
}

const appRoot = document.getElementById('app')

const onFormSumit = (event) =>{
  event.preventDefault()
  const option = event.target.elements.option.value;

  if (option) {
    app.options.push(option)
    event.target.elements.option.value = ''
    renderOptionsApp()
  } else {
    alert('Please enter an option')
  }
}

const clearOptions = (event) => {
  event.preventDefault()
  app.options = []
  renderOptionsApp()
}

const makeDecision = () => {
  const randNumber = Math.floor(Math.random() * app.options.length)
  const randSelection = app.options[randNumber]
  console.log(randSelection);
}

const renderOptionsApp = () => {
  const template =(
   <div>
     <h1>{app.title}</h1>
     {app.subTitle ? <p>{app.subTitle}</p> : null}
     {app.options.length > 0 ? <p>Here are your options</p> : <p>No options entered. <br /> Please enter an option</p>}
     <p>{app.options.length}</p>
     <button disabled={app.options.length === 0} onClick={makeDecision}> What should i do? </button>
     {app.options.length === 0 ? null : <button onClick={clearOptions}>Clear Option</button>}
     <ol>
       {app.options.map((option) => <li key={option}>{option}</li>)}
     </ol>
     <form onSubmit={onFormSumit}>
       <input type='text' name='option'/>
       <button>Add Option</button>
     </form>
   </div>
  )
  ReactDOM.render(template, appRoot)
}

renderOptionsApp()

// Explaining the diference between stand ES6 coding for react and using babel-class-transform property
class OldSyntax {
  constructor(){
    this.getGreeting = this.getGreeting.bind(this)
    this.name = 'Adrian'
  }
  getGreeting(){
    return `Hello my name is ${this.name}`
  }
}

const oldSyntax = new OldSyntax()
const getGreeting = oldSyntax.getGreeting
console.log(getGreeting())

// The newer syntax would allow for the constructor to no longer be needed in the application
class NewSyntax {
  name='Adrian1'
  getGreeting = () => {
    return `Hello my name is ${this.name}`
  }
}

const newSyntax = new NewSyntax()
const getNewGreeting = newSyntax.getGreeting
console.log(getNewGreeting())
