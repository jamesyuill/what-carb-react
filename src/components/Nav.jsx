import { Link } from 'react-router-dom';
import '../components/Nav.css';

export default function Nav() {
  return (
    <nav className="hamburger-nav">
      <Link to={'/'}>Home</Link>
      <Link to={'/dishes'}>All Dishes</Link>
    </nav>
  );
}
