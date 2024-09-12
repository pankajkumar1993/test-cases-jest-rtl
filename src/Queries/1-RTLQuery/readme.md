n React Testing Library (RTL), query types help you find elements in the DOM for testing. There are three main query types:

1. getBy* Queries (Immediate Fail):

Synchronously searches for elements. Throws an error if not found.
Example: screen.getByText('Submit').

2. queryBy* Queries (No Error):

Synchronously searches but returns null if the element is not found.
Example: screen.queryByText('Submit').

if single element is hidden then we use queryBy
if multiple elements are hidden then we use queryAllBy

have all features like getBy. 
if the element is hidden in the dom we can get the element by queryBy and test it.

3. findBy* Queries (Async):

Asynchronously waits for the element to appear before timing out. Used when elements take time to load.
Example: await screen.findByText('Submit').
Use these queries to simulate how users interact with elements in the UI.

when we load the page , the ui element takes time to load due some reasons:
- data coming from api
- page has more code and media assets

thoise element's testing could be done with the findBy and findAllBy.
we use setTimeout with findBy