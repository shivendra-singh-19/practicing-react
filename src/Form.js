import { useState } from 'react';

export function Form({ updateItems }) {
  const [description, setDescription] = useState('');
  const [count, setCount] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) {
      return;
    }

    const newItem = {
      id: new Date(),
      description: description,
      quantity: count,
      packed: false,
    };
    updateItems(newItem);
    setDescription('');
    setCount(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>
        What do you need for your trip ?
        <select
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        >
          {Array.from({ length: 10 }, (current, iterator) => {
            const i = iterator + 1;
            return (
              <option value={i} key={i}>
                {i}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder="item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>add</button>
      </h2>
    </form>
  );
}
