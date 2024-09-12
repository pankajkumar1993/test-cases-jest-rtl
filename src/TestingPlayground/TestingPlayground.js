import React from 'react'

const TestingPlayground = () => {
    return (
        <div>
            <h1>Testing Playground</h1>

            <form>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        aria-describedby="email-help"
                        placeholder="Enter email"
                    />
                    <small id="email-help">It's safe with us. We hate spam!</small>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                    />
                </div>
                <div>
                    <label htmlFor="terms">
                        <input
                            type="checkbox"
                            id="terms"
                        />
                        <span>
                            I accept the <a href="https://www.example.com"> terms and conditions</a>
                        </span>
                    </label>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default TestingPlayground