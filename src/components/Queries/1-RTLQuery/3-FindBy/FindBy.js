import React from "react";

const FindBy = () => {
    const [data, setData] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => {
            setData(true)
        }, 2000)
    })

    return (
        <div>
            <h1>findBy and findAllBy</h1>

            {data ? <h1>Data found</h1> : <h1>No data found</h1>}
        </div>
    )
}

export default FindBy