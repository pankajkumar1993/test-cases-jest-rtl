import React from 'react'

const OnClickEvent = () => {
    const [data, setData] = React.useState('')
    return (
        <div>
            <button onClick={() => setData('Updated data')}>Update Data</button>
            <h2>{data}</h2>
        </div>
    )
}

export default OnClickEvent