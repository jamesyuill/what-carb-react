import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="hamburger-nav">
      <Link to={'/'}>Home</Link>
      <Link to={'/dishes'}>All Dishes</Link>
      <Link to={'/chooseCarb'}>Choose Carb</Link>
    </nav>
  );
}
