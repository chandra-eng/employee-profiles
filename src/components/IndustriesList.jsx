import React from 'react';
import { Link } from 'react-router-dom';

const industries = [
  { id: 1, name: 'Tech Co' },
  { id: 2, name: 'Finance Corp' },
  { id: 3, name: 'Health Systems' },
];

function IndustriesList() {
  return (
    <div>
      <h2>Industries</h2>
      <ul>
        {industries.map((industry) => (
          <li key={industry.id}>
            <Link to={`/industry/${industry.id}`}>{industry.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IndustriesList;
