import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import '../components/Content.css';

export default function Content() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}
