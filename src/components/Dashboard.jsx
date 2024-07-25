import React from 'react';
import { Link } from 'react-router-dom';

const industries = [
  { id: 1, name: 'Tech Co' },
  { id: 2, name: 'Finance Corp' },
  { id: 3, name: 'Health Systems' },
];

function Dashboard({ loggedIn }) {
  return (
    <div>
      <h2>Welcome to the Credit Card Admin Portal</h2>
      {loggedIn ? (
        <div>
          <h3>Industries</h3>
          <ul>
            {industries.map((industry) => (
              <li key={industry.id}>
                <Link to={`/industry/${industry.id}`}>{industry.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Please log in to access the admin portal.</p>
      )}
    </div>
  );
}

export default Dashboard;
