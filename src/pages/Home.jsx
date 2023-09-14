import { Link, useNavigate } from 'react-router-dom';
import { selectRandomDish } from '../utils/selectRandomDish';

export default function Home({
  allDishes,
  setSelectedDish,
  isDishSelected,
  setIsDishSelected,
}) {
  const navigate = useNavigate();

  const handleRandomClick = (e) => {
    e.preventDefault();
    const randomDish = allDishes[Math.floor(Math.random() * allDishes.length)];
    setSelectedDish(randomDish);
    setIsDishSelected(true);
    navigate('/chooseCarb');
  };

  return (
    <div className="home-page-wrapper">
      <div className="tag">
        <Link className="link" to="/chooseCarb">
          <div className="choose-carb-div">
            <h1>
              Pick a carb...
              <br />
              any carb!
            </h1>
          </div>
        </Link>
      </div>

      <div className="home-page-menu">
        <Link className="link" to="/chooseCarb">
          <div className="random-choice-div">
            <p>Choose! That! Carb!</p>
          </div>
        </Link>
        <Link className="link" onClick={handleRandomClick}>
          <div className="random-choice-div">
            <p>Get a random suggestion</p>
          </div>
        </Link>
        <Link className="link" to="/dishes">
          <div className="browse-dishes-div">
            <p>Browse and edit dishes</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
