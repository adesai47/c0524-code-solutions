// src/pages/NotFound.tsx
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Page Not Found</h1>
      <Link to="/" className="text-blue-500">
        Go back to Catalog
      </Link>
    </div>
  );
}

export default NotFound;
