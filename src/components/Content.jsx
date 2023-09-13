import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

import AllDishes from '../pages/AllDishes';
import ChooseCarb from '../pages/ChooseCarb';
import { useState } from 'react';

export default function Content({ allDishes, setAllDishes }) {
  const [selectedDish, setSelectedDish] = useState({});

  const [isDishSelected, setIsDishSelected] = useState(false);
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dishes"
          element={
            <AllDishes
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
