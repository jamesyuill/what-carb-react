import { useState } from 'react';
import DishList from '../components/DishList';

import NewDishForm from '../components/NewDishForm';
import EditDishForm from '../components/EditDishForm';
import LoadingModal from '../components/LoadingModal';

export default function AllDishes({
  isLoading,
  allDishes,
  setAllDishes,
  setSelectedDish,
  setIsDishSelected,
}) {
  const [showForm, setShowForm] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [dishToUpdate, setDishToUpdate] = useState({});

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div className="alldishes-main">
        <div className="toggle-form">
          <button className="addDishbtn" onClick={handleClick}>
            Add Dish
          </button>
          {showForm ? (
            <NewDishForm
              setAllDishes={setAllDishes}
              showForm={showForm}
              setShowForm={setShowForm}
            />
          ) : null}
          {showUpdate ? (
            <EditDishForm
              allDishes={allDishes}
              setShowUpdate={setShowUpdate}
              dishToUpdate={dishToUpdate}
              setDishToUpdate={setDishToUpdate}
            />
          ) : null}
        </div>
        <DishList
          allDishes={allDishes}
          setAllDishes={setAllDishes}
          setSelectedDish={setSelectedDish}
          setIsDishSelected={setIsDishSelected}
          showUpdate={showUpdate}
          setShowUpdate={setShowUpdate}
          dishToUpdate={dishToUpdate}
          setDishToUpdate={setDishToUpdate}
        />
      </div>
      {isLoading && <LoadingModal />}
    </>
  );
}
