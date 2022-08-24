// Import
import { v4 as uuidv4 } from 'uuid';

// Action types
const ADDED_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVE_BOOK';

// Create and export action creators
export const AddBook = (book) => ({
  type: ADDED_BOOK,
  payload: book,
});

export const RemoveBook = (id) => ({
  type: REMOVED_BOOK,
  payload: id,
});

// Initialize the state
const value = [
  {
    id: uuidv4(),
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: uuidv4(),
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

// Reducer
const reducerBooks = (state = value, action) => {
  const { payload } = action;
  switch (action.type) {
    case ADDED_BOOK:
      return [...state, payload];
    case REMOVED_BOOK:
      return {
        ...state.filter((book) => book.id !== payload),
      };
    default:
      return state;
  }
};

export default reducerBooks;
