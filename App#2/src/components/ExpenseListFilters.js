import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount } from '../redux/actions/filters'

const ExpenseListFilters = (props) => {
  return (
    <div>
      <input
        type='text'
        value={props.filters.text} onChange={(e) => {
          e.preventDefault()
          props.dispatch(setTextFilter(e.target.value))
        }}
      />
      <select
        value={props.filters.sortBy}
        onChange={(e) => {
          if (e.target.value === 'date') {
            console.log(props.dispatch(sortByDate()))
            props.dispatch(sortByDate())
          } else if (e.target.value === 'amount') {
            console.log(props.dispatch(sortByAmount()))
            props.dispatch(sortByAmount())
          }
        }}
      >
        <option value='date'>Date</option>
        <option value='amount'>Amount</option>
      </select>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)
