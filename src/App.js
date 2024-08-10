import { useState } from 'react';
import './App.css';

function App() {
  const initialItems = [
    {
      id: 1,
      description: 'Passport',
      quantity: 2,
      packed: false,
    },
    {
      id: 2,
      description: 'Socks',
      quantity: 12,
      packed: false,
    },
    {
      id: 3,
      description: 'Charger',
      quantity: 1,
      packed: true,
    },
  ];

  return (
    <div className="App">
      <Form />
      <PackagingList items={initialItems} />
      <Stats />
    </div>
  );
}

function Form() {
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

    console.log(newItem);
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

function PackagingList(props) {
  const { items } = props;
  return (
    <div className="list">
      {items.map((item) => {
        return <Item itemProps={item} key={item.id} />;
      })}
    </div>
  );
}

function Item(props) {
  const { itemProps } = props;
  return (
    <div>
      <span style={itemProps.packed ? { textDecoration: 'line-through' } : {}}>
        {itemProps.quantity} {itemProps.description}{' '}
        <button>{itemProps.packed ? `✅` : `❌`}</button>
      </span>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <h4>You have X items on your list</h4>
    </footer>
  );
}

export default App;
