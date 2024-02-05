import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inStock: 50,
};

const journalSlice = createSlice({
  name: 'journals',
  initialState,
  reducers: {
    getJournal: (state) => {
      state.inStock -= 1;
    },
    returnJournal: (state) => {
      state.inStock += 1;
    },
    restockJournal: (state, action) => {
      state.inStock += action.payload;
    },
  },
});

export default journalSlice.reducer;
export const { getJournal, returnJournal, restockJournal } =
  journalSlice.actions;
