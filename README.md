# File naming convention
file_name.test.js
file_name.spec.js
file_name.spec.jsx

# folder naming convention
__tests__/
apple.js
apple.spec.js
apple.spec.jsx
apple.test.js
apple.test.jsx


# Before and After Hooks
use of before and after hook
beforeAll and beforeEach
afterAll and afterEach

THESE ARE USED TO WRITE TEST CASE.

before hooks are run before test cases run and after hooks are run after test cases run.

beforeall - runs once
beforeEach - runs before on each test case

In React testing, "before" and "after" hooks allow you to execute code before and after your tests run. This is useful for setting up and tearing down test environments, managing mocks, or performing other actions that need to happen around your tests.
Here's how you can use them with Jest:
Before Hooks:
beforeEach: Runs before each test in a describe block.
beforeAll: Runs once before all tests in a describe block.
After Hooks:
afterEach: Runs after each test in a describe block.
afterAll: Runs once after all tests in a describe block.

Key Points:
Scope: Hooks defined inside a describe block only apply to tests within that block.
Order of Execution: beforeAll -> beforeEach -> test -> afterEach -> afterAll
Use Cases:
Setup: Initialize test data, mock API calls, configure testing libraries.
Teardown: Clean up resources, reset mocks, restore state.
Logging: Add logs for debugging.

we have to clear db or create constants or set environment before run test cases.

Snapshot Testing
Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.

A typical snapshot test case renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component.

Snapshot testing is a technique for capturing and validating the output of components or functions. It captures the rendered output of a component or UI element and stores it as a snapshot. Subsequent test runs compare the current output against the stored snapshot to detect any changes.


Snapshot Testing with Jest
A similar approach can be taken when it comes to testing your React components. Instead of rendering the graphical UI, which would require building the entire app, you can use a test renderer to quickly generate a serializable value for your React tree. Consider this example test for a Link component:

import renderer from 'react-test-renderer';
import Link from '../Link';

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

The first time this test is run, Jest creates a snapshot file that looks like this:

exports[`renders correctly 1`] = `
<a
  className="normal"
  href="http://www.facebook.com"
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}
>
  Facebook
</a>
`;

The snapshot artifact should be committed alongside code changes, and reviewed as part of your code review process. Jest uses pretty-format to make snapshots human-readable during code review. On subsequent test runs, Jest will compare the rendered output with the previous snapshot. If they match, the test will pass. If they don't match, either the test runner found a bug in your code (in the <Link> component in this case) that should be fixed, or the implementation has changed and the snapshot needs to be updated.



Updating Snapshots
It's straightforward to spot when a snapshot test fails after a bug has been introduced. When that happens, go ahead and fix the issue and make sure your snapshot tests are passing again. Now, let's talk about the case when a snapshot test is failing due to an intentional implementation change.

One such situation can arise if we intentionally change the address the Link component in our example is pointing to.

// Updated test case with a Link to a different address
it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.instagram.com">Instagram</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

Since we just updated our component to point to a different address, it's reasonable to expect changes in the snapshot for this component. Our snapshot test case is failing because the snapshot for our updated component no longer matches the snapshot artifact for this test case.

To resolve this, we will need to update our snapshot artifacts. You can run Jest with a flag that will tell it to re-generate snapshots:

jest --updateSnapshot

Go ahead and accept the changes by running the above command. You may also use the equivalent single-character -u flag to re-generate snapshots if you prefer. This will re-generate snapshot artifacts for all failing snapshot tests. If we had any additional failing snapshot tests due to an unintentional bug, we would need to fix the bug before re-generating snapshots to avoid recording snapshots of the buggy behavior.

If you'd like to limit which snapshot test cases get re-generated, you can pass an additional --testNamePattern flag to re-record snapshots only for those tests that match the pattern.

You can try out this functionality by cloning the snapshot example, modifying the Link component, and running Jest.


Snapshot testing in React is used to ensure that the UI output of a component remains consistent over time. Here's a breakdown of when and why you would use it:

When to Use Snapshot Testing:
UI Components: Ideal for testing UI components where the structure is stable but might change over time. This includes components with dynamic content (text, styles) that are expected to produce consistent output.

Component Output Verification: If you want to verify that a component renders correctly without necessarily worrying about the internal logic or behavior, snapshot testing is helpful.

Preventing Regressions: Use snapshots when you want to prevent accidental UI changes. If the rendered output changes unexpectedly, the test will fail, prompting you to verify whether the change was intentional.

