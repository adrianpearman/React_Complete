import React from 'react'
import { connect } from 'react-redux' // used to connect to the redux store

const ExpenseList = (props) => {
  return (
    <div>
      <p>Expense List</p>
      {props.expenses.length}
      {props.filters.text}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseList)
