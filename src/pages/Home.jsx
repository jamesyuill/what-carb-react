import '../pages/Home.css';

export default function Home() {
  return (
    <>
      <div className="choose-carb-div">
        <h1>
          Pick a carb...
          <br />
          any carb!
        </h1>
      </div>
      <div className="random-choice-div">
        <h2>Have you thought about...</h2>

        <h3>Well don't even think about it!</h3>

        <p>Just get a random suggestion</p>
      </div>

      <div className="browse-dishes-div">
        <p>Browse and edit dishes</p>
      </div>
    </>
  );
}
