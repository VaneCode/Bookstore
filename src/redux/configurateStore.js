import { configureStore } from '@reduxjs/toolkit';
import reducerBooks from './books/books';
import reducerCategories from './categories/categories';

const store = configureStore({
  reducer: {
    books: reducerBooks,
    categories: reducerCategories,
  },
});

export default store;
