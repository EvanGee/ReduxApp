import React from 'react'
import PropTypes from 'prop-types'

export const form = ({}) => (
    <form>
        Profile Name: <input type="text" name="fname"/><br/>
        Email: <input type="text" name="fname"/><br/>
        Password: <input type="text" name="fname"/><br/>
        <input type="submit" value="Submit"/>
    </form>
)

form.propTypes = {
}

export default form
