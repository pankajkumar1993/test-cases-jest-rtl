import { render, screen } from "@testing-library/react";
import RTLQueryByName from "./RTLQueryByName";

test('getBy role', () => {
    render(<RTLQueryByName />)
    const btn1 = screen.getByRole("button", { name: "Click Me 1" });
    const btn2 = screen.getByRole("button", { name: "Click Me 2" });
    expect(btn1).toBeInTheDocument();
    expect(btn2).toBeInTheDocument();

    const input1 = screen.getByRole("textbox", { name: "User Name" });
    const input2 = screen.getByRole("textbox", { name: "User Age" });
    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();


    // Unable to find an accessible element with the role "div"
    // const div1 = screen.getByRole("div");
    const div1 = screen.getByRole("test")
    expect(div1).toBeInTheDocument()

})

