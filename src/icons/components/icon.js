import React from 'react';

function Icon(props) {
    const {
        color,
        size,
    } = props
    return (
        <svg
            color={color}
            height={size}
            width={size}
            viewBox="0 0 448 512"
        >
            {props.children}
        </svg>
    )
}

export default Icon;