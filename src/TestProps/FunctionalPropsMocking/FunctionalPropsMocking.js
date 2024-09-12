import React from 'react'

const FunctionalPropsMocking = (props) => {
    return (
        <div>
            <h1>Functional Props and Mocking</h1>
            <button onClick={props.testFunction}>Click</button>
        </div>
    )
}

export default FunctionalPropsMocking