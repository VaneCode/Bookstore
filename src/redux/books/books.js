/* eslint-disable no-param-reassign */
// Import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import url from '../../api/ApiUrl';

// Action types
const FETCHED_BOOKS = 'bookstore/books/FETCHED_BOOKS';
const ADDED_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVE_BOOK';

// Create and export action creators
export const FetchedBooks = createAsyncThunk(FETCHED_BOOKS, async () => {
  try {
    const response = await axios.get(url);
    const payload = Object.entries(response.data).map(([id, [book]]) => ({ ...book, item_id: id }));
    return payload;
  } catch (error) {
    return error;
  }
});

export const AddBook = createAsyncThunk(ADDED_BOOK, async (book) => {
  try {
    await axios.post(url, book);
    const payload = book;
    return payload;
  } catch (error) {
    return error;
  }
});

export const RemoveBook = createAsyncThunk(REMOVED_BOOK, async (id) => {
  try {
    await axios.delete(`${url}/${id}`);
    const payload = id;
    return payload;
  } catch (error) {
    return error;
  }
});

// Initialize the state
const initialState = {
  books: [],
  loading: 'idle',
};

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
      })
      .addCase(AddBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(RemoveBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      });
  },
});

export default reducerBooks.reducer;
