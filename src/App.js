import './App.css';
import { useState } from 'react';

function App() {
  const [steps, updateSteps] = useState(1);
  const [count, updateCount] = useState(0);
  const increaseSteps = () => {
    updateSteps(steps + 1);
    return;
  };

  const decreaseSteps = () => {
    updateSteps(steps - 1);
    return;
  };

  const decreaseCount = () => {
    updateCount(count - steps);
  };

  const increaseCount = () => {
    updateCount(count + steps);
  };

  function fetchDate(count) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + count);
    return currentDate.toDateString();
  }

  return (
    <div className="App">
      <div className="steps">
        <button onClick={decreaseSteps}>-</button>Steps: {steps}
        <button onClick={increaseSteps}>+</button>
      </div>
      <div className="count">
        <button onClick={decreaseCount}>-</button> Count: {count}
        <button onClick={increaseCount}>+</button>
      </div>
      <div className="date">
        {count > 0 ? count : count * -1} days {count < 0 ? `ago` : `later`} date
        will be {fetchDate(count)}
      </div>
    </div>
  );
}

export default App;
