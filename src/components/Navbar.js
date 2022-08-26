import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  // const closeMenu = () => {
  // setNavbarOpen(false);
  // };
  return (
    <nav className={styles.NavBar}>
      <div>
        <Link to="/" className={styles.BookstoreCMS}>
          Bookstore CMS
        </Link>
      </div>
      <ul className={styles.navigation}>
        <li>
          <button onClick={handleToggle} type="button" className={styles.BurgerIcon}>
            {navbarOpen ? (
              <MdClose
                style={{ color: '#7b7b7b', width: '1rem', height: '1rem' }}
              />
            ) : (
              <FiMenu
                style={{ color: '#7b7b7b', width: '1rem', height: '1rem' }}
              />
            )}
          </button>
        </li>
        <li>
          <ul className={styles.nav}>
            <li>
              <Link to="/" className={styles.navItem}>
                BOOKS
              </Link>
            </li>
            <li>
              <Link to="/categories" className={styles.navItem}>
                CATEGORIES
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
