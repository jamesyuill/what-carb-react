import React from 'react';

export default function DishCard({ dish }) {
  return (
    <div>
      <h3>{dish.title}</h3>
      <p>carb type: {dish.carbType}</p>
    </div>
  );
}
