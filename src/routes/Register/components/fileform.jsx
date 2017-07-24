import React from 'react'
import PropTypes from 'prop-types'

export const form = ({register}) => (
    <form>
        Email: <input type="email" name="email" id="Email" onChange={}/><br/>
        Password: <input type="password" name="password" id="Password" onChange={}/><br/>
        <button type="button" onClick={()=> register(emailVal, passwordVal)}>/api/login</button>
    </form>
)

form.propTypes = {
}

export default form
