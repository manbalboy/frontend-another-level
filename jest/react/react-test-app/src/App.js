import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const fnMinusOne = () => {
    setCounter((count) => count - 1);
  };
  const fnPlusOne = () => {
    setCounter((count) => count + 1);
  };

  const fnToggleDisabled = () => {
    setDisabled((prevVal) => !prevVal);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid={"counter"}>{counter}</h3>
        <div>
          <button
            data-testid={"minus-button"}
            onClick={fnMinusOne}
            disabled={disabled}
          >
            -
          </button>
          <button
            data-testid={"plus-button"}
            onClick={fnPlusOne}
            disabled={disabled}
          >
            +
          </button>
        </div>
        <div>
          <button
            data-testid={"on/off-button"}
            onClick={fnToggleDisabled}
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
