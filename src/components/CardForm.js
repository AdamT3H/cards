import React, { useState, useEffect } from 'react';
import './style/CardForm.css';

function CardForm({ setCardDetails }) {
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [cardNumber, expiryMonth, expiryYear, cvc]);

  const validateForm = () => {
    const cardNumberValid = cardNumber.length === 16;
    const monthValid = expiryMonth.length === 2 && Number(expiryMonth) > 0 && Number(expiryMonth) <= 12;
    const yearValid = expiryYear.length === 2;
    const cvcValid = cvc.length === 3;

    setIsFormValid(cardNumberValid && monthValid && yearValid && cvcValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (isFormValid) {
      setCardDetails({ cardholderName, cardNumber, expiryMonth, expiryYear, cvc });
    }
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 16) value = value.slice(0, 16);
    setCardNumber(value);
  };

  const handleExpiryMonthChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) value = value.slice(0, 2);
    setExpiryMonth(value);
  };

  const handleExpiryYearChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 2) value = value.slice(0, 2);
    setExpiryYear(value);
  };

  const handleCvcChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 3) value = value.slice(0, 3);
    setCvc(value);
  };

  return (
    <div className='container'>
      <div className='form'>
        <form className="card-form" onSubmit={handleSubmit}>
          <label className="name-for-cardholder">Cardholder Name</label>
          <input
            type="text"
            id="cardholderName"
            className="input-for-name"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            placeholder="e.g. Jane Appleseed"
            required
          />

          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            className='input-for-card-number'
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength="16"
            required
          />

          <div className='container-for-date-and-CVC'>
            <div className="container-for-date">
              <label>Exp. Date (MM/YY)</label>
              <div className="container-for-month-day">
                <input
                  type="text"
                  id="expiryMonth"
                  className='input-for-date'
                  value={expiryMonth}
                  onChange={handleExpiryMonthChange}
                  placeholder="MM"
                  maxLength="2"
                  required
                />
                <input
                  type="text"
                  id="expiryYear"
                  className='input-for-date'
                  value={expiryYear}
                  onChange={handleExpiryYearChange}
                  placeholder="YY"
                  maxLength="2"
                  required
                />
              </div>
            </div>

            <div className="container-for-CVC">
              <label htmlFor="cvc">CVC</label>
              <input
                type="text"
                id="cvc"
                className='input-for-CVC'
                value={cvc}
                onChange={handleCvcChange}
                placeholder="e.g. 123"
                maxLength="3"
                required
              />
            </div>
          </div>

          <button type="submit" className='confirm-button' disabled={!isFormValid}>
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default CardForm;
