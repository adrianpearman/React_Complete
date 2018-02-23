import { createStore, combineReducers } from 'redux'
// used to generate a random id value
import uuid from 'uuid'

// ADD_EXPENSE
const addExpense = (
  { description = '',
    notes = '',
    amount = 0,
    createdAt = 0} = {}
  ) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    notes,
    amount,
    createdAt
  }
})

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})

// SET_START_DATE
const setStartDate = (startDate = 0) => ({
  type: 'SET_START_DATE',
  startDate
})

// SET_END_DATE
const setEndDate = (endDate = 0) => ({
  type: 'SET_END_DATE',
  endDate
})


// Expenses Reducers
const expensesReudcersDefaultState = []
const expensesReducers = (state = expensesReudcersDefaultState, action) => {
  switch(action.type){
    case 'ADD_EXPENSE':
      // return state.concat(action.expense)
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => {
        return id !== action.id
      })
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })
    default:
      return state
  }
}

// Filters Reducers
const filterReducersDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filterReducers = (state = filterReducersDefaultState, action) => {
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state
  }
}

// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducers,
    filters: filterReducers
  })
)

// Getting the visual expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
    const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'amount') {
      a.amount < b.amount ? 1 : -1
    }
  })
}

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'coffee', amount: 200, createdAt: 1000}))
const expenseThree = store.dispatch(addExpense({ description: 'insurance', amount: 7800, createdAt: 100}))
const expenseFour = store.dispatch(addExpense({ description: 'rent', amount: 10000, createdAt: 10000}))
const expenseTwo = store.dispatch(addExpense({ description: 'more insurance', amount: 2500, createdAt: -1000 }))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 400 }))

// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())

// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(100))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(250))
// store.dispatch(setEndDate())

// store.dispatch(setTextFilter('insurance'))









const demoState = {
  expenses: [{
    id: '12342345',
    desciption: 'February Rent',
    note: 'Normal Payment for apartment',
    amount: 107600,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}



// using the spread operators on objects
// currently only supported with babel plugins
// const user = {
//   name: 'Andrew',
//   age: 26
// }
//
// console.log({
//   ...user,
//   location: 'Spain'
// });
