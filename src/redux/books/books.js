/* eslint-disable no-param-reassign */
// Import
// import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import url from '../../api/ApiUrl';

// Action types
const FETCHED_BOOKS = 'bookstore/books/FETCHED_BOOKS';
const ADDED_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVE_BOOK';

// Create and export action creators
export const FetchedBooks = createAsyncThunk(FETCHED_BOOKS, async () => {
  // try {
  // const response = await axios.get(url);
  // return response.data;
  // } catch (error) {
  // return error;
  // }
  const response = await axios.get(url).catch((error) => error);
  return response.data;
});

export const AddBook = (book) => ({
  type: ADDED_BOOK,
  payload: book,
});

export const RemoveBook = (id) => ({
  type: REMOVED_BOOK,
  payload: id,
});

// Initialize the state
const initialState = {
  books: [],
  loading: 'idle',
};

// Reducer
// const reducerBooks = (state = value, action) => {
// const { payload } = action;
// switch (action.type) {
// case ADDED_BOOK:
// return [...state, payload];
// case REMOVED_BOOK:
// return [...state.filter((book) => book.id !== payload)];
// default:
// return state;
// }
// };

const reducerBooks = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(FetchedBooks.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(FetchedBooks.fulfilled, (state, action) => {
        state.status = 'Fulfilled';
        state.books = action.payload;
      })
      .addCase(FetchedBooks.rejected, (state, action) => {
        state.status = 'Rejected';
        state.error = action.error.message;
      });
  },
});

export default reducerBooks;
