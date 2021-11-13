import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const fnMinusOne = () => {
    setCounter((count) => count - 1);
  };
  const fnPlusOne = () => {
    setCounter((count) => count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid={"counter"}>{counter}</h3>
        <div>
          <button data-testid={"minus-button"} onClick={fnMinusOne}>
            -
          </button>
          <button data-testid={"plus-button"} onClick={fnPlusOne}>
            +
          </button>
        </div>
        <div>
          <button
            data-testid={"on/off-button"}
            style={{ backgroundColor: "blue" }}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
