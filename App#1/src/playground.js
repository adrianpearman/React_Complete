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


// VISIBILITY EXAMPLE
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
