import React from 'react'
import PropTypes from 'prop-types'


export const form = ({LogIn, chEmail, chPass}) => (
    <form onSubmit={LogIn}>
        Email: <input type="email" name="email" id="Email" onChange={chEmail}/><br/>
        Password: <input type="password" name="password" id="Password" onChange={chPass}/><br/>
        <button onClick={()=> LogIn(emailVal, passwordVal)}>SUBMIT</button>
    </form>
)

form.propTypes = {
}

export default form
