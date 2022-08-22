// Action types
const CHECKED_STATUS = 'redux/categories/CHECKED_STATUS';

// Create and export action creators
export const CheckedStatus = () => ({
  type: CHECKED_STATUS,
});

// Initialize the state
const initialState = {
  categories: [],
};

// Reducer
const reducerCategories = (action) => {
  switch (action.type) {
    case CHECKED_STATUS:
      return 'Under construction';
    default:
      return initialState;
  }
};

export default reducerCategories;
