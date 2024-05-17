import React, { useState } from 'react';
import './BankForm.css'; // Import your CSS file for styling

const BankForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    pan: '',
    dob: '',
    tel: '',
    pin: '',
  });

  const [showPinWarning, setShowPinWarning] = useState(false); // State variable for showing the pin code warning
  const [showPanWarning, setShowPanWarning] = useState(false); // State variable for showing the PAN number warning
  const [showTelWarning, setShowTelWarning] = useState(false); // State variable for showing the telephone number warning

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Show warning if pin code length exceeds 6 characters
    if (name === 'pin' && value.length > 6) {
      setShowPinWarning(true);
    } else {
      setShowPinWarning(false);
    }

    // Show warning if PAN number length exceeds 10 characters
    if (name === 'pan' && value.length > 10) {
      setShowPanWarning(true);
    } else {
      setShowPanWarning(false);
    }

    // Show warning if telephone number length exceeds 10 characters
    if (name === 'tel' && value.length > 10) {
      setShowTelWarning(true);
    } else {
      setShowTelWarning(false);
    }

    // Update form data
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    const { firstName, pan, dob, tel, pin } = formData;
    if (firstName && pan && dob && tel && pin) {
      // Trigger onSubmit callback with form data
      onSubmit(formData);
      // Clear form data
      setFormData({
        firstName: '',
        pan: '',
        dob: '',
        tel: '',
        pin: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bank-form">
      <div className="form-group">
        <label htmlFor="firstName">Customer Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="form-control"
          required // Make customer name mandatory
        />
      </div>
      <div className="form-group">
        <label htmlFor="pan">PAN:</label>
        <input
          type="password"
          id="pan"
          name="pan"
          value={formData.pan}
          onChange={handleChange}
          className="form-control"
          maxLength={10} // Restricting PAN number length to 10 characters
          required // Make PAN number mandatory
        />
        {showPanWarning && <p className="warning">PAN number should be 10 characters or less</p>} {/* Conditional rendering of warning */}
      </div>
      <div className="form-group">
        <label htmlFor="dob">Date Of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="form-control"
          required // Make date of birth mandatory
        />
      </div>
      <div className="form-group">
        <label htmlFor="tel">Telephone No.:</label>
        <input
          type="tel"
          id="tel"
          name="tel"
          value={formData.tel}
          onChange={handleChange}
          className="form-control"
          maxLength={10} // Restricting telephone number length to 10 characters
          required // Make telephone number mandatory
        />
        {showTelWarning && <p className="warning">Telephone number should be 10 characters or less</p>} {/* Conditional rendering of warning */}
      </div>
      <div className="form-group">
        <label htmlFor="pin">PinCode:</label>
        <input
          type="number"
          id="pin"
          name="pin"
          value={formData.pin}
          onChange={handleChange}
          className="form-control"
          maxLength={6} // Restricting pin code length to 6 characters
          required // Make pin code mandatory
        />
        {showPinWarning && <p className="warning">Pin code should be 6 characters or less</p>} {/* Conditional rendering of warning */}
      </div>
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default BankForm;
