Testing props in React components is essential to ensure that your components behave correctly when they receive different sets of data or functions. Testing props ranges from simple data to complex data structures and functional props. Here’s a guide on how to test props, from simple to complex:

1. Testing Simple Props
Simple props are basic data types such as strings, numbers, and booleans.

Example Component with Simple Props:
jsx
Copy code
const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;

export default Greeting;
Test:
javascript
Copy code
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('displays the correct greeting message', () => {
  render(<Greeting name="Alice" />);
  expect(screen.getByText('Hello, Alice!')).toBeInTheDocument();
});
2. Testing Props with Arrays and Objects
Props with arrays or objects can be more complex and often require deeper assertions.

Example Component with Array Props:
jsx
Copy code
const List = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default List;
Test:
javascript
Copy code
import { render, screen } from '@testing-library/react';
import List from './List';

test('renders a list of items', () => {
  const items = ['Apple', 'Banana', 'Cherry'];
  render(<List items={items} />);

  items.forEach(item => {
    expect(screen.getByText(item)).toBeInTheDocument();
  });
});
Example Component with Object Props:
jsx
Copy code
const UserProfile = ({ user }) => (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
  </div>
);

export default UserProfile;
Test:
javascript
Copy code
import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';

test('renders user profile information', () => {
  const user = { name: 'Alice', age: 30 };
  render(<UserProfile user={user} />);

  expect(screen.getByText('Alice')).toBeInTheDocument();
  expect(screen.getByText('Age: 30')).toBeInTheDocument();
});
3. Testing Functional Props
Functional props are functions passed to components, such as event handlers or callbacks.

Example Component with Functional Props:
jsx
Copy code
const Button = ({ onClick, label }) => (
  <button onClick={onClick}>{label}</button>
);

export default Button;
Test:
javascript
Copy code
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('calls onClick handler when button is clicked', () => {
  const handleClick = jest.fn(); // Mock function
  render(<Button onClick={handleClick} label="Click me" />);

  const button = screen.getByText('Click me');
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
4. Testing Complex Props
Complex props might include deeply nested objects, arrays of objects, or complex functional props.

Example Component with Complex Object Props:
jsx
Copy code
const ProductDetails = ({ product }) => (
  <div>
    <h1>{product.name}</h1>
    <p>Price: ${product.price}</p>
    <ul>
      {product.reviews.map((review, index) => (
        <li key={index}>
          <strong>{review.author}</strong>: {review.text}
        </li>
      ))}
    </ul>
  </div>
);

export default ProductDetails;
Test:
javascript
Copy code
import { render, screen } from '@testing-library/react';
import ProductDetails from './ProductDetails';

test('renders product details and reviews', () => {
  const product = {
    name: 'Laptop',
    price: 999.99,
    reviews: [
      { author: 'John', text: 'Great laptop!' },
      { author: 'Jane', text: 'Could be better.' }
    ]
  };

  render(<ProductDetails product={product} />);

  expect(screen.getByText('Laptop')).toBeInTheDocument();
  expect(screen.getByText('Price: $999.99')).toBeInTheDocument();
  expect(screen.getByText('John: Great laptop!')).toBeInTheDocument();
  expect(screen.getByText('Jane: Could be better.')).toBeInTheDocument();
});
Example Component with Functional Props (Complex):
jsx
Copy code
const Form = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit('Form Data');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
Test:
javascript
Copy code
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

test('calls onSubmit with form data when form is submitted', () => {
  const handleSubmit = jest.fn();
  render(<Form onSubmit={handleSubmit} />);

  const button = screen.getByText('Submit');
  fireEvent.click(button);

  expect(handleSubmit).toHaveBeenCalledWith('Form Data');
});
Summary:
Simple Props: Test basic data types (strings, numbers) by rendering the component and making assertions based on expected output.
Arrays and Objects: For arrays, check each item individually. For objects, ensure that all relevant properties are rendered correctly.
Functional Props: Verify that function props (e.g., event handlers) are called with the expected arguments.
Complex Props: For deeply nested objects or complex functions, ensure all parts of the data or function are handled as expected.
Testing props involves ensuring that your components handle different types and structures of data correctly and interact with functions as expected. By following these practices, you can ensure your components work correctly with various prop types.