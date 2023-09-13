import React from 'react';
import DishCard from './DishCard';

export default function DishList({ allDishes }) {
  return (
    <div className="dishlist-div">
      {allDishes.map((dish) => {
        return <DishCard dish={dish} key={dish._id} />;
      })}
    </div>
  );
}
