import React from 'react'
import { connect } from 'react-redux' // used to connect to the redux store

import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../redux/selectors/expenses'

const ExpenseList = (props) => {
  let Expenses = props.expenses.map((expense, index) => {
      return(
        <ExpenseListItem
          key={index}
          id={expense.id}
          description={expense.description}
          createdAt={expense.createdAt}
          amount={expense.amount}
        />
      )
  })

  return (
    <div>
      <h1>Expense List</h1>
      {Expenses}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList)


{/* <p>Expense List</p>
{props.expenses.length}
{props.filters.text} */}
