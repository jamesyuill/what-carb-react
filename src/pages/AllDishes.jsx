import { useState } from 'react';
import DishList from '../components/DishList';

import NewDishForm from '../components/NewDishForm';

export default function AllDishes({
  allDishes,
  setAllDishes,
  setSelectedDish,
  setIsDishSelected,
}) {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div className="alldishes-main">
        <div className="toggle-form">
          <button onClick={handleClick}>
            {showForm ? 'Hide form' : 'Add dish'}
          </button>
          {showForm ? <NewDishForm setAllDishes={setAllDishes} /> : null}
        </div>
        <DishList
          allDishes={allDishes}
          setAllDishes={setAllDishes}
          setSelectedDish={setSelectedDish}
          setIsDishSelected={setIsDishSelected}
        />
      </div>
    </>
  );
}
