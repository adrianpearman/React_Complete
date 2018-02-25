import React, {Component} from 'react'
import moment from 'moment'
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';
// import 'react-dates/lib/css/_datepicker.css'

// const date = new Date()
const date = moment()
console.log(date.format('MMM Do YYYY'));





class ExpenseForm extends Component{
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false
  }

  isOutsideRange = () => {
    return false
  }

  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description: description }))
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note: note}))
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    if (amount > 0 && amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount: amount }))
    }
  }

  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt: createdAt }))
  }

  onFocusChange = ({focused}) => {
    this.setState(() => ({ calendarFocused: focused }))
  }

  onExpenseSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onExpenseSubmit}>
          <input
            type='text'
            placeholder='Description'
            value={this.state.description}
            autoFocus
            onChange={this.onDescriptionChange}/>
          <input
            type='number'
            placeholder='Amount'
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange = {this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={this.isOutsideRange}
          />
          <textarea
            placeholder='Leave a note for your expense (Optional)'
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm
