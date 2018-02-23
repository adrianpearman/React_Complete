import { createStore } from 'redux'

// ActionCreators
const incrementCount = ({ incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy: incrementBy
})

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy: decrementBy
})


const setCount = ({count = count} = {}) => ({
  type: 'SET',
  count: count
})

const resetCount = ({ count = 0 } = {}) => ({
  type: 'RESET'
})

// creating the reducer
const countReducer = (state = { count: 0}, action) => {
  switch(action.type){
    case 'INCREMENT':
    // The typeof operator returns a string indicating the type of the unevaluated operand.
    // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
    return{
      count: state.count + action.incrementBy
    }
    case 'DECREMENT':
    // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
    return{
      count: state.count - action.decrementBy
    }
    case 'RESET':
    return{
      count: state.count = 0
    }
    case 'SET':
    return{
      count: state.count = action.count
    }
    default:
      return state
  }
}

const store = createStore(countReducer)

// this will show the changes in the redux store
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})



// Actions
// Increment the counter
// refactored action using the action creators
store.dispatch(incrementCount({ incrementBy: 5 }))

// older version of an action
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
})


// Decrement the counter
store.dispatch(decrementCount())

// Reset the counter
store.dispatch(resetCount())

// Setting the count
store.dispatch(setCount({ count: -101 }))
