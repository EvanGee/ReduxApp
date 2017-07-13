import React from 'react'
import PropTypes from 'prop-types'

export const form = ({}) => (
    <form action= "/fileInput" accept="image/gif, image/jpeg">
        file name: <input type="text" name="fname"/><br/>
        Your Image: <input type="file" name="pic"/>
        <input type="submit" value="Submit"/>
    </form>
)

form.propTypes = {
}

export default form
