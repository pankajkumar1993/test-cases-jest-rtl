import React from 'react'

const OnChangeEvents = () => {
    const [data, setData] = React.useState('');
    return (
        <div>
            <input
                type="text"
                value={data}
                onChange={(e) => setData(e.target.value + "test")}
            />
        </div>
    )
}

export default OnChangeEvents