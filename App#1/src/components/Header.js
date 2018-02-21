import React from 'react'

const Header = (props) => (
   <div className='header'>
     <div className='container container__text'>
       <h1 className='header__title'>{props.title}</h1>
       <h2 className='header__subtitle'>{props.subTitle}</h2>
     </div>
   </div>
)

Header.defaultProps = {
  title: 'Indecison App',
  subTitle: 'Put your life in the hands of an application'
}

export default Header
