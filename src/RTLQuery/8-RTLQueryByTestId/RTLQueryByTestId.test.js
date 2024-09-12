import { render, screen } from "@testing-library/react";
import RTLQueryByTestId from "./RTLQueryByTestId";


// test("test case for div with id", () => {
//     render(<RTLQueryByTestId />);
//     const divId = screen.getByTestId('div-test-id')
//     expect(divId).toBeInTheDocument()
// })

test("test case for multiple div with id", () => {
    render(<RTLQueryByTestId />);
    const divIds = screen.getAllByTestId('div-test-id')
    for (let i = 0; i < divIds.length; i++) {
        expect(divIds[i]).toBeInTheDocument()
    }
})


test("test case for h2 with id", () => {
    render(<RTLQueryByTestId />);
    const h2Id = screen.getByTestId('h2-id')
    expect(h2Id).toBeInTheDocument()
})



