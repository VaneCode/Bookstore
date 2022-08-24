import { useSelector, shallowEqual } from 'react-redux/es/exports';
import Book from './Book';

const BookList = () => {
  // Get the list of books from the state
  const booksList = useSelector((state) => state.books, shallowEqual);
  return (
    <div>
      {booksList.map((data) => (
        <Book key={data.id} id={data.id} title={data.title} author={data.author} />
      ))}
    </div>
  );
};

export default BookList;
