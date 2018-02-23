import React from 'react'
import ReactDOM from 'react-dom'

// a Higher Order Component (HOC) is a compont that renders another Component
// it allows us to reuse code, render hijcking, prop manipulation and abstract state

const Info = (props) => {
  return(
    <div>
      <h1>info</h1>
      <p>The info is: {props.info}</p>
    </div>
  )
}

const withAdminWarning = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        {props.isAdmin ? <p>This is private information, do not share!</p> : null }
        <WrappedComponent {...props}/>
      </div>
    )
  }
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        {props.isAuthenticated ?
          (<WrappedComponent {...props}/>):
          (<p>This is provate information, please log in!</p>) }
      </div>
    )
  }
}

const AdminInfo = withAdminWarning(Info)
const AuthAdmin = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={false} info='more information'/>, document.getElementById('app'))
ReactDOM.render(<AuthAdmin isAuthenticated={true} info="you've been authenticated!"/>, document.getElementById('app'))
