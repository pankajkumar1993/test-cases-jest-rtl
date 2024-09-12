import React from 'react'

const AssertionMethods = () => {
    return (
        <div>
            <h1>Assertion Methods</h1>
            <input
                className="test-style dummy"
                type="text"
                defaultValue="john cena"
                name="userName"
                id="user-name"
                data-test="test"
            />
            <button className="btn" disabled id="btn-id">Click Me</button>
        </div>
    )
}

export default AssertionMethods