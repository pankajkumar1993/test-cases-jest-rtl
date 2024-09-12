import { render, screen } from "@testing-library/react";
import QueryBy from "./QueryBy";

test('queryBy text Case', () => {
    render(<QueryBy />)

    // test element by queryBy
    // TestingLibraryElementError: Unable to find an element with the text: Login. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.
    // const btn = screen.getByText('Login');
    // const btn = screen.getByText('Logout');
    // expect(btn).toBeInTheDocument()

    // we can find the button in the code with queryBy but conot find with getBy
    // const btn = screen.queryByText('Logout');
    const btn = screen.queryByText('Login');
    expect(btn).not.toBeInTheDocument()


})


test('queryBy text Case', () => {
    render(<QueryBy />)
    const btn = screen.queryAllByText('Login');
    for (let i = 0; i < btn.length; i++) {
        expect(btn[i]).not.toBeInTheDocument()
    }


})


