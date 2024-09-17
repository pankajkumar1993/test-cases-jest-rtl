import logo from './logo.svg';
import './App.css';
import UserEventClick from './components/Events/2-UserEvent/OnClick/UserEventClick';
import TestProps from './components/TestProps/SimpleTestProps/SimpleTestProps';
import UsersLists from './components/MockServiceWorker/CallAPi/UsersLists';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with jest
        </a>
        <p>testing react app</p>
        <UserEventClick />
        <TestProps />
        <UsersLists />
      </header>
    </div>
  );
}

export default App;
