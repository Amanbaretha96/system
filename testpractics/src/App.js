import logo from './logo.svg';
import './App.css';
import Sonucomponent from './component/sonucomponent';
// import Dadcomponent from './component/dadcomponent';
// import Fathercomponent from './component/fathercomponent';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Sonucomponent/>
      {/* <Fathercomponent/> */}
      {/* <Dadcomponent/> */}
    </div>
  );
}

export default App;
