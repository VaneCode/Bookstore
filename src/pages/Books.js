import AddBookFrm from '../components/AddBookFrm';
import BookList from '../components/BookList';
import styles from '../styles/MainSection.module.css';

const Books = () => (
  <div className={styles.MainContainer}>
    <BookList />
    <AddBookFrm />
  </div>
);
export default Books;
