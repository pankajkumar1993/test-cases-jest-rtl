import { render, screen } from "@testing-library/react";
import RTLQueryByLabel from "./RTLQueryByLabel";


test("get by label text", () => {
    render(<RTLQueryByLabel />)
    // TestingLibraryElementError: Unable to find a label with the text of: Usern ame
    // const inputField = screen.getByLabelText('Usern ame');

    const inputField = screen.getByLabelText('Username');
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveValue('john');

})
test("get by label text for checbox", () => {
    render(<RTLQueryByLabel />)
    const checkBox = screen.getByLabelText('Skill');
    expect(checkBox).toBeInTheDocument();
    expect(checkBox).toBeChecked()
})