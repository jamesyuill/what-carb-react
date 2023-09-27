import { useState } from 'react';

export default function DishDetailsCard({ selectedDish }) {
  let imgSrc = '';

  switch (selectedDish.carbType) {
    case 'Pasta':
      imgSrc = 'pasta';
      break;
    case 'Rice':
      imgSrc = 'rice';
      break;
    case 'Noodles':
      imgSrc = 'noodles';
      break;
    case 'Cous Cous':
      imgSrc = 'couscous';
      break;
    case 'Potato':
      imgSrc = 'potato';
      break;
    case 'Tortilla':
      imgSrc = 'tortilla';
      break;
  }

  return (
    <div className="dish-details-card">
      <div className="dish-title">{selectedDish.title}</div>
      <div className="dish-image">
        <img src={`/images/${imgSrc}-small.jpg`} />
      </div>
      <div className="dish-ingredients">
        Ingredients:
        <ul>
          {selectedDish.ingredients.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>

      <div className="dish-footer">
        <div className="dish-carbType">{selectedDish.carbType}</div>
        {selectedDish.vegetarian ? (
          <p className="dish-veggie-marker">Veggie</p>
        ) : null}
      </div>
    </div>
  );
}