Stateless and Functional Components: Components that rely heavily on props and render specific outputs based on those props are good candidates for snapshot testing.

Refactoring or Updating Libraries: When you're refactoring code or updating libraries (e.g., React version changes), snapshots can catch unintentional changes in UI output.

What Snapshot Testing Does:
Takes a "snapshot" of the component’s rendered output (usually the JSX or HTML structure).
Stores this output as a reference file.
On future test runs, compares the current output with the stored snapshot to detect differences.
Benefits of Snapshot Testing:
Quick Feedback: Provides fast feedback on UI changes and ensures that the UI hasn't changed unintentionally.

Simple to Implement: Snapshot testing is straightforward, especially with tools like Jest, which allow you to create snapshots with minimal setup.

Great for Large Components: For components with lots of UI elements, snapshot testing can cover a large portion of the render tree without writing detailed assertions.

Easy Refactoring: When refactoring or changing a component, snapshot tests help ensure the output remains consistent unless the change is deliberate.

Improves Code Quality: By detecting unintended changes early, it helps maintain the quality and consistency of the UI.

Limitations to Consider:
Over-reliance: It might catch every UI change, even minor or expected ones, leading to frequent test updates.
False Positives: Sometimes snapshot updates become routine without a careful review of what changed, which reduces their effectiveness.
Not for Behavior Testing: Snapshot testing only verifies UI output, not the behavior or functionality of the component.


Step 1: Install Jest
First, you need to install Jest if it's not already part of your project. Jest comes bundled with create-react-app, so if you're using it, Jest is already set up.

To install Jest manually:



npm install --save-dev jest babel-jest @types/jest
Step 2: Install React Test Renderer
Jest uses React Test Renderer to render your components for snapshot testing. Install it with the following command:



npm install --save-dev react-test-renderer
Step 3: Write a Snapshot Test
Here’s how you can create a snapshot test for a simple React component:

Example Component (Button.tsx):


import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
Example Snapshot Test (Button.test.tsx):


import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

