import { logRoles, prettyDOM, render, screen } from "@testing-library/react";
import Debugging from "./Debugging";


test("testing component", () => {
    const { container, debug } = render(<Debugging />);

    // const el = screen.getByText("Heading 2");
    // expect(el).toBeInTheDocument()
    // console.log(container);

    // Method:1
    // console.log(prettyDOM(container));

    // Method:2
    // debug();

    // Method:3 we can only print 7000 lines of code in console, so we have to increate the limit by cmd DEBUG_PRINT_LIMIT=10000 npm test

    // Method:4 create rules
    // logRoles(container);
})