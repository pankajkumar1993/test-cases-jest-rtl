import { fireEvent, render, screen } from "@testing-library/react";
import OnClickEvent from "./OnClickEvent";


test("click event test case", () => {
    render(<OnClickEvent />)
    let btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.getByText('Updated data')).toBeInTheDocument()
})


