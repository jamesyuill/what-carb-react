export default function DishDetailsCard({ selectedDish }) {
  return (
    <div className="dish-details-card">
      <div className="dish-title">{selectedDish.title}</div>
      <div className="dish-image">
        <img src="/images/pesto-pasta.jpg" />
      </div>
      <div className="dish-ingredients">
        Ingredients:
        <ul>
          {selectedDish.ingredients.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>

      <div className="dish-footer">
        <div className="dish-carbType">{selectedDish.carbType}</div>
        {selectedDish.vegetarian ? (
          <p className="dish-veggie-marker">Veggie</p>
        ) : null}
      </div>
    </div>
  );
}
