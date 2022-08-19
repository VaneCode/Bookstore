import PropTypes from 'prop-types';
import AddBookFrm from '../components/AddBookFrm';
import BookList from '../components/BookList';

const Books = (props) => {
  const { booksList } = props;
  return (
    <div>
      <BookList books={booksList} />
      <AddBookFrm />
    </div>
  );
};

Books.propTypes = {
  booksList: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default Books;
