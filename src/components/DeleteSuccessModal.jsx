import React from 'react';

export default function DeleteSuccessModal({ setDeleteSuccess }) {
  return (
    <div className="form-wrapper" onClick={() => setDeleteSuccess(false)}>
      <div className="no-dish-alert">
        <div className="no-dish-message">
          <p>Dish successfully deleted!</p>
        </div>
      </div>
    </div>
  );
}
