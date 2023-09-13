import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import '../components/Content.css';
import AllDishes from '../pages/AllDishes';
import ChooseCarb from '../pages/ChooseCarb';

export default function Content({ allDishes }) {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dishes" element={<AllDishes allDishes={allDishes} />} />
        <Route
          path="/chooseCarb"
          element={<ChooseCarb allDishes={allDishes} />}
        />
      </Routes>
    </main>
  );
}
