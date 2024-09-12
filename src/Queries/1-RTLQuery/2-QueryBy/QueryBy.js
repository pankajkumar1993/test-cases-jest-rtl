const QueryBy = () => {
    let login = true;
    return (
        <div>
            <h1>queryBy and queryAllBy</h1>
            {login ? <button>Logout</button> : <button>Login</button>}
        </div>
    )
}

export default QueryBy