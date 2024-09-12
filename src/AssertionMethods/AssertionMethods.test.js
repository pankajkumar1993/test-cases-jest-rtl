import { render, screen } from "@testing-library/react";
import AssertionMethods from "./AssertionMethods";


test("test input", () => {
    render(<AssertionMethods />)
    const input = screen.getByRole('textbox');
    // Assertion Methods
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue();
    expect(input).toHaveValue('john cena');
    // expect(input).toBeDisabled();
    expect(input).toBeEnabled();
    expect(input).toHaveAttribute('id');
    expect(input).toHaveAttribute('id', 'user-name');
    expect(input).toHaveAttribute('data-test');
    expect(input).toHaveClass('test-style')
    expect(input).toHaveClass('dummy');
    expect(input).toBeVisible()
})


test("test negative cases", () => {
    render(<AssertionMethods />)
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    // expect(btn).not.toHaveClass('btn');
    // expect(btn).not.toHaveAttribute('id')
    // expect(btn).toBeDisabled();
    expect(btn).not.toBeEnabled()

})