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
          <button className="add-dish-btn" onClick={handleClick}>
            Add dish
          </button>
          {showForm ? (
            <NewDishForm
              setAllDishes={setAllDishes}
              showForm={showForm}
              setShowForm={setShowForm}
            />
          ) : null}
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
