import React, { useState } from 'react';
import CardPreview from './components/CardPreview';
import CardForm from './components/CardForm';
import SuccessMessage from './components/SuccessMessage';
import './index.css';

function App() {
  const [cardDetails, setCardDetails] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCardDetailsSubmit = (details) => {
    setCardDetails(details);
    setFormSubmitted(true);
  };

  return (
    <main className="container">
      <CardPreview {...(cardDetails || {})} /> {}
      
      {formSubmitted ? (
        <SuccessMessage /> 
      ) : (
        <CardForm setCardDetails={handleCardDetailsSubmit} /> 
      )}
    </main>
  );
}

export default App;
