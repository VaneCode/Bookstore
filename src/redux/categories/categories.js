// Action types
const CHECKED_STATUS = 'bookstore/categories/CHECKED_STATUS';

// Create and export action creators
export const CheckedStatus = () => ({
  type: CHECKED_STATUS,
});

// Initialize the state
const initialState = {
  categories: [],
};

// Reducer
const reducerCategories = (state = initialState, action) => {
  switch (action.type) {
    case CHECKED_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default reducerCategories;
