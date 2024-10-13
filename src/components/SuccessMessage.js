// src/components/SuccessMessage.js
import React from 'react';
import './style/SuccessMessage.css';

function SuccessMessage() {
  return (
    <div className='container'>
        <div className="success-checkmark">
            {/* Галочка або іконка */}
        </div>
        <p>You saved your information</p>
    </div>
  );
}

export default SuccessMessage;
