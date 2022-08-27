import { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux/es/exports';
import { FetchedBooks } from '../redux/books/books';
import Book from './Book';
import styles from '../styles/BookList.module.css';

const BookList = () => {
  // Get the list of books from the state
  const booksList = useSelector((state) => state.books.books, shallowEqual);
  // Dispatch the action to get the books from the API
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchedBooks());
  }, []);
  return (
    <div className={styles.List}>
      {booksList.map((book) => (
        <Book
          key={book.item_id}
          book={book}
        />
      ))}
    </div>
  );
};

export default BookList;
