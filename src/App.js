import './App.css';
import { useState } from 'react';

function App() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);
  const increaseSteps = (jump) => {
    setSteps(jump);
    return;
  };

  function fetchDate(count) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + count);
    return currentDate.toDateString();
  }

  function resetDate() {
    setCount(0);
    setSteps(1);
  }

  function handleUpdateCount(e) {
    const value = parseInt(e.target.value);
    if (!value) return;

    setCount(value);
  }

  return (
    <div className="App">
      <div>
        <input
          type="range"
          min={1}
          max={100}
          value={steps}
          onInput={(e) => increaseSteps(parseInt(e.target.value))}
        />{' '}
        {steps}
      </div>
      <div>
        <button
          onClick={() => {
            setCount(count - steps);
          }}
        >
          -
        </button>
        <input
          type="text"
          value={count}
          placeholder="Enter days later"
          onInput={(e) => handleUpdateCount(e)}
        />
        <button
          onClick={() => {
            setCount(count + steps);
          }}
        >
          +
        </button>
      </div>
      <div>{fetchDate(count)}</div>
      <div>
        <button onClick={() => resetDate()}>Reset</button>
      </div>
    </div>
  );
}

export default App;
