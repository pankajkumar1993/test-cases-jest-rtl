import { render, screen } from "@testing-library/react";
import TextMatch from "./TextMatch";


test("text match with strings", () => {
    render(<TextMatch />)
    // const div = screen.getByText('Hello world');
    // const div = screen.getByText('Hello world', { exact: false });
    const div = screen.getByText('Hello', { exact: false });
    expect(div).toBeInTheDocument()
})


test("text match with regex", () => {
    render(<TextMatch />)
    // const div = screen.getByText(/Hello/);
    // const div = screen.getByText(/lo Wo/);
    // const div = screen.getByText(/hello/i); // ignore case sensitive
    const div = screen.getByText(/Hello w?orld/i); //ignore w
    expect(div).toBeInTheDocument()
})


test("text match with function", () => {
    render(<TextMatch />)
    // two paramemter :content and element(optional)
    // const div = screen.getByText((content, element) => content.startsWith("Hello"));
    // const div = screen.getByText((content, element) => content.endsWith("World"));
    // const div = screen.getByText((content, element) => content.endsWith("ld"));
    // const div = screen.getByText((content, element) => {
    //     return content.includes("ld")
    // });
    // const div = screen.getAllByText((content, element) => {
    //     return true
    // });

    const div = screen.getByText((content, element) => {
        return content.length == 11;
    });


    expect(div).toBeInTheDocument()
})