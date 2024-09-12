import React from 'react'

const ActFunction = () => {
    const [name, setName] = React.useState('')
    return (
        <div>
            <h1>Act Function</h1>
            <h2>{name}</h2>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="enter name" />
        </div>
    )
}

export default ActFunction