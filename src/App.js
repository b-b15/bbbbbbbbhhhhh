import logo from './logo.svg';
import './App.css';
import { useProviderContext } from "./Context"

function App() {

  const { id,image } = useProviderContext();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{id}</h1>
        <h1>{image}</h1>

      </header>
    </div>
  );
}

export default App;

