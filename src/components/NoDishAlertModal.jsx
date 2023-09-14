import React from 'react';

export default function NoDishAlertModal({ setNoDishAlert }) {
  return (
    <div className="form-wrapper" onClick={() => setNoDishAlert(false)}>
      <div className="no-dish-alert">
        <div className="no-dish-message">
          <p>
            At the moment, there are no dishes that conform to those
            requirements
          </p>
        </div>
      </div>
    </div>
  );
}
