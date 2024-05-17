// CustomerDetails.jsx

import React from 'react';
import './CustomerDetails.css'; // Import your CSS file for styling

const CustomerDetails = ({ data }) => {
  return (
    <div className="customer-details">
      <h2>Customer Details</h2>
      {data ? (
        <div className="customer-info">
          <p><strong>Customer Name:</strong> {data.firstName}</p>
          <p><strong>PAN:</strong> {data.pan}</p>
          <p><strong>Date Of Birth:</strong> {data.dob}</p>
          <p><strong>Telephone No.:</strong> {data.tel}</p>
          <p><strong>PinCode:</strong> {data.pin}</p>
        </div>
      ) : (
        <p>No customer data available.</p>
      )}
    </div>
  );
};

export default CustomerDetails;
