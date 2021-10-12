import React from 'react'
import PropTypes from 'prop-types';

function Button( { color , text , onClick}) {

    

    return <button onClick = {onClick} style = {{ backgroundColor : color }} className='btn'> {text} </button>
}

Button.defaultProps = {
    color : 'red'
} 

Button.propTypes = {
    color : PropTypes.string,
    text : PropTypes.string,
    onClick : PropTypes.func,
}


export default Button;
