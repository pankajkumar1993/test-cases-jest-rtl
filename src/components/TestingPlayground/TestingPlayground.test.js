import { render, screen } from "@testing-library/react"
import TestingPlayground from "./TestingPlayground"


test("test the form input", () => {
    render(<TestingPlayground />)
    const btn = screen.getByRole('button', {
        name: /submit/i
    })

    expect(btn).toBeInTheDocument();
})