import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = (props) => {
  const { books } = props;
  return (
    <div>
      {books.map((data) => (
        <Book key={data.id} title={data.title} author={data.author} />
      ))}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.string,
};

BookList.defaultProps = {
  books: null,
};

export default BookList;
