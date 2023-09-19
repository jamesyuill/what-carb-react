import { useState } from 'react';

export default function DishDetailsCard({ selectedDish }) {
  let imgSrc = '';

  switch (selectedDish.carbType) {
    case 'Pasta':
      imgSrc = 'pasta.jpg';
      break;
    case 'Rice':
      imgSrc = 'rice.jpg';
      break;
    case 'Noodles':
      imgSrc = 'noodles.jpg';
      break;
    case 'Cous Cous':
      imgSrc = 'couscous.jpg';
      break;
    case 'Potato':
      imgSrc = 'potato.jpg';
      break;
    case 'Tortilla':
      imgSrc = 'tortilla.jpg';
      break;
  }

  return (
    <div className="dish-details-card">
      <div className="dish-title">{selectedDish.title}</div>
      <div className="dish-image">
        <img src={`/images/${imgSrc}`} />
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
