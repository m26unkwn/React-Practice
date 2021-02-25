import React from 'react'

export const Child = (props) => {
    return (
        <div>
            <button onClick={props.doSomething}>
            Click Me
            </button>
            <h1>{props.title}</h1>
        </div>
    )
}
