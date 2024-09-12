import React from 'react'

const UserEventClick = () => {
    const [data, setData] = React.useState('')
    return (
        <div>
            <h1>User Event</h1>
            <button onClick={() => setData('hello')}>Click Me</button>
            <h2>{data}</h2>
        </div>
    )
}

export default UserEventClick