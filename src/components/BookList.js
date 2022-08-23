import { useSelector } from 'react-redux/es/exports';
import Book from './Book';

const BookList = () => {
  // Get the list of books from the state
  const booksList = useSelector((state) => state.books.value);
  return (
    <div>
      {booksList.map((data) => (
        <Book key={data.id} title={data.title} author={data.author} />
      ))}
    </div>
  );
};

export default BookList;
