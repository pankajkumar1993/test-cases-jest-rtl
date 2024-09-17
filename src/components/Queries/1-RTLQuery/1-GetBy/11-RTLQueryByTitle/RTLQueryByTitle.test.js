import {
    render, screen

} from "@testing-library/react";
import RTLQueryByTitle from "./RTLQueryByTitle";


test("testing button with title attribute", () => {
    render(<RTLQueryByTitle />);
    const btn = screen.getByTitle('click');
    expect(btn).toBeInTheDocument()
})


test("testing span with title attribute", () => {
    render(<RTLQueryByTitle />);
    const span = screen.getAllByTitle('black spade suit');
    for (let i = 0; i < span.length; i++) {
        expect(span[i]).toBeInTheDocument()
    }
})



