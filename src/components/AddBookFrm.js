// Import
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { AddBook } from '../redux/books/books';

const AddBookFrm = () => {
  const dispatch = useDispatch();
  const AddBookHandler = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const author = e.target.elements.author.value;
    dispatch(AddBook(title, author));
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
