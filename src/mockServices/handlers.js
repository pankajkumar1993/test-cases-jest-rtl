// // import { rest } from 'msw'


// // export const handlers = [
// //   rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
// //     return res(
// //       ctx.status(200),
// //       ctx.json([
// //         { name: 'anil' },
// //         { name: 'rahul' },
// //         { name: 'sam' },
// //         { name: 'peter' }
// //       ])
// //     )
// //   })
// // ]



// import { rest } from 'msw';

// export const handlers = [
//   rest.get('https://dummyjson.com/posts', (req, res, ctx) => {
//     return res(
//       ctx.json([
//         {
//           id: 1,
//           title: `Avoid Nesting When You're Testing`,
//         },
//         {
//           id: 2,
//           title: `How I Built A Modern Website In 2021`,
//         },
//       ])
//     );
//   }),
// ];
