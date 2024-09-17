import React from 'react'

const Debugging = () => {
    const [count, seCount] = React.useState(0)
    return (
        <div>
            <h1>Debugging</h1>
            <button onClick={() => seCount(count => count + 1)}>Click to increase: {count}</button>
            <h2>Heading 2</h2>
            <h5>Heading 5</h5>
        </div>
    )
}

export default Debugging