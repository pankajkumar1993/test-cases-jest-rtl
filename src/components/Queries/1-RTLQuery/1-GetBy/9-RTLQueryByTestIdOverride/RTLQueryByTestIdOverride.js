import React from 'react'

const RTLQueryByTestIdOverride = () => {
    return (
        <div>
            <h1>Overriding data-testid</h1>

            {/* <div data-testid="div-test-id">
                Dummy Text
            </div> */}

            <div element-id="div-test-id">
                Dummy Text
            </div>
        </div>
    )
}

export default RTLQueryByTestIdOverride