import { render, screen } from "@testing-library/react";
import RTLQueryByAllLabel from "./RTLQueryByAllLabel";


test("get by label text input", () => {
    render(<RTLQueryByAllLabel />)
    const inputs = screen.getAllByLabelText('UserName');


    for (let i = 0; i < inputs.length; i++) {
        expect(inputs[i]).toBeInTheDocument();
        expect(inputs[i]).toHaveValue('john')
    }
})



test("get by label text checkboxes", () => {
    render(<RTLQueryByAllLabel />)
    const checkboxes = screen.getAllByLabelText('Skills')

    for (let i = 0; i < checkboxes.length; i++) {
        expect(checkboxes[i]).toBeInTheDocument();
        expect(checkboxes[i]).toBeChecked();
    }
})