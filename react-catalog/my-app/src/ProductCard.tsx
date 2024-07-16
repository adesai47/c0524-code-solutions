// src/components/ProductCard.tsx
import { Link } from 'react-router-dom';
import { Item, toDollars } from './lib/read';

function ProductCard({ item }: { item: Item }) {
  return (
    <div className="border p-4">
      <Link to={`/details/${item.itemId}`}>
        <img
          src={`/images/${item.image}`}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        <h2 className="text-xl font-bold">{item.name}</h2>
        <p>{item.shortDescription}</p>
        <p className="font-bold">{toDollars(item.price)}</p>
      </Link>
    </div>
  );
}

export default ProductCard;
