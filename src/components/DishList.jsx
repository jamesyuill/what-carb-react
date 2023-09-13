import React from 'react';
import DishCard from './DishCard';

export default function DishList({
  allDishes,
  setAllDishes,
  setSelectedDish,
  setIsDishSelected,
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
          />
        );
      })}
    </div>
  );
}
