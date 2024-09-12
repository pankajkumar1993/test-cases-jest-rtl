import React from 'react'

const RTLQueryByLabel = () => {
    return (
        <div>
            <h1>getbylabel</h1>
            {/* <label htmlFor="user-name">Username</label> */}
            {/* TestingLibraryElementError: Found a label with the text of: Username, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly. */}
            {/* <input type="text" id="user-name" /> */}

            <label htmlFor="user-name">Username</label>
            <input type="text" id="user-name" defaultValue="john" />

            <label htmlFor="skills">Skill</label>
            <input type="checkbox" id="skills" defaultChecked />
        </div>
    )
}

export default RTLQueryByLabel