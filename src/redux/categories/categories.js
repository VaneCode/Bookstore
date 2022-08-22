// Action types
const ADD_BOOK = 'redux/books/ADD_BOOK';
const REMOVE_BOOK = 'redux/books/REMOVE_BOOK';

// Create and export action creators
export const AddBook = (newBook) => ({
  type: ADD_BOOK,
  book: newBook,
});

export const RemoveBook = (idBook) => ({
  type: REMOVE_BOOK,
  id: idBook,
});

// Initialize the state
const initialState = {
  books: [],
};

// Reducer
const reducer = (action) => {
  let { books } = initialState;
  switch (action.type) {
    case ADD_BOOK:
      books.push(action.book);
      return { ...initialState, books };
    case REMOVE_BOOK:
      books = books.filter((book) => book.id !== action.id);
      return { ...initialState, books };
    default:
      return initialState;
  }
};

export default reducer;
