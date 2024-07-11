import { useParams, Link } from 'react-router-dom';

function Details() {
  const { itemId } = useParams<{ itemId: string }>();

  return (
    <div>
      <h1>Details for Item {itemId}</h1>
      <Link to="/">Back to Dashboard</Link>
    </div>
  );
}

export default Details;
