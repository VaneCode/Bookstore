// Import
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { v4 as uuidv4 } from 'uuid';
import { AddBook } from '../redux/books/books';
import styles from '../styles/AddBookFrm.module.css';

const AddBookFrm = () => {
  // Hooks
  const [inpTitle, setTitle] = useState('');
  const [inpAuthor, setAuthor] = useState('');
  const [selectCategory, setCategory] = useState('');
  const dispatch = useDispatch();
  // Handler submit form
  const AddBookHandler = (e) => {
    e.preventDefault();
    const book = {
      item_id: uuidv4(),
      title: inpTitle,
      author: inpAuthor,
      category: selectCategory,
    };
    dispatch(AddBook(book));
    setTitle(' ');
    setAuthor(' ');
    e.target.reset();
  };
  return (
    <div className={styles.AddBook}>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={AddBookHandler} className={styles.Form}>
        <input
          className={styles.Title}
          type="text"
          placeholder="Book title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className={styles.Author}
          type="text"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select
          className={styles.Category}
          defaultValue={selectCategory}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>
            Category
          </option>
          <option value="Fiction">Fiction</option>
          <option value="Tales">Tales</option>
          <option value="Poetry">Poetry</option>
          <option value="Mithology">Mithology</option>
          <option value="Science">Science</option>
          <option value="Technology">Technology</option>
          <option value="Narrative NonFiction">Narrative NonFicion</option>
          <option value="Biography/Autobiography">
            Biography/Autobiography
          </option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBookFrm;
