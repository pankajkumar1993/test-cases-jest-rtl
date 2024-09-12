import { render, screen } from "@testing-library/react";
import FindBy from "./FindBy";

test('test element by findBy', async () => {
    render(<FindBy />)
    // test element by findBy
    // TestingLibraryElementError: Unable to find an element with the text: Data found. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.
    // const el = screen.getByText("Data found");
    // expect(el).toBeInTheDocument()

    // we can wait for 5s only
    const el = await screen.findByText("Data found", {}, { timeout: 4000 });
    expect(el).toBeInTheDocument()
})



test('test element by findAllBy', async () => {
    render(<FindBy />)

    const el = await screen.findAllByText("Data found", {}, { timeout: 4000 });
    for (let i = 0; i < el.length; i++) {
        expect(el[i]).toBeInTheDocument()
    }
})


