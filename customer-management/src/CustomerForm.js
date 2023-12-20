import React, { useState } from 'react';

const CustomerForm = ({ onSubmit }) => {
  const [customer, setCustomer] = useState({
    name: '',
    address: '',
    customerNumber: '',
    meterSerialNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(customer);
    setCustomer({
      name: '',
      address: '',
      customerNumber: '',
      meterSerialNumber: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={customer.name} onChange={handleChange} />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={customer.address} onChange={handleChange} />
      </label>
      <label>
        Customer Number:
        <input
          type="text"
          name="customerNumber"
          value={customer.customerNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Meter Serial Number:
        <input
          type="text"
          name="meterSerialNumber"
          value={customer.meterSerialNumber}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Customer</button>
    </form>
  );
};

export default CustomerForm;
