interface ItemsProps {
  items: string[];
}

function Items({ items }: ItemsProps) {
  if (items.length === 0) {
    return <div>No matching items found.</div>;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default Items;
