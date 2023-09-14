import { Link } from 'react-router-dom';
import { IoMenuOutline } from 'react-icons/io5';
import { useRef, useState } from 'react';
import useClickOutside from './useClickOutside';
import { AiOutlineClose } from 'react-icons/ai';

export default function Nav() {
  const [showMenu, setShowmenu] = useState(false);
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => setShowmenu(false));

  const closeIcon = (
    <AiOutlineClose size={40} onClick={() => setShowmenu(!showMenu)} />
  );

  const openIcon = (
    <IoMenuOutline size={40} onClick={() => setShowmenu(!showMenu)} />
  );

  return (
    <>
      <div>{showMenu ? closeIcon : openIcon}</div>
      {showMenu ? (
        <div className="background-fade">
          <nav ref={menuRef} className="hamburger-nav">
            <Link to={'/'} onClick={() => setShowmenu(false)}>
              Home
            </Link>
            <Link to={'/dishes'} onClick={() => setShowmenu(false)}>
              All Dishes
            </Link>
            <Link to={'/chooseCarb'} onClick={() => setShowmenu(false)}>
              Choose Carb
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
