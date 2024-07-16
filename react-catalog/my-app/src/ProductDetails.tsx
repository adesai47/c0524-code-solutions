// src/pages/ProductDetails.tsx
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { readItem, Item, toDollars } from './lib/read';

function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();
  const [item, setItem] = useState<Item | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      readItem(Number(productId))
        .then((result) => {
          if (result) {
            setItem(result);
          } else {
            setError('Item not found');
          }
        })
        .catch((err) => setError(err.message));
    }
  }, [productId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!item) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    alert('Item added to cart');
    navigate('/');
  };

  return (
    <div className="p-4">
      <img
        src={`/images/${item.image}`}
        alt={item.name}
        className="w-full h-96 object-cover mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
      <p className="text-xl font-bold mb-2">{toDollars(item.price)}</p>
      <p className="mb-4">{item.longDescription}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white p-2 rounded">
        Add to Cart
      </button>
      <Link to="/" className="block mt-4 text-blue-500">
        Back to Catalog
      </Link>
    </div>
  );
}

export default ProductDetails;
