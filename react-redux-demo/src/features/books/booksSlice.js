import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inStock: 100,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    getBook: (state) => {
      state.inStock -= 1;
    },
    returnBook: (state) => {
      state.inStock += 1;
    },
    restockBook: (state, action) => {
      state.inStock += action.payload;
    },
  },
});

export default bookSlice.reducer;
export const { getBook, returnBook, restockBook } = bookSlice.actions;
