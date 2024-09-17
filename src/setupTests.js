// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom



// import '@testing-library/jest-dom';
// import { server } from './mockServices/server';

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());




// import '@testing-library/jest-dom';
// import '@testing-library/jest-dom/extend-expect'

// /**
//  * Codesandbox executes this setup file in a browser environment.
//  * Ensure that the server-side API mocking runs in NodeJS only.
//  * @note You DON'T need this condition in your test setup.
//  */
// if (typeof window === undefined) {
//   const { server } = require('./mocks/server')

//   beforeAll(() => {
//     server.listen({
//       onUnhandledRequest: 'warn',
//     })
//   })

//   afterEach(() => {
//     server.resetHandlers()
//   })

//   afterAll(() => {
//     server.close()
//   })
// }



import '@testing-library/jest-dom';
import { server } from './mocks/server';



beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())