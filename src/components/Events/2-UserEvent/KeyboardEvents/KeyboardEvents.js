import React from 'react'

const KeyboardEvents = () => {
    const [name, setName] = React.useState('')
    return (
        <div>
            <h1>Onchange or KeyboardEvents</h1>
            <h2>{name}</h2>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="enter name" />
        </div>
    )
}

export default KeyboardEvents