import { Link } from 'react-router-dom';

const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        {items.map((item) => (
          <Link key={item.id} to={`/details/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
