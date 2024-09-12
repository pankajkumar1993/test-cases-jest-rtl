import { render, screen } from "@testing-library/react"
import UsersLists from "./UsersLists"


test("test handling", () => {
    render(<UsersLists />)
    const el = screen.getByRole("heading");
    expect(el).toBeInTheDocument()
})


test("test for mock api", async () => {
    render(<UsersLists />)
    const el = await screen.findAllByRole("listitem");
    expect(el).toHaveLength(10)
})