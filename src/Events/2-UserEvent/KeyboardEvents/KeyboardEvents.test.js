import { render, screen } from "@testing-library/react"
import KeyboardEvents from "./KeyboardEvents"
import userEvent from "@testing-library/user-event"


test("onchange evnet testing", async () => {
    userEvent.setup()
    render(<KeyboardEvents />)
    const el = screen.getByRole("textbox");
    await userEvent.type(el, "anil sidhu");
    expect(screen.getByText("anil sidhu")).toBeInTheDocument()
})