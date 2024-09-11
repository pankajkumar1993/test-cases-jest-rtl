import { render, screen } from "@testing-library/react";
import InputBox from "../InputBox/InputBox";


describe.skip("UI Test Case Group", () => {
    test("Test Case 1", () => {
        render(<InputBox />)
        let checkInput = screen.getByRole('textbox');
        let checkInputPlaceholder = screen.getByPlaceholderText('Enter User Name');
        expect(checkInput).toBeInTheDocument();
        expect(checkInputPlaceholder).toBeInTheDocument();
        expect(checkInput).toHaveAttribute("name", "username");
        expect(checkInput).toHaveAttribute("id", "userId");
        expect(checkInput).toHaveAttribute("type", "text");
        expect(checkInput).toHaveAttribute("value", "John");
    })
    test("Test Case 2", () => {
        render(<InputBox />)
        let checkInput = screen.getByRole('textbox');
        let checkInputPlaceholder = screen.getByPlaceholderText('Enter User Name');
        expect(checkInput).toBeInTheDocument();
        expect(checkInputPlaceholder).toBeInTheDocument();
        expect(checkInput).toHaveAttribute("name", "username");
        expect(checkInput).toHaveAttribute("id", "userId");
        expect(checkInput).toHaveAttribute("type", "text");
        expect(checkInput).toHaveAttribute("value", "John");
    })
    test("Test Case 3", () => {
        render(<InputBox />)
        let checkInput = screen.getByRole('textbox');
        let checkInputPlaceholder = screen.getByPlaceholderText('Enter User Name');
        expect(checkInput).toBeInTheDocument();
        expect(checkInputPlaceholder).toBeInTheDocument();
        expect(checkInput).toHaveAttribute("name", "username");
        expect(checkInput).toHaveAttribute("id", "userId");
        expect(checkInput).toHaveAttribute("type", "text");
        expect(checkInput).toHaveAttribute("value", "John");
    })
})




describe.only("API Test Case Group", () => {
    test("API Test Case 1", () => {
        render(<InputBox />)
        let checkInput = screen.getByRole('textbox');
        let checkInputPlaceholder = screen.getByPlaceholderText('Enter User Name');
        expect(checkInput).toBeInTheDocument();
        expect(checkInputPlaceholder).toBeInTheDocument();
        expect(checkInput).toHaveAttribute("name", "username");
        expect(checkInput).toHaveAttribute("id", "userId");
        expect(checkInput).toHaveAttribute("type", "text");
        expect(checkInput).toHaveAttribute("value", "John");
    })
    test("API Test Case 2", () => {
        render(<InputBox />)
        let checkInput = screen.getByRole('textbox');
        let checkInputPlaceholder = screen.getByPlaceholderText('Enter User Name');
        expect(checkInput).toBeInTheDocument();
        expect(checkInputPlaceholder).toBeInTheDocument();
        expect(checkInput).toHaveAttribute("name", "username");
        expect(checkInput).toHaveAttribute("id", "userId");
        expect(checkInput).toHaveAttribute("type", "text");
        expect(checkInput).toHaveAttribute("value", "John");
    })
    test("API Test Case 3", () => {
        render(<InputBox />)
        let checkInput = screen.getByRole('textbox');
        let checkInputPlaceholder = screen.getByPlaceholderText('Enter User Name');
        expect(checkInput).toBeInTheDocument();
        expect(checkInputPlaceholder).toBeInTheDocument();
        expect(checkInput).toHaveAttribute("name", "username");
        expect(checkInput).toHaveAttribute("id", "userId");
        expect(checkInput).toHaveAttribute("type", "text");
        expect(checkInput).toHaveAttribute("value", "John");
    })
    // Nested Describe Group
    describe.only("Inner API Test Case Group", () => {
        test("Inner API Test Case 1", () => {
            render(<InputBox />)
            let checkInput = screen.getByRole('textbox');
            let checkInputPlaceholder = screen.getByPlaceholderText('Enter User Name');
            expect(checkInput).toBeInTheDocument();
            expect(checkInputPlaceholder).toBeInTheDocument();
            expect(checkInput).toHaveAttribute("name", "username");
            expect(checkInput).toHaveAttribute("id", "userId");
            expect(checkInput).toHaveAttribute("type", "text");
            expect(checkInput).toHaveAttribute("value", "John");
        })
    })
})



describe.only("Logic Test Case Group", () => {
    test("Logic Test Case 1", () => {
        render(<InputBox />)
        let checkInput = screen.getByRole('textbox');
        let checkInputPlaceholder = screen.getByPlaceholderText('Enter User Name');
        expect(checkInput).toBeInTheDocument();
        expect(checkInputPlaceholder).toBeInTheDocument();
        expect(checkInput).toHaveAttribute("name", "username");
        expect(checkInput).toHaveAttribute("id", "userId");
        expect(checkInput).toHaveAttribute("type", "text");
        expect(checkInput).toHaveAttribute("value", "John");
    })
    test("Logic Test Case 2", () => {
        render(<InputBox />)
        let checkInput = screen.getByRole('textbox');
        let checkInputPlaceholder = screen.getByPlaceholderText('Enter User Name');
        expect(checkInput).toBeInTheDocument();
        expect(checkInputPlaceholder).toBeInTheDocument();
        expect(checkInput).toHaveAttribute("name", "username");
        expect(checkInput).toHaveAttribute("id", "userId");
        expect(checkInput).toHaveAttribute("type", "text");
        expect(checkInput).toHaveAttribute("value", "John");
    })
    test("Logic Test Case 3", () => {
        render(<InputBox />)
        let checkInput = screen.getByRole('textbox');
        let checkInputPlaceholder = screen.getByPlaceholderText('Enter User Name');
        expect(checkInput).toBeInTheDocument();
        expect(checkInputPlaceholder).toBeInTheDocument();
        expect(checkInput).toHaveAttribute("name", "username");
        expect(checkInput).toHaveAttribute("id", "userId");
        expect(checkInput).toHaveAttribute("type", "text");
        expect(checkInput).toHaveAttribute("value", "John");
    })

})