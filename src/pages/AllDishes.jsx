import DishList from '../components/DishList';
import '../pages/AllDishes.css';

export default function AllDishes() {
  return (
    <>
      <div>AllDishes Page</div>
      <div className="alldishes-main">
        <DishList />
      </div>
    </>
  );
}