test('renders correctly', () => {
  const tree = renderer
    .create(<Button label="Click Me" onClick={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
Step 4: Run the Test
To run the snapshot test, use the following command:



npm test
When you run this test for the first time, Jest will create a snapshot file inside a __snapshots__ folder. The snapshot is basically a serialized version of the component’s render output.

Sample Snapshot (Button.test.tsx.snap):


// Jest Snapshot v1

exports[`renders correctly 1`] = `
<button>
  Click Me
</button>
`;
Step 5: Updating Snapshots
If you intentionally make changes to your component and the snapshot fails, you can update the snapshot by running:

h

npm test -- -u
This will update the snapshots to reflect the new output of your component.

Benefits of Using Jest Snapshots:
Automatic Testing of UI Components: Jest automatically generates snapshots for you, so you don’t have to manually verify the DOM output.

Catch Unintentional Changes: If a component’s output changes unexpectedly, the test will fail, allowing you to review the change before updating the snapshot.

Step 6: Add Snapshot Testing in Your Workflow
Check Snapshots into Version Control: Ensure the __snapshots__ folder is part of your version control system. This way, any snapshot changes are tracked.
Automate Snapshot Testing: Integrate it with your CI/CD pipeline to catch regressions during the deployment process.
Best Practices for Snapshot Testing
Test only stable components: Ensure the component you're testing doesn't frequently change dynamic content, as it might lead to snapshot churn.

Review changes carefully: When snapshots change, manually review the updated snapshots to confirm they match your expectations.

avoid use while developing o and use whne project is completed or abot to complete or push to production server..

Method-1: best approach
when we changhe and it failes if i intenstially change the code, we can use w and then u for update otherwise we have undo the changes.

Method-2: wrong approach
 we can delete the old snapshot and then crete the new snapshot by running the command
 `npm test`


 When writing test cases for your React components or any application, there are several important points to keep in mind to ensure your tests are effective, maintainable, and comprehensive. Here’s a checklist to guide you in writing test cases:

1. Test Structure and Clarity
Descriptive Test Names: Each test case should have a clear, descriptive name that explains what it’s testing.
Example: should render the button with the correct label.
Separation of Concerns: Focus on one thing per test case. Each test should only test one piece of functionality or behavior at a time.
Arrange-Act-Assert (AAA): Structure your test into three parts:
Arrange: Set up the initial state (e.g., render the component).
Act: Perform the action you're testing (e.g., click a button).
Assert: Verify the outcome (e.g., check if the button click had the expected result).
2. Types of Tests
Unit Tests: Test individual units of code (e.g., a single function, method, or component) to verify that they work as expected.
Example: Verify that a React component renders correctly based on the props provided.
Integration Tests: Test how different units of code work together. In React, this might mean testing a parent component rendering a child component with passed-down props.
End-to-End (E2E) Tests: Test the entire application flow, from user input to the expected output, usually through a tool like Cypress or Selenium.
Snapshot Tests: Test the rendered output of a component to ensure it doesn't change unexpectedly.
3. Test Coverage
Edge Cases: Write tests for both expected behavior and edge cases (e.g., empty states, null values, or unexpected input).
Positive and Negative Scenarios: Test both successful outcomes and failure scenarios.
Example: If you’re testing a form component, include cases where the form is submitted correctly as well as cases where submission fails (e.g., due to validation errors).
Boundary Testing: For numerical or range-based inputs, test at the boundary conditions to ensure the system behaves correctly at limits (e.g., minimum, maximum values).
Performance Testing: Check how your component behaves when processing large data sets or complex calculations.
4. Avoid Over-Mocking
Minimal Mocking: Mock only what you need to, such as API calls or external libraries. Avoid mocking components unnecessarily, as this can hide real issues in the integration between components.
Realistic Data: Use realistic or production-like data when mocking APIs or data-fetching services to ensure the system behaves similarly in a live environment.
5. Testing for Behavior
User Interactions: Test user actions like clicks, typing, form submissions, etc. This ensures that your app responds to user events as expected.
Example: Verify that clicking a "Submit" button calls the expected function and triggers state changes.
Component States: Ensure that changes in component states (e.g., after an event like a button click or API response) are correctly reflected in the UI.
Example: Test that a loading spinner shows up while data is being fetched.
Props and State Changes: Test how components behave when they receive different props and when their internal state changes.
Form Validation: If you're testing forms, include tests for validation messages, valid and invalid inputs, and whether the form submission is blocked for invalid inputs.
6. Performance and Responsiveness
Performance Critical Components: If a component renders large datasets or performs expensive calculations, test for efficiency and performance bottlenecks.
Responsiveness: Ensure the UI adapts correctly to different screen sizes or resolutions. This can be done using tools or manually adjusting the screen dimensions in test environments.
7. Accessibility Testing
Accessibility Features: Test accessibility features like keyboard navigation, focus management, and ARIA attributes. Verify that screen readers or assistive technologies work correctly with your component.
Contrast and Text Size: Check that UI components meet accessibility standards in terms of color contrast and text size.
8. Avoid Brittle Tests
Resilient Test Cases: Avoid tests that rely too heavily on implementation details (e.g., testing the exact number of renders in a React component), as these can break easily during refactoring.
Avoid Time-Dependent Tests: Don’t rely on timers, setTimeout, or specific timestamps that can make tests fail due to slight delays.
9. Use Testing Libraries Effectively
Testing Library (React): When testing React components, prefer libraries like React Testing Library over Enzyme because the former encourages testing from the user’s perspective rather than focusing on implementation details.
Use Mock Service Workers (MSW): If your component interacts with an API, mock HTTP requests and responses with MSW instead of manually mocking fetch or axios.
10. Maintainability
Reusable Test Utilities: Abstract common test setup or helper functions into separate utility files. This avoids duplication and keeps your test cases clean.
Modular Tests: Avoid writing large, monolithic test cases. Break down test scenarios into smaller, more maintainable pieces.
11. Continuous Integration and Code Coverage
Integrate Tests into CI/CD: Ensure that tests are run automatically in your CI/CD pipeline to prevent issues from reaching production.
Code Coverage: Aim for high test coverage, but balance it by focusing on critical code paths. Don’t pursue 100% coverage if it leads to poor test quality.

Example Test Case for a Form Component:
tsx
Copy code
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

test('displays validation errors on empty form submission', () => {
  // Arrange
  render(<Form />);

  // Act
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  // Assert
  expect(screen.getByText(/name is required/i)).toBeInTheDocument();
  expect(screen.getByText(/email is required/i)).toBeInTheDocument();
});

test('calls onSubmit with form data when the form is valid', () => {
  const mockSubmit = jest.fn();

  render(<Form onSubmit={mockSubmit} />);

  // Fill out the form
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });

  // Submit the form
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  // Assert form data was submitted
  expect(mockSubmit).toHaveBeenCalledWith({
    name: 'John Doe',
    email: 'john@example.com',
  });
});
Following these guidelines will help you build a robust, maintainable, and well-structured test suite for your React components. Do you need help applying these principles to a specific case?

# Important points for testing

testing components rendering
Ui elements that we write
functions which we write
Api testing using mocks
event testing
props and states
UI condition testing  and UI state testing
core functionality - jest and jest rendered or use packages enzyeme


# Avoid testing for
external UI library code
no need to test default fnction of js and react
sometime we should mock function rather than testing it in detail when functions are nested.

## Important points

Do not write snapshots in starting of the project
run test case after completing your functionality
make a stndard for code coverage (how much code i have to test)
we have to test 70-80% of code coverage.


Class compoent method testing
When testing class component methods in React, you will focus on unit testing specific methods, lifecycle methods, and how state and props affect the component. Here's how you can test class components effectively.

Steps for Testing Class Component Methods
Render the Component: Use shallow or mount from Enzyme or use React Testing Library to render the component.

Mock Class Methods: Mock methods like lifecycle methods (componentDidMount, componentDidUpdate, etc.) or any custom method within the class.

Test State and Props Changes: Ensure that state and props are handled correctly by the class methods.

Simulate Events: Trigger events like button clicks or form submissions to invoke the method under test.

To test class component methods in React using React Test Renderer, you can follow a slightly different approach from Enzyme or React Testing Library. React Test Renderer is primarily used to create snapshots and test component rendering, but it can also be used to access a component’s instance and test its methods.

Here’s how you can use React Test Renderer to test class component methods:

1. Install React Test Renderer
First, if it's not already installed, you need to install react-test-renderer:

bash
Copy code
npm install --save-dev react-test-renderer
2. Example Class Component
Let’s assume you have a class component with methods that change the state:

Counter.tsx (Class Component):
tsx
Copy code
import React, { Component } from 'react';

interface CounterProps {
  initialCount: number;
}

interface CounterState {
  count: number;
}

class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: this.props.initialCount });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
3. Writing Test Cases for Class Component Methods Using React Test Renderer
You can use React Test Renderer to create an instance of the component and test its methods.

