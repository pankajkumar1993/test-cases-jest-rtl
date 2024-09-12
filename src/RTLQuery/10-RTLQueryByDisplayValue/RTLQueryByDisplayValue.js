import React from 'react'

const RTLQueryByDisplayValue = () => {
    return (
        <div>
            <h1>getByDisplayValue && getAllByDisplayValue</h1>
            <input type="text" defaultValue="anil" />

            <input type="text" defaultValue="kumar" />
            <textarea defaultValue="kumar"></textarea>

            <textarea defaultValue="john dow"></textarea>
            <input type="radio" defaultValue="male" />
        </div>
    )
}

export default RTLQueryByDisplayValue