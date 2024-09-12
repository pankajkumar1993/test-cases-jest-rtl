import logo from './logo.svg';
import './App.css';
import OnChangeEvents from './OnChangeEvents/OnChangeEvents';
import OnClickEvent from './OnClickEvent/OnClickEvent';
import UserClassComponent from './ClassComponent/ClassComponent';

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
        <OnChangeEvents />
        <OnClickEvent />
        <UserClassComponent/>
      </header>
    </div>
  );
}

export default App;
