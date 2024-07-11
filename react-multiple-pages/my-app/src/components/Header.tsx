import { Link, Outlet } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </header>
  );
}

export default Header;
