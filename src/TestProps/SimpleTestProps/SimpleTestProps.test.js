import { render, screen } from "@testing-library/react";
import TestProps from "./SimpleTestProps";
import User from "./User";


test("test props", () => {
    let name = "peter"
    render(<User name={name} />)
    const user = screen.getByText(`UserName: ${name}`);
    expect(user).toBeInTheDocument()
})