import React from 'react'


const RTLQueryByName = () => {
    return (
        <div>
            <h1>Get by role using name</h1>

            <button>Click Me 1</button>
            <button>Click Me 2</button>

            <label htmlFor="input1">User Name</label>
            <input type="text" id="input1" />

            <label htmlFor="input2">User Age</label>
            <input type="text" id="input2" />

            {/* Custom Role  */}
            <div role="test">Dummy text</div>
        </div>
    )
}

export default RTLQueryByName