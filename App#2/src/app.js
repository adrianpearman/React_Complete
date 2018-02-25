// Modules
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// Components
import AppRouter from './router/AppRouter'
import configStore from './redux/store/configStore'
import { addExpense } from './redux/actions/expenses'
import { setTextFilter } from './redux/actions/filters'

import getVisibleExpenses from './redux/selectors/expenses'
// Styling
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configStore();

store.dispatch(addExpense({ description: 'Mortgage Bill', createdAt: 500, amount: 80000}))
store.dispatch(addExpense({ description: 'Car Bill', createdAt: 1000, amount: 6500}))
store.dispatch(addExpense({ description: 'Water Bill', createdAt: 100000, amount: 4000}))
store.dispatch(addExpense({ description: 'Phone Bill', createdAt: 1600, amount: 800}))

// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'))
// }, 3000)


const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses);


const App = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(App, document.getElementById('app'))
