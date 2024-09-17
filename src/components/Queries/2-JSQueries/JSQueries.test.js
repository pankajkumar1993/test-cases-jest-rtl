import { render, screen } from "@testing-library/react";
import JSQueries from "./JSQueries";

test("test with javascript or custom queires", () => {
    render(<JSQueries />)
    const element = document.querySelector('#testId');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Hello World');
    expect(element).not.toHaveAttribute("class")

})