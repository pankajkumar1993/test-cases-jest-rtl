import React from 'react'
import otherMethod from '../../helper';

const FunctionalComponent = () => {
    const [data, setData] = React.useState("");

    const handleClick = () => {
        setData("Hi")
    }


    // Difficult to test this method, take it out from component
    // const otherMethod = () => {
    //     console.log("other method which is not in ui");
    //     return "other method"
    // }

    return (
        <div>
            <h1>FunctionalComponent</h1>
            <button data-testid="btn1" onClick={handleClick}>Update</button>
            <h2>{data}</h2>
            <button onClick={otherMethod}>Click</button>
        </div>
    )
}

export default FunctionalComponent