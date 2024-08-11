import { useState } from 'react';
import { Item } from './Item';

export function PackagingList(props) {
  const { items, deletingItems, packItems, clearItems } = props;
  const [sortBy, setSortBy] = useState('input');
  let sortedItems;
  if (sortBy === 'input') {
    sortedItems = items;
  }
  if (sortBy === 'description') {
    sortedItems = items.slice().sort((item1, item2) => {
      const d1 = item1.description;
      const d2 = item2.description;
      return d1.localeCompare(d2);
    });
  }

  if (sortBy === 'packed') {
    sortedItems = items.slice().sort((item1, item2) => {
      const d1 = item1.packed;
      const d2 = item2.packed;
      return Number(d1) - Number(d2);
    });
  }

  function handlClearList() {
    const confirmDelete = window.confirm(
      'Are you sure you want to clear the list?'
    );

    if (confirmDelete) {
      clearItems();
    }
  }

  return (
    <>
      <div className="list">
        {sortedItems.map((item) => {
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
      <div className="sort">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value={'input'}>Sort by input</option>
          <option value={'description'}>Sort by description</option>
          <option value={'packed'}>Sort by packed status</option>
        </select>
      </div>
      <div>
        <button onClick={() => handlClearList()}>Clear list</button>
      </div>
    </>
  );
}
