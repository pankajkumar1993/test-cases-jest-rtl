import { render, screen } from "@testing-library/react";
import RTLQueryByText from "./RTLQueryByText";


test("test case for single button", () => {
    render(<RTLQueryByText />);

    const btn = screen.getByText("Login");
    expect(btn).toBeInTheDocument()

})


test("test case for single ptag", () => {
    render(<RTLQueryByText />);
    const pTag = screen.getByText('lorem ipsum');
    expect(pTag).toBeInTheDocument()
})

// test("test case for single h2tag", () => {
//     render(<RTLQueryByText />);
//     const h2Tag = screen.getByText('Heading tag');
//     expect(h2Tag).toBeInTheDocument()
// })


test("test case for multiple h2tag", () => {
    render(<RTLQueryByText />);
    const h2Tags = screen.getAllByText('Heading tag');
    for (let i = 0; i < h2Tags.length; i++) {
        expect(h2Tags[i]).toBeInTheDocument()
    }
})



test("test case for h3 tag with class", () => {
    render(<RTLQueryByText />);
    const h3Tag = screen.getByText('heading h3 tag')
    expect(h3Tag).toBeInTheDocument();
    expect(h3Tag).toHaveClass('text-center');
    expect(h3Tag).toHaveAttribute('id', 'heading');
})
