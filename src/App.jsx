import Content from './components/Content';
import Header from './components/Header';
import '../src/App.css';
import { getAllDishes } from './utils/api';
import { useEffect, useState } from 'react';

function App() {
  const [allDishes, setAllDishes] = useState([]);
  // grab all the dishes - pop them in  state

  useEffect(() => {
    getAllDishes().then(({ allDishes }) => {
      setAllDishes(allDishes);
    });
  }, []);

  return (
    <div className="main">
      <Header />
      <Content allDishes={allDishes} />
    </div>
  );
}

export default App;
