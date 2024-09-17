import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Testing Counter", () => {
  test("renders correctly", () => {
    render(<Counter count={0} />);

    const textElement = screen.getByText(/Counter/i);
    expect(textElement).toBeInTheDocument();
  });

  test('handlers are called', async () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <Counter
        count={0}
        handleDecrement={decrementHandler}
        handleIncrement={incrementHandler}
      />
    );

    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });

    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();

    await userEvent.click(incrementButton);
    await userEvent.click(decrementButton);

    expect(incrementHandler).toHaveBeenCalled();
    expect(decrementHandler).toHaveBeenCalled();

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
