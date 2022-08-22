// Action types
const ADDED_BOOK = 'redux/books/ADD_BOOK';
const REMOVED_BOOK = 'redux/books/REMOVE_BOOK';

// Create and export action creators
export const AddBook = (newBook) => ({
  type: ADDED_BOOK,
  book: newBook,
});

export const RemoveBook = (idBook) => ({
  type: REMOVED_BOOK,
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
    case ADDED_BOOK:
      books.push(action.book);
      return { ...initialState, books };
    case REMOVED_BOOK:
      books = books.filter((book) => book.id !== action.id);
      return { ...initialState, books };
    default:
      return initialState;
  }
};

export default reducer;
