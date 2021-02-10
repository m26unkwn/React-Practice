import React from 'react'

export const User = (props) => {
    return (
        <div>
            <p>Name: {props.children} AGE:{props.age}</p>
        </div>
    )
}
