import React from 'react';
import { Link, useParams } from 'react-router-dom';

const industries = [
  { id: 1, name: 'Tech Co' },
  { id: 2, name: 'Finance Corp' },
  { id: 3, name: 'Health Systems' },
];

const employees = [
  { id: 1, name: 'John Doe', industryId: 1, allocatedMoney: 5000, cardNumber: '**** **** **** 1234' },
  { id: 2, name: 'Jane Smith', industryId: 1, allocatedMoney: 6000, cardNumber: '**** **** **** 5678' },
  { id: 3, name: 'Bob Johnson', industryId: 2, allocatedMoney: 5500, cardNumber: '**** **** **** 9012' },
  { id: 4, name: 'Alice Brown', industryId: 3, allocatedMoney: 4500, cardNumber: '**** **** **** 3456' },
];

function EmployeesList() {
  const { id } = useParams();
  const industryEmployees = employees.filter((employee) => employee.industryId === parseInt(id));

  return (
    <div>
      <h2>Employees in {industries.find((i) => i.id === parseInt(id)).name}</h2>
      <ul>
        {industryEmployees.map((employee) => (
          <li key={employee.id}>
            <Link to={`/employee/${employee.id}`}>{employee.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Back to Industries</Link>
    </div>
  );
}

export default EmployeesList;
