import { render, screen } from "@testing-library/react";
import FunctionalPropsMocking from "./FunctionalPropsMocking";
import userEvent from "@testing-library/user-event";

test("functional props testing", async () => {
    const testFunction = jest.fn(); // Mock function
    userEvent.setup();
    render(<FunctionalPropsMocking testFunction={testFunction} />)
    const btn = screen.getByRole("button");
    await userEvent.click(btn);
    expect(testFunction).toBeCalled();
})