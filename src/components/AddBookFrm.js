// Import
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { v4 as uuidv4 } from 'uuid';
import { AddBook } from '../redux/books/books';

const AddBookFrm = () => {
  const dispatch = useDispatch();
  // Array of categories
  const categories = [
    { id: uuidv4(), name: 'Category' },
    { id: uuidv4(), name: 'Fiction' },
    { id: uuidv4(), name: 'Tales' },
    { id: uuidv4(), name: 'Poetry' },
    { id: uuidv4(), name: 'Mithology' },
    { id: uuidv4(), name: 'Science' },
    { id: uuidv4(), name: 'Technology' },
    { id: uuidv4(), name: 'Narrative NonFicion' },
    { id: uuidv4(), name: 'Biography/Autobiography' },
  ];
  // Handler submit form
  const AddBookHandler = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const author = e.target.elements.author.value;
    const category = e.target.elements.category.value;
    const book = {
      id: uuidv4(), title, author, category,
    };
    dispatch(AddBook(book));
  };
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={AddBookHandler}>
        <input
          type="text"
          name="title"
          placeholder="Book title"
          onChange={() => {}}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          onChange={() => {}}
        />
        <select
          name="category"
          defaultValue={categories[0].name}
          onChange={() => {}}
        >
          {categories.map((item) => (
            <option value={item.name} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBookFrm;
