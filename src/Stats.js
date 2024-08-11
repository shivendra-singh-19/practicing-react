export function Stats({ items }) {
  const numItems = items.length;
  return (
    <footer className="stats">
      <h4>You have {numItems} items on your list</h4>
    </footer>
  );
}
