import React from 'react';
import DishCard from './DishCard';

export default function DishList({
  allDishes,
  setAllDishes,
  setSelectedDish,
  setIsDishSelected,
  showUpdate,
  setShowUpdate,
  dishToUpdate,
  setDishToUpdate,
  deleteSuccess,
  setDeleteSuccess,
}) {
  return (
    <div className="dishlist-div">
      {allDishes.map((dish) => {
        return (
          <DishCard
            allDishes={allDishes}
            setAllDishes={setAllDishes}
            dish={dish}
            key={dish._id}
            setSelectedDish={setSelectedDish}
            setIsDishSelected={setIsDishSelected}
            showUpdate={showUpdate}
            setShowUpdate={setShowUpdate}
            dishToUpdate={dishToUpdate}
            setDishToUpdate={setDishToUpdate}
            deleteSuccess={deleteSuccess}
            setDeleteSuccess={setDeleteSuccess}
          />
        );
      })}
    </div>
  );
}
