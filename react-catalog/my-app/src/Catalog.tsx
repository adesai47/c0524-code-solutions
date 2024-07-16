// src/pages/Catalog.tsx
import { useState, useEffect } from 'react';
import { readCatalog, Item } from './lib/read';
import ProductCard from './ProductCard';

function Catalog() {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    readCatalog()
      .then((result) => {
        if (result) {
          setItems(result);
        } else {
          setError('No items found');
        }
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <ProductCard key={item.itemId} item={item} />
      ))}
    </div>
  );
}

export default Catalog;
