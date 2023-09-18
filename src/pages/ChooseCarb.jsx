import { useEffect, useState } from 'react';
import DishDetailsCard from '../components/DishDetailsCard';
import { selectRandomDish } from '../utils/selectRandomDish';
import NoDishAlertModal from '../components/NoDishAlertModal';

export default function ChooseCarb({
  allDishes,
  selectedDish,
  setSelectedDish,
  isDishSelected,
  setIsDishSelected,
}) {
  const [isVeggie, setIsVeggie] = useState(false);
  const [noDishAlert, setNoDishAlert] = useState(false);
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
      setNoDishAlert(true);
    }
  };

  return (
    <>
      {noDishAlert ? (
        <NoDishAlertModal setNoDishAlert={setNoDishAlert} />
      ) : null}
      <div>
        <menu className="carb-menu-btn-container">
          {carbChoices.map((carb) => {
            return (
              <button className="carb-btn" key={carb} onClick={handleClick}>
                {carb}
              </button>
            );
          })}
        </menu>
      </div>
      <div>
        <form className="veggie-selector-form">
          <label htmlFor="veggie-option">Vegetarian Only: </label>
          <input
            type="checkbox"
            id="veggie-option"
            name="veggie"
            value={isVeggie}
            onChange={() => setIsVeggie(() => !isVeggie)}
          />
        </form>
      </div>
      <article className="dish-details">
        {isDishSelected ? (
          <DishDetailsCard selectedDish={selectedDish} />
        ) : (
          <div>
            <p
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20%',
                fontWeight: '700',
              }}
            >
              Awaiting deliciousness...
            </p>
            <div>
              <img
                src="./loading.gif"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0 auto',
                  paddingTop: '10%',
                  width: '3rem',
                }}
              />
            </div>
          </div>
        )}
      </article>
    </>
  );
}
