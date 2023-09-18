import { useState } from 'react';
import DishList from '../components/DishList';

import NewDishForm from '../components/NewDishForm';
import EditDishForm from '../components/EditDishForm';
import LoadingModal from '../components/LoadingModal';
import DeleteSuccessModal from '../components/DeleteSuccessModal';

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
  const [deleteSuccess, setDeleteSuccess] = useState(false);

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
          {deleteSuccess && (
            <DeleteSuccessModal setDeleteSuccess={setDeleteSuccess} />
          )}
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
        {isLoading && <LoadingModal />}
        <DishList
          allDishes={allDishes}
          setAllDishes={setAllDishes}
          setSelectedDish={setSelectedDish}
          setIsDishSelected={setIsDishSelected}
          showUpdate={showUpdate}
          setShowUpdate={setShowUpdate}
          dishToUpdate={dishToUpdate}
          setDishToUpdate={setDishToUpdate}
          deleteSuccess={deleteSuccess}
          setDeleteSuccess={setDeleteSuccess}
        />
      </div>
    </>
  );
}
