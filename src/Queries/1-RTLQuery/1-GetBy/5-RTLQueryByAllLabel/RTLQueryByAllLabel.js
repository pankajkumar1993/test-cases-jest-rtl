import React from 'react'

const RTLQueryByLabel = () => {
    return (
        <div>
            <h1>getAllByLabelText</h1>

            {/* inputs */}
            <label htmlFor="user-name1">UserName</label>
            <input type="text" id="user-name1" defaultValue="john" />

            <label htmlFor="user-name2">UserName</label>
            <input type="text" id="user-name2" defaultValue="john" />

            <label htmlFor="user-name3">UserName</label>
            <input type="text" id="user-name3" defaultValue="john" />

            {/* Checkboxes */}
            <label htmlFor="skill1">Skills</label>
            <input type="checkbox" id="skill1" defaultChecked />

            <label htmlFor="skill2">Skills</label>
            <input type="checkbox" id="skill2" defaultChecked />

            <label htmlFor="skill3">Skills</label>
            <input type="checkbox" id="skill3" defaultChecked />

        </div>
    )
}

export default RTLQueryByLabel