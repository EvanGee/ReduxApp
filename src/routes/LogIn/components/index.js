import React from 'react'
import PropTypes from 'prop-types'
import SignUpForm from "./SignUpForm"
export const Page = ({logIn, loggedIn}) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Log In Now!</h2>
    <SignUpForm func={logIn}/>
  </div>
)

Page.propTypes = {
  logIn: PropTypes.func.isRequired,
}

export default Page
