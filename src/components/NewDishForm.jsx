import { useEffect, useState } from 'react';
import { postNewDish } from '../utils/api';

export default function NewDishForm({ setAllDishes, showForm, setShowForm }) {
  const [ingredients, setIngredients] = useState([]);
  const [isVeggie, setIsVeggie] = useState(false);
  const [newDish, setNewDish] = useState({
    title: '',
    carbType: 'Pasta',
    vegetarian: false,
    ingredients: [],
  });

  const handleChange = (e) => {
    const rawInput = e.target.value;
    const ingredientArr = rawInput.split(',');
    setIngredients(ingredientArr);
  };

  const updateNewDish = (field, value) => {
    setNewDish((curr) => ({ ...curr, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newDish.title === '') {
      alert('You need to have a valid title');
    } else if (ingredients.length === 0) {
      alert('you need to have at least one ingredient, lazy bones!');
    } else {
      setAllDishes((curr) => {
        let tempObj = { ...newDish };
        tempObj._id = Math.random();
        return [tempObj, ...curr];
      });
      postNewDish(newDish).then(({ addedDish }) => {
        if (addedDish.title) {
          console.log('dish added successfully');
        } else {
          console.log('dish not added');
        }
      });
    }
  };

  useEffect(() => {
    setNewDish((curr) => ({
      ...curr,
      vegetarian: isVeggie,
      ingredients: ingredients,
    }));
  }, [isVeggie, ingredients]);

  return (
    <div className="form-wrapper">
      <div className="form-modal">
        <button className="form-toggle-btn" onClick={() => setShowForm(false)}>
          Close
        </button>
        <form className="newdish-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              placeholder="Dish title"
              value={newDish.title}
              onChange={(e) => updateNewDish('title', e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="carbType">Carb Type: </label>
            <select
              id="carbType"
              onChange={(e) => updateNewDish('carbType', e.target.value)}
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
            <label htmlFor="vegetarian">Vegetarian: </label>
            <input
              type="checkbox"
              id="vegetarian"
              value={isVeggie}
              onChange={() => {
                setIsVeggie(!isVeggie);
                setNewDish((curr) => ({ ...curr, ['vegetarian']: isVeggie }));
              }}
            />
          </div>

          <div>
            <label htmlFor="taginput">
              Ingredients (seperate with a comma):
            </label>
            <input
              id="taginput"
              type="text"
              placeholder="Enter Ingredient"
              onChange={handleChange}
            />
          </div>
          <button className="add-dish-btn">Add Dish!</button>
        </form>
      </div>
    </div>
  );
}
