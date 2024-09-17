import { render, screen } from "@testing-library/react";
import UsersLists from "./UsersLists";

global.fetch = jest.fn();

const mockData = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Brown" }
];

beforeEach(() => {
    (fetch).mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockData),
    });
});

afterEach(() => {
    jest.resetAllMocks();
});

test("renders heading", () => {
    render(<UsersLists />);
    const heading = screen.getByRole("heading", { name: /API Testing/i });
    expect(heading).toBeInTheDocument();
});

test("fetches and displays 4 users from API", async () => {
    render(<UsersLists />);
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).toHaveLength(4);
});
