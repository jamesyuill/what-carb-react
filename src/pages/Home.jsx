import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Link className="link" to="/chooseCarb">
        <div className="choose-carb-div">
          <h1>
            Pick a carb...
            <br />
            any carb!
          </h1>
        </div>
      </Link>

      <div className="random-choice-div">
        <h2>Have you thought about...</h2>

        <h3>Well don't even think about it!</h3>

        <p>Just get a random suggestion</p>
      </div>
      <Link className="link" to="/dishes">
        <div className="browse-dishes-div">
          <p>Browse and edit dishes</p>
        </div>
      </Link>
    </>
  );
}
