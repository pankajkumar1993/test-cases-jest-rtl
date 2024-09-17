import { fireEvent, render, screen } from "@testing-library/react";
import OnChangeEvents from "./OnChangeEvents";


test("on change event testing", () => {
    render(<OnChangeEvents />)
    let input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: 'abc' } });
    expect(input.value).toBe("abctest")
})