import validator from 'validator';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

// console.log(validator.isEmail('adrianpearman12@gmail.com'))


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
