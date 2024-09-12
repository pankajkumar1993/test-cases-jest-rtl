import { render, screen } from "@testing-library/react";
import RTLQueryByAll from "./RTLQueryByAll";

test("getByAll role", () => {
    render(<RTLQueryByAll />)
    const btns = screen.getAllByRole('button');
    const options = screen.getAllByRole('option')
    // const options = screen.getAllByRole('combobox')

    // value must be an HTMLElement or an SVGElement. Received has type:  array
    // expect(btns).toBeInTheDocument()

    // Method-1;
    // expect(btns[1]).toBeInTheDocument();
    // expect(btns[2]).toBeInTheDocument();

    // Method-2
    for (let i = 0; i < btns.length; i++) {
        expect(btns[i]).toBeInTheDocument()
    }


    for (let i = 0; i < options.length; i++) {
        expect(options[i]).toBeInTheDocument()
    }

})