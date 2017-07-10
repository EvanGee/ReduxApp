import React from 'react'
import PropTypes from 'prop-types'
import SignUpForm from "./SignUpForm"
export const Page = ({setInfo, info}) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Here is some new info </h2>
    <button className='btn btn-primary' onClick={setInfo}>
      setInfo
    </button>
    <SignUpForm/>
    {info}
  </div>
)

Page.propTypes = {
  setInfo: PropTypes.func.isRequired,
}

export default Page
