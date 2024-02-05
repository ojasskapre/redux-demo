import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  inStock: number;
};

const initialState: InitialState = {
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
    restockBook: (state, action: PayloadAction<number>) => {
      state.inStock += action.payload;
    },
  },
});

export default bookSlice.reducer;
export const { getBook, returnBook, restockBook } = bookSlice.actions;
