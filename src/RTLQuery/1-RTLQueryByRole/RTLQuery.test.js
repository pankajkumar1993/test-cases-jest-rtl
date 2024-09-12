import { render, screen } from "@testing-library/react";
import RTLQuery from "./RTLQuery";

test('getBy role', () => {
    render(<RTLQuery />)
    const inputField = screen.getByRole('textbox');
    const btn = screen.getByRole('button');

    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveValue("hello");
    expect(inputField).toBeDisabled();
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent(/click/i)
})

