import { render, screen } from "@testing-library/react";
import RTLQueryByPlaceholder from "./RTLQueryByPlaceholder";


// test("test case for single input field", () => {
//     render(<RTLQueryByPlaceholder />);
//     const input = screen.getByPlaceholderText('Enter the name');
//     expect(input).toBeInTheDocument();
//     expect(input).toHaveValue('Anil')
// })


test("test case for multiple input field", () => {
    render(<RTLQueryByPlaceholder />);
    const inputs = screen.getAllByPlaceholderText('Enter the name');

    for (let i = 0; i < inputs.length; i++) {
        expect(inputs[i]).toBeInTheDocument();
        expect(inputs[i]).toHaveValue('Anil');
    }
})


