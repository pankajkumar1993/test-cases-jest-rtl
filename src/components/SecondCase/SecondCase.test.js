import { fireEvent, render, screen } from '@testing-library/react'
import SecondCase, { mockData } from './SecondCase';
import userEvent from '@testing-library/user-event';

test("SecondCase renders successfully", () => {
    render(<SecondCase />);
    const element = screen.getByText(/first test/i);
    expect(element).toBeInTheDocument();
})

test("List renered", () => {
    render(<SecondCase />)
    const element = screen.getByText(/Clarice/i);
    expect(element).toBeInTheDocument()
})


test("Check if the element exists", () => {
    render(<SecondCase />);
    const element = screen.getByRole('heading', { name: /first test/i });
    expect(element).toBeInTheDocument();
});


test("Renders list items correctly", () => {
    render(<SecondCase />);
    const firstItem = screen.getByText(/fletcher/i);
    const secondItem = screen.getByText(/clarice/i);

    expect(firstItem).toBeInTheDocument();
    expect(secondItem).toBeInTheDocument();
});


test("Renders correct number of list items", () => {
    render(<SecondCase />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(mockData.length);
});


test("Matches snapshot", () => {
    const { asFragment } = render(<SecondCase />);
    expect(asFragment()).toMatchSnapshot();
});




test("Renders different elements based on conditions", () => {
    render(<SecondCase />);
    const conditionalElement = screen.queryByText(/non-existent text/i);
    expect(conditionalElement).toBeNull();
});


// Basic Click Event:
test("Button click changes state", () => {
    render(<SecondCase />);

    // Assuming there's a button that changes the text on click
    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);

    const updatedText = screen.getByText(/button clicked/i);
    expect(updatedText).toBeInTheDocument();
});


// Test click with userEvent:
// test("Simulate user click using userEvent", () => {
//     render(<SecondCase />);

//     const button = screen.getByRole('button', { name: /click me/i });
//     userEvent.click(button);

//     const result = screen.getByText(/clicked/i);
//     expect(result).toBeInTheDocument();
// });


// // Test Click on List Item:
// test("Clicking on list item shows details", () => {
//     render(<SecondCase />);

//     // Click on a specific list item
//     const listItem = screen.getByText(/clarice harrild/i);
//     fireEvent.click(listItem);

//     // Check if the expected action occurs (e.g., details appear)
//     const details = screen.getByText(/clarice's details/i);
//     expect(details).toBeInTheDocument();
// });


// // Testing Multiple Clicks:
// test("Multiple clicks update count", () => {
//     render(<SecondCase />);

//     const button = screen.getByRole('button', { name: /increment/i });
//     const count = screen.getByTestId('count');

//     // Initial value check
//     expect(count).toHaveTextContent('0');

//     // Simulate multiple clicks
//     fireEvent.click(button);
//     fireEvent.click(button);

//     expect(count).toHaveTextContent('2');
// });


// // Click Event with Callback:
// test("Button click calls callback function", () => {
//     const mockCallback = jest.fn();

//     render(<button onClick={mockCallback}>Click me</button>);

//     const button = screen.getByRole('button', { name: /click me/i });
//     fireEvent.click(button);

//     expect(mockCallback).toHaveBeenCalledTimes(1);
// });


// test("Button click updates text", () => {
//     render(<SecondCase />);

//     const button = screen.getByText(/click me/i);
//     fireEvent.click(button);

//     const updatedText = screen.getByText(/button clicked/i);
//     expect(updatedText).toBeInTheDocument();
// });