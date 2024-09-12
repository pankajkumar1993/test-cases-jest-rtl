import { render, screen } from '@testing-library/react';
import App from './App';
import cleandb from '../service';

// beforeAll(()=>{
//   console.log("**Before All Hook*****");
// })
// beforeEach(()=>{
//   console.log("**Before Each Hook*****");
//   cleandb()
// })
test('renders learn react link 1', () => {
  // console.log(1);
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 2', () => {
  // console.log(2);
  render(<App />);
  const linkElement = screen.getByText(/testing react app/i);
  expect(linkElement).toBeInTheDocument();
});

// afterAll(()=>{
//   console.log("**After All Hook*****");
// })
// afterEach(() => {
//   console.log("**After Each Hook*****");
// })
