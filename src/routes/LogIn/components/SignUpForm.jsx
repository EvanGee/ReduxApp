import React from 'react'
import PropTypes from 'prop-types'


export const form = ( {func}) => (
    <form onSubmit={func()}>
        Email: <input type="text" name="email"/><br/>
        Password: <input type="text" name="password"/><br/>
        <input type="submit" value="Submit"/>
    </form>
)

form.propTypes = {
}

export default form
