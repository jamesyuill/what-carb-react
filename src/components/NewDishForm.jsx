import { useEffect, useState } from 'react';
import '../components/NewDishForm.css';

export default function NewDishForm() {
  const [ingredients, setIngredients] = useState([]);
  const [isVeggie, setIsVeggie] = useState(false);
  const [newDish, setNewDish] = useState({
    title: '',
    carbType: 'Pasta',
    vegetarian: false,
    ingredients: ingredients,
  });

  const handleChange = (e) => {
    const rawInput = e.target.value;
    const ingredientArr = rawInput.split(',');
    setIngredients(ingredientArr);
  };

  const updateNewDish = (field, value) => {
    setNewDish((curr) => ({ ...curr, [field]: value }));
  };

  const handleSubmit = () => {};

  return (
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
          Enter the Ingredients, seperate with a comma:
        </label>
        <input
          id="taginput"
          type="text"
          placeholder="Enter Ingredient"
          onChange={handleChange}
        />
      </div>
      <button>Add Dish!</button>
    </form>
  );
}
