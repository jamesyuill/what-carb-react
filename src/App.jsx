import Content from './components/Content';
import Header from './components/Header';
import '../src/App.css';
import { getAllDishes } from './utils/api';
import { useEffect, useState } from 'react';
import background from '../public/images/spaghetti.jpg';

function App() {
  const [allDishes, setAllDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllDishes().then(({ allDishes }) => {
      setAllDishes(allDishes);
      setIsLoading(false);
    });
  }, []);

  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Header />
      <Content
        allDishes={allDishes}
        setAllDishes={setAllDishes}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
