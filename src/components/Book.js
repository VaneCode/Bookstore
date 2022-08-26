import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { RemoveBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = props;
  const RemoveHandler = () => {
    dispatch(RemoveBook(id));
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{category}</p>
      <button type="button">Comments</button>
      <button type="button" onClick={RemoveHandler}>Remove</button>
      <button type="button">Edit</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
