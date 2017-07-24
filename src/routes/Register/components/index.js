import React from 'react'
import PropTypes from 'prop-types'

export const Page = ({registerUser}) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Here is some new info </h2>
    <button className='btn btn-primary' onClick={registerUser}>
      Register Now!
    </button>

    <form>
        Email: <input type="email" name="email" id="Email"/><br/>
        Password: <input type="password" name="password" id="Password" /><br/>
        <button type="button" onClick={()=> register(emailVal, passwordVal)}>/api/login</button>
    </form>

  </div>
)

Page.propTypes = {
  registerUser: PropTypes.func.isRequired,

}

export default Page
