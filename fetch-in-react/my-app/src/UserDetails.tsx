import React, { useEffect, useState } from 'react';

interface UserDetailsProps {
  userId: number;
  onCancel: () => void;
}

interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

export const UserDetails: React.FC<UserDetailsProps> = ({
  userId,
  onCancel,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }
        const data = (await response.json()) as User;
        setUser(data);
      } catch (error) {
        setError((error as Error).message);
      }
    }

    fetchUser();
  }, [userId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-details">
      <button className="close-button" onClick={onCancel}>
        Close
      </button>
      <h1>{user.name}</h1>
      <p>{user.company.name}</p>
      <p>
        Contact: <a href={`mailto:${user.email}`}>{user.email}</a>
      </p>
    </div>
  );
};
