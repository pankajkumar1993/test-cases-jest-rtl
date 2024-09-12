import React from 'react'

const InputBox = () => {
    return (
        <div>
            <input
                type='text'
                placeholder='Enter User Name'
                name='username' id='userId'
                value={"John"}
                readOnly />
        </div>
    )
}

export default InputBox