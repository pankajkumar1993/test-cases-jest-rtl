import { render, screen, configure } from "@testing-library/react";
import RTLQueryByDisplayValue from "./RTLQueryByDisplayValue";


test("testing input with display value", () => {
    render(<RTLQueryByDisplayValue />);
    const input = screen.getByDisplayValue('anil');
    expect(input).toBeInTheDocument()
})
test("testing textarea with display value", () => {
    render(<RTLQueryByDisplayValue />);
    const textarea = screen.getByDisplayValue('john dow');
    expect(textarea).toBeInTheDocument()
})

test("testing multiple element with display value", () => {
    render(<RTLQueryByDisplayValue />);
    const multiple = screen.getAllByDisplayValue('kumar');
    for (let i = 0; i < multiple.length; i++) {
        expect(multiple[i]).toBeInTheDocument()
    }
})

test("testing radio with display value", () => {
    render(<RTLQueryByDisplayValue />);
    const radio = screen.getByDisplayValue('male');
    expect(radio).toBeInTheDocument()
})




