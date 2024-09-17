import { act, render, screen } from "@testing-library/react";
import ActFunction from "./ActFunction";
import userEvent from "@testing-library/user-event";

test("Act function", async () => {
    userEvent.setup()
    render(<ActFunction />);
    const input = screen.getByRole("textbox");

    // An update toapp inside a test was not wrapped in act.
    // Act function first udate the state then call assert
    await act(async () => {
        await userEvent.type(input, "anil");
    })


    expect(screen.getByText('anil')).toBeInTheDocument()
})