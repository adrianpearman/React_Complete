import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../redux/actions/expenses'

const ExpenseListItem = (props) => {
  return (
    <div>
      <h3>Description: {props.description}</h3>
      <p>Date: {props.createdAt}</p>
      <p>Amount: {props.amount}</p>
      <button onClick={() => {
        props.dispatch(removeExpense({ id: props.id}))
      }}>
        Remove Expense
      </button>
    </div>
  )
}

export default connect()(ExpenseListItem)
