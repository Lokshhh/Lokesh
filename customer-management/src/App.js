// App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [editingCustomer, setEditingCustomer] = useState(null);

  useEffect(() => {
    // Fetch existing data on component mount
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://your-api-endpoint/customers');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addCustomer = async (customer) => {
    try {
      await axios.post('https://your-api-endpoint/customers', customer);
      fetchData();
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };

  const updateCustomer = async (customer) => {
    setEditingCustomer(customer);
  };

  const deleteCustomer = async (customerNumber) => {
    try {
      await axios.delete(`https://your-api-endpoint/customers/${customerNumber}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Customer Management</h1>
      <CustomerForm onSubmit={addCustomer} />
      <CustomerList customers={customers} onUpdate={updateCustomer} onDelete={deleteCustomer} />
    </div>
  );
};

export default App;
