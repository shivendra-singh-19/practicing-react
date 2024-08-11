export function Item(props) {
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
