import React from 'react';
import { deleteDishById } from '../utils/api';
import { Link, useNavigate } from 'react-router-dom';

export default function DishCard({
  allDishes,
  setAllDishes,
  dish,
  setSelectedDish,
  setIsDishSelected,
}) {
  const navigate = useNavigate();
  const handleDelete = (e) => {
    e.preventDefault();
    setAllDishes((curr) => {
      return curr.filter((item) => item._id !== dish._id);
    });
    deleteDishById(dish._id).then(({ deletedDish }) => {
      if (deletedDish.title) {
        console.log(`you've successfully deleted something`);
      } else {
        console.log(`Not sure that worked mate`);
      }
    });
  };

  const handleClick = (id) => {
    const chosenDish = allDishes.filter((item) => item._id === id);
    setSelectedDish(chosenDish);
    setIsDishSelected(true);
    console.log(chosenDish);
    navigate('/chooseCarb');
  };

  return (
    <a className="link" onClick={() => handleClick(dish._id)}>
      <div className="dishcard">
        <div className="dish-info">
          <h4>{dish.title}</h4>
          <p>carb type: {dish.carbType}</p>
        </div>
        <div className="edit-btns">
          <button>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </a>
  );
}
