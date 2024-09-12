import {
    render, screen
} from "@testing-library/react";
import RTLQueryByAlt from "./RTLQueryByAlt";


// test("testing image with alt attribute", () => {
//     render(<RTLQueryByAlt />);
//     const image = screen.getByAltText('dummy image');
//     expect(image).toBeInTheDocument();
// })


test("testing multiple image with alt attribute", () => {
    render(<RTLQueryByAlt />);
    const image = screen.getAllByAltText('dummy image');
    for (let i = 0; i < image.length; i++) {
        expect(image[i]).toBeInTheDocument();
    }
})




