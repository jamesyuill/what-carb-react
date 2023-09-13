import { useEffect, useState } from 'react';
import DishDetailsCard from '../components/DishDetailsCard';
import { selectRandomDish } from '../utils/selectRandomDish';

export default function ChooseCarb({ allDishes }) {
  const [selectedDish, setSelectedDish] = useState({});
  const [isDishSelected, setIsDishSelected] = useState(false);
  const [isVeggie, setIsVeggie] = useState(false);

  const [carbChoices, setCarbChoices] = useState([
    'Pasta',
    'Rice',
    'Noodles',
    'Cous Cous',
    'Potato',
    'Tortilla',
  ]);

  const handleClick = (e) => {
    const carbType = e.target.textContent;
    const chosenDish = selectRandomDish(allDishes, carbType, isVeggie);
    if (chosenDish) {
      setSelectedDish(chosenDish);
      setIsDishSelected(true);
    } else {
      alert('There are no dishes that match those requirements');
    }
  };

  return (
    <>
      <menu>
        {carbChoices.map((carb) => {
          return (
            <button key={carb} onClick={handleClick}>
              {carb}
            </button>
          );
        })}
      </menu>
      <form>
        <label htmlFor="veggie-option">Vegetarian Only: </label>
        <input
          type="checkbox"
          id="veggie-option"
          name="veggie"
          value={isVeggie}
          onChange={() => setIsVeggie(() => !isVeggie)}
        />
      </form>

      {isDishSelected ? (
        <DishDetailsCard selectedDish={selectedDish} />
      ) : (
        <p>awaiting deliciousness</p>
      )}
    </>
  );
}
