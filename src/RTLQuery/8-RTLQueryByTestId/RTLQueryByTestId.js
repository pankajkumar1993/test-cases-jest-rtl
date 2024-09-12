import React from 'react'

const RTLQueryByTestId = () => {
    return (
        <div>
            <h1>getByTestId an getAllByTestId</h1>

            <div data-testid="div-test-id">
                Testing with div 2 with testing id
            </div>

            <div data-testid="div-test-id">
                Testing with div 2 with testing id
            </div>

            <h2 data-testid="h2-id">h2 tag testing</h2>
        </div>
    )
}

export default RTLQueryByTestId