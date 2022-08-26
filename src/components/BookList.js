import { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux/es/exports';
import { FetchedBooks } from '../redux/books/books';
import Book from './Book';

const BookList = () => {
  // Get the list of books from the state
  const booksList = useSelector((state) => state.books.books, shallowEqual);
  // Dispatch the action to get the books from the API
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchedBooks());
  }, []);
  return (
    <div>
      {booksList.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
    </div>
  );
};

export default BookList;
