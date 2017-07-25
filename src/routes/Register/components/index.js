import React from 'react'
import PropTypes from 'prop-types'
import Form from "./Form"
import "./style.scss"


export const Page = ({registerUser}) => (
  <div>

    <Form />
    <button className='btn btn-primary' onClick={registerUser}>
      Register Now!
    </button>

  </div>
)

Page.propTypes = {
  registerUser: PropTypes.func.isRequired,

}

export default Page
