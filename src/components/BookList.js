import { useSelector, shallowEqual } from 'react-redux/es/exports';
import Book from './Book';

const BookList = () => {
  // Get the list of books from the state
  const booksList = Array.from(useSelector((state) => state.books, shallowEqual));
  console.log(`list of books${booksList}`);
  return (
    <div>
      {booksList.map((data) => (
        <Book key={data.id} id={data.id} title={data.title} author={data.author} />
      ))}
    </div>
  );
};

export default BookList;
