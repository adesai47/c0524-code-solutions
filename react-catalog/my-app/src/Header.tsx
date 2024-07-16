import { Link, Outlet } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <nav>
        <Link to="/" className="mr-4">
          Catalog
        </Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </header>
  );
}

export default Header;
