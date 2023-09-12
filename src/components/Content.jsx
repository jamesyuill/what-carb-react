import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import '../components/Content.css';
import AllDishes from '../pages/AllDishes';

export default function Content() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dishes" element={<AllDishes />} />
      </Routes>
    </main>
  );
}