Counter.test.tsx (Test Case):
tsx
Copy code
import React from 'react';
import TestRenderer from 'react-test-renderer'; // Import React Test Renderer
import Counter from './Counter';

describe('Counter Class Component', () => {
  let testInstance: any;
  let testRenderer: any;

  beforeEach(() => {
    // Create a test renderer instance of the component
    testRenderer = TestRenderer.create(<Counter initialCount={0} />);
    // Get the instance of the component to access its methods
    testInstance = testRenderer.root.instance;
  });

  it('should initialize count with the initialCount prop', () => {
    // Check the initial state
    expect(testInstance.state.count).toBe(0);
  });

  it('should increment the count when increment method is called', () => {
    // Call the increment method
    testInstance.increment();
    // Verify that the state has updated correctly
    expect(testInstance.state.count).toBe(1);
  });

  it('should decrement the count when decrement method is called', () => {
    testInstance.setState({ count: 5 }); // Manually set state to 5
    testInstance.decrement(); // Call the decrement method
    expect(testInstance.state.count).toBe(4); // Expect count to decrease by 1
  });

  it('should reset the count when reset method is called', () => {
    testInstance.setState({ count: 10 });
    testInstance.reset(); // Call the reset method
    expect(testInstance.state.count).toBe(0); // Expect count to reset to the initialCount (0)
  });

  it('should render the correct UI', () => {
    // Check the rendered output
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot(); // Use a snapshot test for rendering verification
  });
});
Key Points in the Test:
TestRenderer.create(<Component />):

This creates an instance of the component using React Test Renderer.
Accessing the Instance:

testRenderer.root.instance allows you to access the class component instance. You can use this to directly call methods like increment, decrement, or reset.
Testing Methods:

By calling the methods on testInstance, you can simulate the actions the component would perform and check the state changes that result from these method calls.
Snapshot Testing:

testRenderer.toJSON() converts the rendered output into a JSON structure that can be used for snapshot testing. This ensures that the component UI hasn’t changed unexpectedly.
Running the Tests
To run the tests, use the following command:

