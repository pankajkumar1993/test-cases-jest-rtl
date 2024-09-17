import { fireEvent, render, screen } from "@testing-library/react";
import FunctionalComponent from "./FunctionalComponent";
import otherMethod from "../../helper";

test("test functional component", () => {
    render(<FunctionalComponent />)
    const btn = screen.getByTestId("btn1");
    fireEvent.click(btn)
    expect(screen.getByText('Hi')).toBeInTheDocument();
})


test("test method which is not in ui", () => {
    expect(otherMethod()).toMatch("other method")
})