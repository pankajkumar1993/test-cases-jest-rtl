In React Testing Library (RTL), you can write tests using built-in queries or define custom queries if you need to find elements in unique ways that the default queries don’t support.

1. Using Built-in Queries
RTL provides a range of queries, like getBy, queryBy, and findBy, to find elements based on attributes like role, text, labels, etc.

Example of a test using the built-in getByText query:


test('renders submit button', () => {
  render(<MyComponent />);
  const button = screen.getByText('Submit');
  expect(button).toBeInTheDocument();
});
2. Custom Queries
Sometimes, you need to create a custom query if built-in ones don't fit. Custom queries let you define how to find an element based on specific attributes or conditions.

Custom Query Example:
Let’s say you want to query an element by its data-* attribute.


import { render, screen, within } from '@testing-library/react';

// Define the custom query
const getByDataTestId = (container, id) => within(container).queryByAttribute('data-testid', container, id);

// Test with custom query
test('custom query test', () => {
  render(<div data-testid="custom-element">Hello</div>);
  
  const element = getByDataTestId(document.body, 'custom-element');
  expect(element).toBeInTheDocument();
});
Creating Custom Queries Using queryByAttribute
RTL provides a helper method, queryByAttribute, to create custom queries for attributes.


import { queryByAttribute } from '@testing-library/react';

// Custom query example
const getByCustomAttr = (attr, value) => {
  return queryByAttribute(attr, document.body, value);
};

// Use custom query in test
test('find element by custom attribute', () => {
  render(<div custom-attr="unique-value">Hello</div>);
  
  const element = getByCustomAttr('custom-attr', 'unique-value');
  expect(element).toBeInTheDocument();
});
Summary
Built-in queries like getByText, getByRole, etc., are commonly used for most tests.
Custom queries can be created using queryByAttribute or custom functions when you need more specific conditions to find elements, such as by a data-* attribute or other unique properties.






The recommended approach for testing in terms of JavaScript queries and React Testing Library (RTL) queries focuses on using queries that resemble how a user interacts with your app. Here’s the hierarchy of recommended queries in RTL, from the most user-centric to least preferred:

1. Use Queries that Match Real User Interactions
2. Avoid Less User-Centric Queries
3. Custom Queries (Use as a Last Resort)
4. General Best Practices


Summary of the Recommended Query Approach:
Prefer user-centric queries like getByRole, getByLabelText, getByText.
Minimize reliance on getByTestId—use it only when no other query works.
Test from the user’s perspective, using queries that reflect actual user behavior and interaction.
Use async queries (findBy) when dealing with delayed elements.
