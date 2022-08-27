import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import CircularProgress from '@mui/material/CircularProgress';
import { RemoveBook } from '../redux/books/books';
import styles from '../styles/Book.module.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  const RemoveHandler = () => {
    dispatch(RemoveBook(book.item_id));
  };

  return (
    <div className={styles.BookContainer}>
      <div className={styles.BookDetails}>
        <span className={styles.Category}>{book.category}</span>
        <h2 className={styles.Title}>{book.title}</h2>
        <h3 className={styles.Author}>{book.author}</h3>
        <div className={styles.BookButtons}>
          <button type="button">Comments</button>
          <button type="button" onClick={RemoveHandler}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className={styles.ProgressPercentage}>
        <div id="Circle">
          <CircularProgress variant="determinate" value={book.progress} />
        </div>
        <div className={styles.ProgressDiv}>
          <span className={styles.PercentCompleted}>
            {book.progress}
            %
          </span>
          <span className={styles.Completed}>Completed</span>
        </div>
      </div>
      <div className={styles.LineBook} />
      <div className={styles.UpdateProgress}>
        <span>Current Chapter</span>
        <h2>
          Chapter
          {book.current_chapter}
        </h2>
        <button type="button">Update progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    item_id: PropTypes.string,
    progress: PropTypes.number,
    current_chapter: PropTypes.number,
  }).isRequired,
};

export default Book;
