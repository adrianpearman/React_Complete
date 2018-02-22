import React, {Component} from 'react'
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'

// Components
import Header from '../components/Header'
import PortfolioDashboard from '../components/PortfolioDashboard'
import ContactPage from '../components/ContactPage'
import Portfolio from '../components/Portfolio'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => {
  return(
    <BrowserRouter >
      <div>
        <Header />
        <Switch>
          <Route path='/' exact={true} component={PortfolioDashboard}/>
          <Route path='/portfolio/:id' component={Portfolio}/>
          <Route path='/help' component={HelpPage}/>
          <Route path='/contact' component={ContactPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
