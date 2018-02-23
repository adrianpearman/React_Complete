import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = (props) => {
  console.log(props);
  return(
    <div>
      <h1>Portfolio ID: {props.match.params.id}</h1>
      <Link to='/'>Back to Portfolio Dashboard</Link>
    </div>
  )
}

export default Portfolio
