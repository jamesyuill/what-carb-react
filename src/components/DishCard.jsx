import React from 'react';
import { deleteDishById } from '../utils/api';
import { Link, useNavigate } from 'react-router-dom';

export default function DishCard({
  allDishes,
  setAllDishes,
  dish,
  setSelectedDish,
  setIsDishSelected,
  showUpdate,
  setShowUpdate,
  dishToUpdate,
  setDishToUpdate,
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
    setSelectedDish(chosenDish[0]);
    setIsDishSelected(true);
    navigate('/chooseCarb');
  };

  const handleEditClick = (id) => {
    const chosenDish = allDishes.filter((item) => item._id === id);

    setDishToUpdate(chosenDish[0]);
    setShowUpdate(true);
  };

  return (
    <div className="dishcard">
      <a className="link" onClick={() => handleClick(dish._id)}>
        <div className="dish-info">
          <h4>{dish.title}</h4>
          <p>carb type: {dish.carbType}</p>
        </div>
      </a>
      <div className="edit-btns">
        <button onClick={() => handleEditClick(dish._id)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
