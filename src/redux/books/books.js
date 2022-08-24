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
  let index = 0;
  switch (action.type) {
    case ADDED_BOOK:
      return [...state, payload];
    case REMOVED_BOOK:
      console.log(`remove payload${payload}`);
      index = state.findIndex((book) => book.id === payload);
      console.log(`index${index}`);
      return [
        ...state.filter((book) => book.id !== payload),
        // ...state.slice(0, index),
        // ...state.slice(index + 1),
      ];
    default:
      return state;
  }
};

export default reducerBooks;