bash
Copy code
npm test
Jest will run the tests and display the results in the console. If you have snapshot testing set up, it will generate a snapshot file to compare future changes.

Summary:
React Test Renderer is a great tool for testing class component methods and checking state changes.
It allows you to access the component instance directly and invoke methods for testing.
You can also combine it with snapshot testing to verify the rendered output of the component.
Would you like to test other advanced features of a class component, such as lifecycle methods or asynchronous operations?


npm install --save-dev react-test-renderer
this package provides us all instances of the component


# Functional Component method testing
test only those methods which are shown on ui , no need to test.
- by firing event like click on change
- we can not change the method without event which is not present in the ui, to test this
1. we have to takes out the method from component then test it
2. or we can make it class component


In fuxntional componet it is difficult to test a method, we cannot extract the method from fucnctional compoenent which is mot shown in the ui, but you can test this method in class component using rendered method

Testing methods and functionality within functional components in React involves testing how the component behaves when interacting with user events, state changes, effects, and other hooks. Here’s how you can test functional components, particularly focusing on testing hooks like useState, useEffect, useCallback, and methods used in the component.

Steps to Test Functional Components:
Render the Component: Use render from React Testing Library (RTL) to mount the component.
Simulate User Interaction: Use fireEvent or userEvent to simulate clicks, typing, and other actions.
Test State Updates: After interacting with the component, check if the state updates correctly.
Test useEffect and Side Effects: Mock side effects and test component behavior after effects are triggered.
Mock External Functions: If your component uses API calls or functions passed as props, mock those for isolated testing.
Example Testing Hooks (useState, useEffect)
Functional Component
Here’s a simple functional component using useState and useEffect:

tsx
Copy code
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // Simulates loading state
  }, []);

  const increment = () => setCount(count + 1);

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>Count: {count}</p>}
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
Testing useState and useEffect
Here’s how to write a test for the Counter component using Jest and RTL.

tsx
Copy code
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders loading, then displays count and allows increment', () => {
  // Render the component
  render(<Counter />);
  
  // Initially, loading message should be present
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  // After `useEffect`, count should be displayed
  expect(screen.queryByText(/count: 0/i)).not.toBeInTheDocument();
  
  // Mock the behavior of useEffect using async for the state change
  setTimeout(() => {
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  }, 0);

  // Find and click the increment button
  const button = screen.getByRole('button', { name: /increment/i });
  fireEvent.click(button);

  // After clicking, the count should increment
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});
Breakdown of Testing Approach:
Initial State: Test the component's loading state by checking if "Loading..." is displayed.
State Changes: Wait for the useEffect to complete and check if the correct count is rendered.
Event Simulation: Simulate a button click using fireEvent or userEvent.
Assertions: Verify that the UI has updated accordingly after the state change.
Testing with useEffect (Mocking API calls)
If your component makes API calls inside useEffect, you can mock them.

tsx
Copy code
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import Users from './Users';
jest.mock('axios');

test('fetches and displays users', async () => {
  const users = [{ id: 1, name: 'John Doe' }];
  axios.get.mockResolvedValueOnce({ data: users });

  render(<Users />);
  
  // Initially, loading should be present
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  // Wait for users to appear in the UI
  await waitFor(() => screen.getByText('John Doe'));

  // Ensure that users are displayed after the API call
  expect(screen.getByText('John Doe')).toBeInTheDocument();
});
In this example:

Mocking Axios: jest.mock('axios') allows you to mock API responses for isolation.
waitFor: Ensures the test waits for async operations (like API responses) before asserting.
Testing useCallback and useMemo
If you use useCallback or useMemo, you don't need special treatment in tests. They are mostly optimizations and can be tested like any regular functions in the component.

Mocking Functions Passed as Props
If a method is passed to your component as a prop, you can mock that method using jest.fn():

tsx
Copy code
const mockIncrement = jest.fn();

render(<Counter increment={mockIncrement} />);

// Simulate the click event
fireEvent.click(screen.getByRole('button', { name: /increment/i }));

// Assert the mock function was called
expect(mockIncrement).toHaveBeenCalled();
This ensures you test how the component interacts with external functions or props.

Best Practices:
Test Behavior, Not Implementation: Focus on how the component behaves, rather than the internal implementation of hooks.
Use findBy for Async Queries: Use findBy* methods for elements that appear after async operations, such as data fetching.
Mock External Dependencies: When testing, mock any external services (like APIs) so the tests remain fast and reliable.
This approach will cover most functional component methods in React and their interaction with hooks like useState, useEffect, and event handlers.

