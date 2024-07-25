import React from 'react';
import { Link, useParams } from 'react-router-dom';

const employees = [
  { id: 1, name: 'John Doe', industryId: 1, allocatedMoney: 5000, cardNumber: '**** **** **** 1234' },
  { id: 2, name: 'Jane Smith', industryId: 1, allocatedMoney: 6000, cardNumber: '**** **** **** 5678' },
  { id: 3, name: 'Bob Johnson', industryId: 2, allocatedMoney: 5500, cardNumber: '**** **** **** 9012' },
  { id: 4, name: 'Alice Brown', industryId: 3, allocatedMoney: 4500, cardNumber: '**** **** **** 3456' },
];

const transactions = [
  { id: 1, employeeId: 1, amount: 100, date: '2024-07-20', description: 'Office supplies' },
  { id: 2, employeeId: 1, amount: 50, date: '2024-07-21', description: 'Lunch meeting' },
  { id: 3, employeeId: 2, amount: 200, date: '2024-07-19', description: 'Software subscription' },
  { id: 4, employeeId: 3, amount: 150, date: '2024-07-22', description: 'Travel expenses' },
];

function EmployeeDetails() {
  const { id } = useParams();
  const employee = employees.find((e) => e.id === parseInt(id));
  const employeeTransactions = transactions.filter((t) => t.employeeId === parseInt(id));

  return (
    <div>
      <h2>Employee Details: {employee.name}</h2>
      <p>Allocated Money: ${employee.allocatedMoney}</p>
      <p>Card Number: {employee.cardNumber}</p>
      <h3>Transactions</h3>
      <ul>
        {employeeTransactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.date}: ${transaction.amount} - {transaction.description}
          </li>
        ))}
      </ul>
      <Link to={`/industry/${employee.industryId}`}>Back to Employees List</Link>
    </div>
  );
}

export default EmployeeDetails;
