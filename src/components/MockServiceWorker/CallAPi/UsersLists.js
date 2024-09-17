import React from 'react'

const UsersLists = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        let getData = async () => {
            const result = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await result.json();
            console.log(data);
            setData(data)

        }
        getData();
    }, [])
    return (
        <div>
            <h1>API Testing</h1>
            {/* <h2>List of users</h2> */}
            <ul>
                {data.map((res) => <li key={res.id}>{res.name}</li>)}
            </ul>
        </div>
    )
}

export default UsersLists