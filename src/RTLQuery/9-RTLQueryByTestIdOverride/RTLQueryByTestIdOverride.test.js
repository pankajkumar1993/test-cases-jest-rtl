import { render, screen, configure } from "@testing-library/react";
import RTLQueryByTestIdOverride from "./RTLQueryByTestIdOverride";

configure({ testIdAttribute: 'element-id' });

test("test div with data test id", () => {
    render(<RTLQueryByTestIdOverride />);
    const divId = screen.getByTestId('div-test-id');
    expect(divId).toBeInTheDocument()
})




