import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { RemoveBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { id, title, author } = props;
  const RemoveHandler = () => {
    dispatch(RemoveBook(id));
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
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
};

export default Book;
