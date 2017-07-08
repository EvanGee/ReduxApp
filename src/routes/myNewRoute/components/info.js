import React from 'react'
import PropTypes from 'prop-types'
import FileForm from "./fileform"
export const Info = ({setInfo, info}) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Here is some new info </h2>
    <button className='btn btn-primary' onClick={setInfo}>
      setInfo
    </button>
    <FileForm/>
    {info}
  </div>
)

Info.propTypes = {
  setInfo: PropTypes.func.isRequired,
  info: PropTypes.number.isRequired
}

export default Info
