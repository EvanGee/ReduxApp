import React from 'react'
import PropTypes from 'prop-types'

export const dropdown = function({items, title}) {
    return (
        <div className="dropdown">
        <span>{title}</span>
        <div className="dropdown-content">
            {items.map(function(d, i) {return <p key={i} className="dropdown-item">{d}</p>})}
        </div>
        </div>
    )
}

dropdown.propTypes = {
    items: PropTypes.array.isRequired
}
export default dropdown