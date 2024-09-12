import { render, screen } from "@testing-library/react";
import InputBox from "./InputBox";


test('Testing Input Box', () => {
    render(<InputBox />)
    let checkInput = screen.getByRole('textbox');
    let checkInputPlaceholder = screen.getByPlaceholderText('Enter User Name');
    expect(checkInput).toBeInTheDocument();
    expect(checkInputPlaceholder).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("name", "username");
    expect(checkInput).toHaveAttribute("id", "userId");
    expect(checkInput).toHaveAttribute("type", "text");
    expect(checkInput).toHaveAttribute("value", "John");
})