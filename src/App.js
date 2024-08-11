import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
    setItems([...items, newItem]);
  }

  function handleDeleteItems(id) {
    setItems((items) =>
      items.filter((item) => {
        const { id: itemId } = item;
        if (id == itemId) return false;
        return true;
      })
    );
  }

  function packedItems(id) {
    setItems((items) =>
      items.map((item) => {
        if (id == item.id) {
          return {
            ...item,
            packed: true,
          };
        }
        return item;
      })
    );
  }

  return (
    <div className="App">
      <Form updateItems={handleAddItems} />
      <PackagingList
        items={items}
        deletingItems={handleDeleteItems}
        packItems={packedItems}
      />
      <Stats />
    </div>
  );
}

function Form({ updateItems }) {
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

function PackagingList(props) {
  const { items, deletingItems, packItems } = props;
  return (
    <div className="list">
      {items.map((item) => {
        return (
          <Item
            itemProps={item}
            key={item.id}
            handleDeleteItems={deletingItems}
            packItems={packItems}
          />
        );
      })}
    </div>
  );
}

function Item(props) {
  const { itemProps, handleDeleteItems, packItems } = props;
  return (
    <div>
      <input
        type="checkbox"
        value={itemProps.packed}
        onClick={() => packItems(itemProps.id)}
      />
      <span style={itemProps.packed ? { textDecoration: 'line-through' } : {}}>
        {itemProps.quantity} {itemProps.description}{' '}
        <button onClick={() => handleDeleteItems(itemProps.id)}>
          {itemProps.packed ? `✅` : `❌`}
        </button>
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
