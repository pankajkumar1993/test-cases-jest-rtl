import userEvent from "@testing-library/user-event";
import UserEventClick from "./UserEventClick";
import { screen, render } from "@testing-library/react";


test("Click event with user event library", async () => {
    userEvent.setup();
    render(<UserEventClick />);
    const btn = screen.getByText('Click Me');
    await userEvent.click(btn);
    expect(screen.getByText('hello')).toBeInTheDocument()
})