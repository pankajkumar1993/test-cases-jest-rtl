Mock Service Worker (MSW) is a popular library used for mocking HTTP requests in tests. It allows you to intercept and handle network requests in a way that closely mimics real-world scenarios. This is particularly useful for testing React components and other parts of your application that rely on HTTP requests without making actual network calls.

Setting Up Mock Service Worker (MSW)
1. Install MSW
First, you need to install MSW and its dependencies.

bash
Copy code
npm install msw --save-dev
# or
yarn add msw --dev
2. Setup MSW
Create a file to configure your handlers. For example, you can create a src/mocks/handlers.js file:

javascript
Copy code
// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/data', (req, res, ctx) => {
    return res(ctx.json({ key: 'value' }));
  }),

  rest.post('/api/submit', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ success: true }));
  }),
];
Create a file to set up the MSW server. For example, you can create a src/mocks/server.js file:

javascript
Copy code
// src/mocks/server.js
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Set up the mock server with the request handlers
export const server = setupServer(...handlers);
3. Configure MSW in Tests
In your test setup file (e.g., src/setupTests.js), configure MSW to start and stop the server for each test:

javascript
Copy code
// src/setupTests.js
import { server } from './mocks/server';
import '@testing-library/jest-dom/extend-expect';

// Establish API mocking before all tests
beforeAll(() => server.listen());

// Reset any request handlers that are declared in a test
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished
afterAll(() => server.close());
Writing Tests with MSW
Once MSW is set up, you can write tests that make HTTP requests and verify how your components handle them.

Example: Testing a Component with HTTP Request
Suppose you have a component that fetches data from an API:

jsx
Copy code
// src/components/DataFetcher.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/data').then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return <div>Loading...</div>;

  return <div>Data: {data.key}</div>;
};

export default DataFetcher;
Test for the Component
javascript
Copy code
import { render, screen, waitFor } from '@testing-library/react';
import DataFetcher from './DataFetcher';

test('fetches and displays data', async () => {
  render(<DataFetcher />);

  // Assert the loading state
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // Wait for the data to be fetched and displayed
  await waitFor(() => screen.getByText('Data: value'));

  // Assert the fetched data
  expect(screen.getByText('Data: value')).toBeInTheDocument();
});
Handling Errors and Custom Responses
You can customize your handlers to return different responses or simulate errors:

javascript
Copy code
// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/data', (req, res, ctx) => {
    // Simulate an error response
    return res(ctx.status(500), ctx.json({ error: 'Internal Server Error' }));
  }),

  rest.post('/api/submit', (req, res, ctx) => {
    // Return a custom response
    return res(ctx.status(200), ctx.json({ success: true, id: 123 }));
  }),
];
Test for Error Handling
javascript
Copy code
import { render, screen, waitFor } from '@testing-library/react';
import DataFetcher from './DataFetcher';

test('handles server error', async () => {
  // Update the handler to simulate an error
  server.use(
    rest.get('/api/data', (req, res, ctx) => res(ctx.status(500), ctx.json({ error: 'Internal Server Error' })))
  );

  render(<DataFetcher />);

  // Assert the error state
  await waitFor(() => screen.getByText('Error: Unable to fetch data'));

  expect(screen.getByText('Error: Unable to fetch data')).toBeInTheDocument();
});
Summary
Install MSW and set up request handlers for your mock APIs.
Configure MSW to start and stop the server in your test setup file.
Write tests that use MSW to intercept and mock HTTP requests.
Handle different scenarios, including success and error responses, by customizing your handlers.
MSW helps you test components that rely on HTTP requests effectively without making actual network calls, allowing for more reliable and faster tests.



Mostly we test rest API by mocking (create a dummy copy);
MSW stands for Mock Service Worker.
React testing library recommend to MSW
we can also mock api with jest also.

complex handling
Isolation: Ensures tests focus on specific components or functions without external dependencies.
Control: Allows simulation of various scenarios and edge cases.
Speed: Improves test execution time and reduces flakiness.
Resource Management: Reduces the need for actual resources, cutting costs.
Behavior Testing: Verifies interactions between components or services.
Handling Unavailability: Simulates unavailable or slow dependencies to avoid test delays.
Mocking is a powerful technique for creating reliable, fast, and controlled test environments, making it an essential part of modern software testing practices.


Industry standard API mocking for JavaScript.
Mock Service Worker is an API mocking library that allows you to write client-agnostic mocks and reuse them across any frameworks, tools, and environments.

https://mswjs.io/


Install MSW
npm install msw@latest --save-dev
Make Mock Service Folder
mockServices/
            handlers.js
            server.js

Make server file
Make server handler file
write code for api testing
call server in test setup file