# RTL Query

In React Testing Library (RTL), queries are used to find elements in the rendered component. RTL provides various queries based on accessibility, text content, role, labels, and more.


Types of Queries in RTL
getBy: Throws an error if no element or multiple elements are found.

getByText()
getByRole()
getByLabelText()
getByPlaceholderText()
getByAltText()
getByTestId()
queryBy: Returns null if no element is found, which can be useful for assertions when elements are not expected to exist.

queryByText()
queryByRole()
findBy: Returns a promise that resolves when the element is found (useful for async components).

findByText()
findByRole()
All queries: These return all matching elements (or an empty array if none are found).

getAllByText()
queryAllByText()
findAllByText()
Common Queries
1. getByText
Finds an element by its text content.

tsx
Copy code
const { getByText } = render(<Component />);
const element = getByText(/submit/i); // Case insensitive match
2. getByRole
Finds an element by its role (like a button, heading, etc.).

tsx
Copy code
const { getByRole } = render(<button>Click me</button>);
const button = getByRole('button');
3. getByPlaceholderText
Finds input elements by their placeholder attribute.

tsx
Copy code
const { getByPlaceholderText } = render(<input placeholder="Enter name" />);
const input = getByPlaceholderText('Enter name');
4. getByTestId
Finds an element by a custom test id.

tsx
Copy code
const { getByTestId } = render(<div data-testid="custom-element" />);
const element = getByTestId('custom-element');
Example Test
Here’s a basic test using getByText and getByRole:

tsx
Copy code
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyComponent from './MyComponent';

test('renders a button and handles click event', () => {
  render(<MyComponent />);
  
  const button = screen.getByRole('button', { name: /submit/i });
  expect(button).toBeInTheDocument();
  
  userEvent.click(button);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});
In this test:

getByRole finds the button by its role and accessible name.
getByText checks that a "loading" message appears after the button is clicked.
Selecting Queries
getByRole is often preferred as it mimics how users interact with a page (through roles and accessible names).
getByText is helpful for text content matching.
getByTestId should be a last resort when no other query works.
These queries will help you effectively test your React components based on how users interact with them.


RTL Query is used to findout  the ui components  and test ui component

steps in testing ui
1. render component
2. find element and actions (optional)
3. assertions


how RTL find element
by element type
by element name
by element id
by testid
by element role


type of RTL Queries
- FInd single element
getby, queryBy, findBy

- FInd multiple elements
getAllBy, queryAllBy, findAllBy


# Semantic and Non-semantic
semantic tags describes something in the ui
roles for semantic tags are defined by default like role button for button.
semantic elements: Button, heading tags and table
Non-semantic: div and span, dont have role

# getByRole Query
used to test single element



# input with the value attribute:
`Warning`: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.

# input with the defaultValue attribute:
no error or warning


# getByAllRole Query:
to test for multiple 
we can test multiple element when the attribute of elements are same 



# Override data-testid;

import { render, screen, configure } from "@testing-library/react";
configure({ testIdAttribute: 'element-id' });


# getByAltText

used to test images by getting alt text


# Priority Order for RTL Queries
we have to use most of the time : ByRole

if you donot have role then follow the order.

ByRole > ByLabelText > ByPlaceholderText > ByText > ByDisplayValue > ByAltText > ByTitle > ByTestId

if element donot have the any then use ByTestId 

In React Testing Library (RTL), queries are prioritized based on how closely they reflect how a user would interact with the UI. The queries are divided into different levels of priority, with the higher-priority ones being preferred for more user-centric testing. Here's the recommended priority order for RTL queries:

1. Queries Accessible to Everyone (Best Choice)
These queries are user-facing and focus on accessibility, which is why they are considered the most reliable and should be used whenever possible.

getByRole: Queries elements by their ARIA role. This is the most user-centric way to query elements, as roles are often how users navigate interfaces.

const button = screen.getByRole('button', { name: /submit/i });
getByLabelText: Queries form controls (like <input> or <textarea>) associated with labels.

const input = screen.getByLabelText(/username/i);
getByPlaceholderText: Queries input fields by their placeholder attribute.

const input = screen.getByPlaceholderText(/enter your username/i);
getByText: Queries elements by the visible text they contain.

const element = screen.getByText(/welcome/i);
getByDisplayValue: Queries form elements by their current value.

