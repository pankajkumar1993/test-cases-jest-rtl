// import { render, screen } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import FollowersList from './FollowersList';
// import axios from 'axios';

// jest.mock('axios');

// const MockFollowersList = () => {
//   return (
//     <BrowserRouter>
//       <FollowersList />
//     </BrowserRouter>
//   );
// };


// beforeEach(() => {
//   axios.get.mockResolvedValue({
//     data: {
//       results: [
//         {
//           name: { first: "Laith", last: "Harb" },
//           picture: { large: "https://randomuser.me/api/portraits/men/59.jpg" },
//           login: { username: "ThePhonyGOAT" },
//         },
//       ]
//     }
//   });
// });

// describe("FollowersList", () => {

//   it('should fetch and render follower data', async () => {
//     render(<MockFollowersList />);
//     const followerDivElement = await screen.findByTestId('follower-item-0');
//     expect(followerDivElement).toBeInTheDocument();
//   });

// });

// afterEach(() => {
//   jest.clearAllMocks();
// });