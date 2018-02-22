import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioDashboard = () => {
  return (
    <div>
      <ol>
        <li><Link to='./portfolio/1'> Portfolio #1</Link></li>
        <li><Link to='./portfolio/2'> Portfolio #2</Link></li>
        <li><Link to='./portfolio/3'> Portfolio #3</Link></li>
        <li><Link to='./portfolio/4'> Portfolio #4</Link></li>
        <li><Link to='./portfolio/5'> Portfolio #5</Link></li>
      </ol>
    </div>
  )
}

export default PortfolioDashboard
