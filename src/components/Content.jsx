import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

import AllDishes from '../pages/AllDishes';
import ChooseCarb from '../pages/ChooseCarb';
import { useState } from 'react';
import LoadingModal from './LoadingModal';

export default function Content({ allDishes, setAllDishes, isLoading }) {
  const [selectedDish, setSelectedDish] = useState({});
  const [isDishSelected, setIsDishSelected] = useState(false);

  return (
    <main className="main-content">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              allDishes={allDishes}
              setSelectedDish={setSelectedDish}
              isDishSelected={isDishSelected}
              setIsDishSelected={setIsDishSelected}
            />
          }
        />
        <Route
          path="/dishes"
          element={
            <AllDishes
              isLoading={isLoading}
              allDishes={allDishes}
              setAllDishes={setAllDishes}
              selectedDish={selectedDish}
              setSelectedDish={setSelectedDish}
              setIsDishSelected={setIsDishSelected}
            />
          }
        />
        <Route
          path="/chooseCarb"
          element={
            <ChooseCarb
              allDishes={allDishes}
              selectedDish={selectedDish}
              setSelectedDish={setSelectedDish}
              isDishSelected={isDishSelected}
              setIsDishSelected={setIsDishSelected}
            />
          }
        />
      </Routes>
    </main>
  );
}
