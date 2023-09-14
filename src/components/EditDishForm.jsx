import { useEffect, useState } from 'react';
import { patchDishById } from '../utils/api';
import { AiOutlineClose } from 'react-icons/ai';

export default function EditDishForm({
  allDishes,
  setShowUpdate,
  dishToUpdate,
  setDishToUpdate,
}) {
  const [isVeggie, setIsVeggie] = useState(dishToUpdate.vegetarian);
  const updateDish = (field, value) => {
    setDishToUpdate((curr) => ({ ...curr, [field]: value }));
  };

  const handleIngredients = (str) => {
    const splitArray = str.split(',');
    setDishToUpdate((curr) => ({ ...curr, ['ingredients']: splitArray }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    patchDishById(dishToUpdate).then(({ updatedDish }) => {
      setShowUpdate(false);
      if (updatedDish._id === dishToUpdate._id) {
        console.log('dish successfully updated');
      } else {
        console.log('something went wrong');
      }
    });
  };

  return (
    <div className="update-form-wrapper">
      <div className="update-form-modal">
        <button
          className="close-form-toggle-btn"
          onClick={() => setShowUpdate(false)}
        >
          <AiOutlineClose size={25} />
        </button>
        <form className="update-dish-form" onSubmit={handleSubmit}>
          <div className="form-title">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              value={dishToUpdate.title}
              onChange={(e) => updateDish('title', e.target.value)}
            />
          </div>

          <div className="form-carbtype">
            <label htmlFor="carbType">Carb Type: </label>
            <select
              id="carbType"
              value={dishToUpdate.carbType}
              onChange={(e) => updateDish('carbType', e.target.value)}
            >
              <option value="Pasta">Pasta</option>
              <option value="Rice">Rice</option>
              <option value="Noodles">Noodles</option>
              <option value="Cous Cous">Cous Cous</option>
              <option value="Potato">Potato</option>
              <option value="Tortilla">Tortilla</option>
            </select>
          </div>

          <div>
            <label htmlFor="taginput">
              Ingredients (seperate with a comma):
            </label>
            <textarea
              id="taginput"
              rows="3"
              type="text"
              value={dishToUpdate.ingredients.map((item) => {
                return item === dishToUpdate.ingredients[0]
                  ? `${item}`
                  : ` ${item}`;
              })}
              onChange={(e) => handleIngredients(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="vegetarian">Vegetarian: </label>
            <input
              type="checkbox"
              id="vegetarian"
              checked={isVeggie}
              onChange={() => {
                setIsVeggie(!isVeggie);
                setDishToUpdate((curr) => ({
                  ...curr,
                  ['vegetarian']: isVeggie,
                }));
              }}
            />
          </div>
          <button className="add-dish-btn">Update Dish!</button>
        </form>
      </div>
    </div>
  );
}
