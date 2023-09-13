import { useState } from 'react';
import DishList from '../components/DishList';
import '../pages/AllDishes.css';
import NewDishForm from '../components/NewDishForm';

export default function AllDishes({ allDishes }) {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <>
      <div className="alldishes-main">
        {showForm ? (
          <NewDishForm />
        ) : (
          <button onClick={handleClick}>Add dish</button>
        )}
        <DishList allDishes={allDishes} />
      </div>
    </>
  );
}
