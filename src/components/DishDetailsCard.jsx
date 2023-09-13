export default function DishDetailsCard({ selectedDish }) {
  return (
    <div className="dish-details-card">
      <div className="dish-title">{selectedDish.title}</div>
      <div className="dish-image"></div>
      <div className="dish-carbType">{selectedDish.carbType}</div>
      <div className="dish-ingredients"></div>
      <div className="dish-veggie-marker"></div>
    </div>
  );
}
