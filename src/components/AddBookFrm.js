// Import
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { v4 as uuidv4 } from 'uuid';
import { AddBook } from '../redux/books/books';

const AddBookFrm = () => {
  const dispatch = useDispatch();
  const AddBookHandler = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const author = e.target.elements.author.value;
    const book = { id: uuidv4(), title, author };
    dispatch(AddBook(book));
  };
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={AddBookHandler}>
        <input type="text" name="title" placeholder="Book title" onChange={() => {}} />
        <input type="text" name="author" placeholder="Author" onChange={() => {}} />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBookFrm;
