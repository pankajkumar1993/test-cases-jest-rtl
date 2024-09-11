import { render, screen } from "@testing-library/react";
import FirstCase from "./FirstCase";
import TestHeading from "./TestHeading";


// ******* Test Case-1 *******
test("Test First React app case", () => {
    render(<FirstCase />);
    // const text = screen.getByText('First React Test Case');
    const text = screen.getByText(/First React Test Case/i); // ignore case insensitive
    const text2 = screen.getByText(/Reactjs/i); // ignore case insensitive
    const title = screen.getByTitle("logo")
    expect(text).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
    expect(title).toBeInTheDocument();
})


test("Test h1 Tag", () => {
    render(<TestHeading />)
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument()
})