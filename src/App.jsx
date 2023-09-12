import Content from './components/Content';
import Header from './components/Header';
import '../src/App.css';

function App() {
  const [allDishes, setAllDishes] = useState([]);
  // grab all the dishes - pop them in  state

  return (
    <div className="main">
      <Header />
      <Content />
    </div>
  );
}

export default App;
