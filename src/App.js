import logo from './logo.svg';
import './App.css';
import OnChangeEvents from './OnChangeEvents/OnChangeEvents';
import OnClickEvent from './OnClickEvent/OnClickEvent';

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
          Learn React
        </a>
        <p>testing react app</p>
        <OnChangeEvents />
        <OnClickEvent />
      </header>
    </div>
  );
}

export default App;