const input = screen.getByDisplayValue('John Doe');
2. Queries Based on Semantics
These queries rely on semantic content that may not be immediately visible to the user but is important for accessibility.

getByAltText: Queries elements by the text used in alt attributes (e.g., for images).

const image = screen.getByAltText(/profile picture/i);
getByTitle: Queries elements by their title attribute.

const element = screen.getByTitle('close button');
3. Test IDs (Less Preferred)
Using test-specific identifiers should be avoided unless there’s no better option for accessing elements. These are not how users interact with interfaces but are useful for uniquely identifying components in certain cases.

getByTestId: Queries elements by the data-testid attribute.

const element = screen.getByTestId('custom-element');
Priority Usage Guidelines
Always start with queries based on roles or labels (getByRole, getByLabelText, getByText), as these closely reflect how users and assistive technologies interact with the UI.
Avoid getByTestId unless absolutely necessary, since it's not representative of how users interact with your interface.
Fallback queries (getByAltText, getByPlaceholderText, getByTitle) are useful when user-accessible queries are not feasible.
By following this order of priority, your tests will remain focused on the user experience and accessibility, ensuring the robustness and maintainability of your test cases.


# Assertion Methods

In testing, assertion methods are used to verify that the expected output or behavior of the code matches the actual result during tests. When using testing libraries like Jest (often combined with React Testing Library), these assertion methods help check whether certain conditions are met within your tests.

Here are common assertion methods used in Jest, React Testing Library (RTL), and general testing:

1. Jest Assertion Methods
Jest provides a wide variety of built-in assertion methods to verify the correctness of the code.

Basic Assertions:
toBe: Checks for primitive equality (e.g., numbers, strings, booleans).

expect(2 + 2).toBe(4);
toEqual: Checks for deep equality (used for objects or arrays).

expect({ name: 'John' }).toEqual({ name: 'John' });
Boolean Assertions:
toBeTruthy: Asserts that a value is truthy (i.e., it evaluates to true).

expect(value).toBeTruthy();
toBeFalsy: Asserts that a value is falsy (i.e., it evaluates to false).

expect(value).toBeFalsy();
Comparison Assertions:
toBeGreaterThan: Checks if a value is greater than a certain number.

expect(10).toBeGreaterThan(5);
toBeLessThan: Checks if a value is less than a certain number.

expect(3).toBeLessThan(5);
String Assertions:
toMatch: Checks if a string matches a regular expression.

expect('Hello World').toMatch(/world/i); // case-insensitive match
Array and Object Assertions:
toContain: Checks if an array contains a specific value.

expect([1, 2, 3]).toContain(2);
toHaveProperty: Asserts that an object contains a specific property.

expect({ name: 'John', age: 30 }).toHaveProperty('age', 30);
Function Assertions:
toHaveBeenCalled: Checks if a mock function has been called.

const mockFunction = jest.fn();
mockFunction();
expect(mockFunction).toHaveBeenCalled();
toHaveBeenCalledWith: Checks if a mock function has been called with specific arguments.

const mockFunction = jest.fn();
mockFunction('argument');
expect(mockFunction).toHaveBeenCalledWith('argument');
2. React Testing Library Assertion Methods
React Testing Library extends Jest with more user-centric assertions, which are included by using the @testing-library/jest-dom library.

Common RTL Assertions:
toBeInTheDocument: Asserts that an element exists in the document.

expect(screen.getByText(/submit/i)).toBeInTheDocument();
toBeVisible: Asserts that an element is visible.

expect(screen.getByText(/submit/i)).toBeVisible();
toHaveTextContent: Checks if an element contains a specific text.

expect(screen.getByTestId('header')).toHaveTextContent('Hello');
toHaveClass: Asserts that an element has a specific CSS class.

expect(screen.getByTestId('my-element')).toHaveClass('active');
toBeDisabled: Asserts that a form control is disabled.

expect(screen.getByRole('button')).toBeDisabled();
toHaveAttribute: Checks if an element has a specific attribute with a value.

expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password');
3. Combining Assertions
You can also combine multiple assertions to check more complex behaviors:


const button = screen.getByRole('button', { name: /submit/i });
expect(button).toBeInTheDocument();
expect(button).toBeVisible();
expect(button).toBeEnabled();
Summary
Basic Assertions: toBe, toEqual, toBeTruthy, etc., are used for verifying basic values like strings, numbers, or booleans.
RTL Assertions: toBeInTheDocument, toHaveTextContent, and toHaveClass help verify that elements behave as expected in the DOM.
Mock Function Assertions: toHaveBeenCalled and toHaveBeenCalledWith are useful for testing interactions like button clicks and API calls.
These assertion methods will help you verify different aspects of your React components and applications when writing tests.


