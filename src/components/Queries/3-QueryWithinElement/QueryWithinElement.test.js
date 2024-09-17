import { render, screen, within } from "@testing-library/react";
import { QueryWithinElement } from "./QueryWithinElement";

test("test with within function", () => {
    render(<QueryWithinElement />)

    let el = screen.getByText("Hello World");
    let subEl = within(el).getByText("hi")
    let subEl2 = within(el).getByText("hello")
    expect(el).toBeInTheDocument();
    expect(subEl).toBeInTheDocument();
    expect(subEl2).toBeInTheDocument();
})