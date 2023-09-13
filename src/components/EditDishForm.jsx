import { useEffect, useState } from 'react';

export default function EditDishForm({
  allDishes,
  setShowUpdate,
  dishToUpdate,
  setDishToUpdate,
}) {
  useEffect(() => {}, []);

  return (
    <div className="update-form-wrapper">
      <div className="update-form-modal">
        <button
          className="update-form-toggle-btn"
          onClick={() => setShowUpdate(false)}
        >
          Close
        </button>
        <form className="update-dish-form">
          <div>
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" value={dishToUpdate.title} />
          </div>

          <div>
            <label htmlFor="carbType">Carb Type: </label>
            <select id="carbType" value={dishToUpdate.carbType}>
              <option value="Pasta">Pasta</option>
              <option value="Rice">Rice</option>
              <option value="Noodles">Noodles</option>
              <option value="Cous Cous">Cous Cous</option>
              <option value="Potato">Potato</option>
              <option value="Tortilla">Tortilla</option>
            </select>
          </div>

          <div>
            <label htmlFor="vegetarian">Vegetarian: </label>
            <input
              type="checkbox"
              id="vegetarian"
              value={dishToUpdate.vegetarian}
            />
          </div>

          <div>
            <label htmlFor="taginput">
              Ingredients (seperate with a comma):
            </label>
            <textarea
              id="taginput"
              cols="40"
              rows="5"
              type="text"
              value={dishToUpdate.ingredients}
            />
          </div>
          <button className="add-dish-btn">Update Dish!</button>
        </form>
      </div>
    </div>
  );
}
