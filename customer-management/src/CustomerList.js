import React from 'react';

const CustomerList = ({ customers, onUpdate, onDelete }) => {
  return (
    <ul>
      {customers.map((customer) => (
        <li key={customer.customerNumber}>
          {customer.name} - {customer.customerNumber} - {customer.address} - {customer.meterSerialNumber}
          <button onClick={() => onUpdate(customer)}>Update</button>
          <button onClick={() => onDelete(customer.customerNumber)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default CustomerList;
