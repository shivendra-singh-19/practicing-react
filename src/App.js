import { useState } from 'react';
import './App.css';
import { Form } from './Form';
import { PackagingList } from './PackagingList';
import { Stats } from './Stats';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
    setItems([...items, newItem]);
  }

  function handleDeleteItems(id) {
    setItems((items) =>
      items.filter((item) => {
        const { id: itemId } = item;
        if (id === itemId) return false;
        return true;
      })
    );
  }

  function packedItems(id) {
    setItems((items) =>
      items.map((item) => {
        if (id === item.id) {
          return {
            ...item,
            packed: true,
          };
        }
        return item;
      })
    );
  }

  function handleClearList() {
    setItems([]);
  }

  return (
    <div className="App">
      <Form updateItems={handleAddItems} />
      <PackagingList
        items={items}
        deletingItems={handleDeleteItems}
        packItems={packedItems}
        clearItems={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
