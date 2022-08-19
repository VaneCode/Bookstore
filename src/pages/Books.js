import React from 'react';
import AddBookFrm from '../components/AddBookFrm';
import BookList from '../components/BookList';

const Books = () => {
  const data = {};
  return (
    <div>
      <BookList books={data} />
      <AddBookFrm />
    </div>
  );
};

export default Books;
