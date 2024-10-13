// src/components/CardPreview.js
import React from 'react';
import './style/CardPreview.css';

function CardPreview({ cardholderName, cardNumber, expiryMonth, expiryYear, cvc }) {
  return (
    <div className='container'>
        <div className="card-preview">
        <div className="card-front">
            <div className="bg-card-front">
            <div className="card-number">{cardNumber || '0000 0000 0000 0000'}</div>
            <div className="containerForDateName">
                <div className="card-name">{cardholderName || 'JANE APPLESEED'}</div>
                <div className="containerForDate">
                <div className="card-expiry">{expiryMonth || '00'}</div>
                <div className="card-expiry">/</div>
                <div className="card-expiry">{expiryYear || '00'}</div>
                </div>
            </div>
            </div>
        </div>
        <div className="card-back">
            <div className="bg-card-back">
            <div className="card-CVV">{cvc || '000'}</div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default CardPreview;
