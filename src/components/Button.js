import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
    return (
        <button
            // onClick={onClick} add in onclick event
            style={{ backgroundColor: color }}
            className='header_btn'
            color={color}
        >{text}</button>

    )
}

export default Button
