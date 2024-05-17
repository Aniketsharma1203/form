import React, { useState } from 'react';
import './App.css';
import BankForm from './BankForm';
import CustomerDetails from './CustomerDetails'; // Assuming you have this component

const App = () => {
  const [displayComponent, setDisplayComponent] = useState('welcome');
  const [customerData, setCustomerData] = useState(null);

  const handleAddCustomerClick = () => {
    setDisplayComponent('addCustomer');
  };

  const handleViewCustomerClick = () => {
    setDisplayComponent('viewCustomer');
  };

  const handleFormSubmit = (formData) => {
    setCustomerData(formData);
    setDisplayComponent('viewCustomer'); // Switch to the view customer section after form submission
  };

  return (
    <div className='Main'>
      <div className='header'>
        <h3>Home</h3>
        <h3>Careers</h3>
        <h3>About Us</h3>
      </div>

      <div className='section'>
        <div className='click'>
          <h3 onClick={handleAddCustomerClick}>Add Customer</h3>
        </div>
        <div className='click'>
          <h3 onClick={handleViewCustomerClick}>View Customer</h3>
        </div>
      </div>

      {displayComponent === 'addCustomer' && (
        <div className='App'>
          <BankForm onSubmit={handleFormSubmit} />
        </div>
      )}

      {displayComponent === 'viewCustomer' && (
        <div className='App'>
          <CustomerDetails data={customerData} />
        </div>
      )}

      {displayComponent === 'welcome' && (
        <div className='App'>
          <h1>Welcome to the Bank</h1>
          <p>Here, We take care of your money.</p>
        </div>
      )}

    </div>
  );
};

export default App;