Jest has a variety of assertion methods for testing, including: 
Equality assertions: Jest has assertions for equality. 
Number assertions: Jest has assertions for numbers. 
Array assertions: Jest has assertions for arrays. 
Object assertions: Jest has assertions for objects. 
Convenience methods: Jest has convenience methods for testing common values like undefined. 
Matcher assertions: Jest uses matchers to test values in different ways. 
expect.assertions: This method verifies that a certain number of assertions are called during a test. This is useful when testing asynchronous code. 
toHaveProperty: This method checks if a property exists for an object at a provided reference keyPath. 
toHaveReturnedTimes: This method ensures that a mock function returned successfully an exact number of times. 

What is assertion in Jest testing?
An assertion is a check that values meet certain conditions. In other words, if you use expect. assertions(5) the test will fail unless expect() is called at least 5 times. This is useful for async tests, but it's not the only way to handle asynchronicity, you can find other patterns in the Jest doc.

# text match;
with strings,
with regex
with functions


In Jest and React Testing Library (RTL), you can use text matching to verify if certain content exists in your components. Text matching can be done using strings, regular expressions (regex), or custom functions depending on the level of flexibility you need.

Here’s how to work with text matching using these three approaches:

1. Text Matching with Strings
Using strings for matching is the simplest and strictest method. It matches text exactly as it appears (case-sensitive by default).

javascript
Copy code
expect(screen.getByText('Submit')).toBeInTheDocument();
Exact match (case-sensitive):

The string must exactly match the content in the DOM.
javascript
Copy code
expect(screen.getByText('Submit')).toBeInTheDocument();
Case-insensitive matching (using the i flag with regex):

If you want to make it case-insensitive, use regular expressions (discussed next).
2. Text Matching with Regular Expressions (Regex)
Regular expressions provide more flexibility for matching text, including partial, case-insensitive, or pattern-based matches.

Case-insensitive match:

javascript
Copy code
expect(screen.getByText(/submit/i)).toBeInTheDocument();  // 'i' flag makes it case-insensitive
Partial match:

javascript
Copy code
expect(screen.getByText(/sub/)).toBeInTheDocument();  // Matches any element containing 'sub'
Exact match with regex:

This can be helpful if you're looking for a very specific pattern or structure.
javascript
Copy code
expect(screen.getByText(/^Submit$/)).toBeInTheDocument();  // Matches exactly 'Submit'
Matching with special characters or numbers:

javascript
Copy code
expect(screen.getByText(/\d+ items/)).toBeInTheDocument();  // Matches text like '5 items', '10 items', etc.
3. Text Matching with Functions
You can also pass a custom function to match elements based on more complex conditions. The function receives the text content of the element as an argument, and it should return true if a match is found.

Custom function for matching:

javascript
Copy code
expect(screen.getByText((content) => content.startsWith('Sub'))).toBeInTheDocument();
Matching elements containing dynamic content:

You can also create custom matching logic, like checking if the content contains part of a dynamic string.
javascript
Copy code
const dynamicText = 'Submit your response';
expect(screen.getByText((content) => content.includes('Submit'))).toBeInTheDocument();
More advanced logic (e.g., ignoring certain characters or whitespace):

javascript
Copy code
expect(screen.getByText((content) => content.trim() === 'Submit')).toBeInTheDocument();
Use Cases for Each Type of Matching
Strings: Best for exact, simple text matches where the content doesn't change or is static.
Regex: Ideal for partial matches, case-insensitive searches, or if you need to match text patterns.
Functions: Useful when more complex logic is needed (e.g., when ignoring whitespace, trimming content, or checking dynamic values).
Example
Here's a practical example combining all three matching approaches:

javascript
Copy code
// String match (case-sensitive)
expect(screen.getByText('Hello')).toBeInTheDocument();

// Regex match (case-insensitive)
expect(screen.getByText(/hello/i)).toBeInTheDocument();

// Custom function match
expect(screen.getByText((content) => content.startsWith('Hello'))).toBeInTheDocument();
By using strings, regex, or functions, you can tailor text matching in your tests to match the exact behavior you're trying to verify.






