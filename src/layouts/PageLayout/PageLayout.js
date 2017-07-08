import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import NavLink from '../components/navlink'

export const PageLayout = ({ children }) => (
  <div className='text-center'>
    <div className="header">
      <IndexLink to='/' className="Logo">My App</IndexLink>
      <div className="navContainer">
      <NavLink to="/counter">Counter</NavLink>
      <NavLink to="/info">Send To Server</NavLink>
      <NavLink to="/donate">Donate</NavLink>
      <NavLink to="/signIn">Sign In</NavLink>
      </div>
    </div>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
