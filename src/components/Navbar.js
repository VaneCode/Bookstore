import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import user from '../images/user.png';

const Navbar = () => (
  <nav className={styles.NavBar}>
    <div>
      <Link to="/" className={styles.BookstoreCMS}>
        Bookstore CMS
      </Link>
    </div>
    <ul className={styles.navigation}>
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
    <div className={styles.UserIcon}>
      <img src={user} alt="User icon" className={styles.UserIconImg} />
    </div>
  </nav>
);

export default Navbar;
